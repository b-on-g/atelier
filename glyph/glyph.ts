namespace $ {

	export type $bog_atelier_glyph_mark = {
		kind: $bog_atelier_lexicon_kind
		id: string | null
		lines: readonly number[]
		x: number
		y: number
		angle: number
		size: number
		distance: number
		rank: readonly { id: string, distance: number }[]
	}

	export type $bog_atelier_glyph_ring = {
		x: number
		y: number
		r: number
		wobble: number
		gap: number
		gap_at: number
		covered: number
	}

	export type $bog_atelier_glyph_reading = {
		ring: $bog_atelier_glyph_ring | null
		ring_lines: readonly number[]
		closed: boolean
		sigil: $bog_atelier_glyph_mark | null
		signs: readonly $bog_atelier_glyph_mark[]
		stray: readonly $bog_atelier_glyph_mark[]
	}

	export const $bog_atelier_glyph_band = 0.13
	export const $bog_atelier_glyph_core = 0.42
	export const $bog_atelier_glyph_accept = 0.09
	export const $bog_atelier_glyph_margin = 1.3
	export const $bog_atelier_glyph_closure = 2 * Math.PI / 180

	let templates_cache = new Map< string, readonly $bog_atelier_read_template[] >()

	export function $bog_atelier_glyph_templates( kind: $bog_atelier_lexicon_kind ) {
		let cached = templates_cache.get( kind )
		if( cached ) return cached
		cached = $bog_atelier_lexicon_of( kind ).map( entry => ( {
			id: entry.id,
			cloud: $bog_atelier_read_cloud( entry.strokes.map( line => $bog_atelier_ink_resample( line, Math.max( 8, Math.ceil( $bog_atelier_ink_length( line ) * 40 ) ) ) ) ),
		} ) )
		templates_cache.set( kind, cached )
		return cached
	}

	function arc_part( line: $bog_atelier_ink_line, x: number, y: number, r: number ) {
		let near = 0
		for( let i = 0; i < line.length; i += 2 ) {
			if( Math.abs( Math.hypot( line[ i ] - x, line[ i + 1 ] - y ) - r ) <= $bog_atelier_glyph_band * r ) ++ near
		}
		if( near < line.length / 2 * 0.85 ) return false
		const cover = $bog_atelier_ink_cover( [ line ], x, y, r, $bog_atelier_glyph_band )
		return cover.covered * Math.PI * 2 >= 0.35
	}

	export function $bog_atelier_glyph_ring_find( lines: readonly $bog_atelier_ink_line[] ) {
		let seed = -1
		let seed_ring: $bog_atelier_ink_ring | null = null
		let seed_score = 0
		for( let i = 0; i < lines.length; ++ i ) {
			const ring = $bog_atelier_ink_ring( lines[ i ] )
			if( !ring || ring.wobble > 0.12 || ring.sweep < Math.PI * 0.5 ) continue
			const score = ring.r * ring.sweep
			if( score > seed_score ) {
				seed = i
				seed_ring = ring
				seed_score = score
			}
		}
		if( seed < 0 || !seed_ring ) return null
		let { x, y, r } = seed_ring
		let parts = [ seed ]
		for( let round = 0; round < 2; ++ round ) {
			parts = lines.map( ( _, i )=> i ).filter( i => i === seed || arc_part( lines[ i ], x, y, r ) )
			const fit = $bog_atelier_ink_fit( $bog_atelier_ink_join( parts.map( i => lines[ i ] ) ) )
			if( fit && Number.isFinite( fit.r ) ) ( { x, y, r } = fit )
		}
		const joined = $bog_atelier_ink_join( parts.map( i => lines[ i ] ) )
		let dev = 0
		for( let i = 0; i < joined.length; i += 2 ) dev += ( Math.hypot( joined[ i ] - x, joined[ i + 1 ] - y ) - r ) ** 2
		const cover = $bog_atelier_ink_cover( parts.map( i => lines[ i ] ), x, y, r, $bog_atelier_glyph_band )
		if( cover.covered < 0.6 ) return null
		const ring: $bog_atelier_glyph_ring = {
			x, y, r,
			wobble: Math.sqrt( dev / ( joined.length / 2 ) ) / r,
			gap: cover.gap,
			gap_at: cover.gap_at,
			covered: cover.covered,
		}
		return { ring, parts }
	}

	export function $bog_atelier_glyph_groups( lines: readonly $bog_atelier_ink_line[], indexes: readonly number[], pad: number ) {
		const boxes = indexes.map( i => $bog_atelier_ink_box( lines[ i ] ) )
		const root = indexes.map( ( _, k )=> k )
		const find = ( k: number ): number => root[ k ] === k ? k : ( root[ k ] = find( root[ k ] ) )
		for( let a = 0; a < boxes.length; ++ a ) {
			for( let b = a + 1; b < boxes.length; ++ b ) {
				const A = boxes[ a ]
				const B = boxes[ b ]
				if( A.left - pad > B.right || B.left - pad > A.right ) continue
				if( A.top - pad > B.bottom || B.top - pad > A.bottom ) continue
				root[ find( a ) ] = find( b )
			}
		}
		const groups = new Map< number, number[] >()
		for( let k = 0; k < indexes.length; ++ k ) {
			const key = find( k )
			groups.set( key, [ ... groups.get( key ) ?? [], indexes[ k ] ] )
		}
		return [ ... groups.values() ]
	}

	function pick( rank: readonly { id: string, distance: number }[] ) {
		const best = rank[ 0 ]
		if( !best || best.distance > $bog_atelier_glyph_accept ) return null
		const second = rank[ 1 ]
		if( second && second.distance < best.distance * $bog_atelier_glyph_margin ) return null
		return best.id
	}

	export function $bog_atelier_glyph_local( line: $bog_atelier_ink_line, ring: $bog_atelier_glyph_ring ) {
		return line.map( ( v, i )=> ( v - ( i % 2 ? ring.y : ring.x ) ) / ring.r )
	}

	export function $bog_atelier_glyph_mark_read(
		lines: readonly $bog_atelier_ink_line[],
		group: readonly number[],
		ring: $bog_atelier_glyph_ring,
	): $bog_atelier_glyph_mark {
		const local = group.map( i => $bog_atelier_glyph_local( lines[ i ], ring ) )
		const joined = $bog_atelier_ink_join( local )
		const box = $bog_atelier_ink_box( joined )
		const x = box.left + box.width / 2
		const y = box.top + box.height / 2
		const size = Math.max( box.width, box.height )
		const angle = Math.atan2( y, x )
		const kind: $bog_atelier_lexicon_kind = Math.hypot( x, y ) < $bog_atelier_glyph_core ? 'sigil' : 'sign'
		let rank: { id: string, distance: number }[]
		if( kind === 'sigil' ) {
			rank = $bog_atelier_read_rank( $bog_atelier_read_cloud( local ), $bog_atelier_glyph_templates( 'sigil' ) )
		} else {
			const best = new Map< string, number >()
			for( const twist of [ -0.2, 0, 0.2 ] ) {
				const turn = Math.PI / 2 - angle + twist
				const posed = local.map( line => $bog_atelier_ink_move( line, 0, 0, 1, turn ) )
				for( const one of $bog_atelier_read_rank( $bog_atelier_read_cloud( posed ), $bog_atelier_glyph_templates( 'sign' ) ) ) {
					best.set( one.id, Math.min( best.get( one.id ) ?? Infinity, one.distance ) )
				}
			}
			rank = [ ... best ].map( ( [ id, distance ] )=> ( { id, distance } ) ).sort( ( a, b )=> a.distance - b.distance )
		}
		return { kind, id: pick( rank ), lines: group, x, y, angle, size, distance: rank[ 0 ]?.distance ?? Infinity, rank: rank.slice( 0, 3 ) }
	}

	export const $bog_atelier_glyph_sigil_size = 0.52
	export const $bog_atelier_glyph_sign_size = 0.26
	export const $bog_atelier_glyph_sign_orbit = 0.72

	export function $bog_atelier_glyph_sigil( id: string, size = $bog_atelier_glyph_sigil_size ) {
		const entry = $bog_atelier_lexicon_entry( id )
		if( !entry ) return []
		return entry.strokes.map( line => $bog_atelier_ink_move( line, 0, 0, size ) )
	}

	export function $bog_atelier_glyph_sign( id: string, angle: number, orbit = $bog_atelier_glyph_sign_orbit, size = $bog_atelier_glyph_sign_size ) {
		const entry = $bog_atelier_lexicon_entry( id )
		if( !entry ) return []
		const x = Math.cos( angle ) * orbit
		const y = Math.sin( angle ) * orbit
		return entry.strokes.map( line => $bog_atelier_ink_move( line, x, y, size, angle - Math.PI / 2 ) )
	}

	export function $bog_atelier_glyph_circle( gap = 0, gap_at = -Math.PI / 2, r = 1 ) {
		const from = gap_at + gap / 2
		return $bog_atelier_ink_arc( 0, 0, r, from, from + Math.PI * 2 - gap, 120 )
	}

	export function $bog_atelier_glyph_read( lines: readonly $bog_atelier_ink_line[] ): $bog_atelier_glyph_reading {
		const found = $bog_atelier_glyph_ring_find( lines )
		if( !found ) return { ring: null, ring_lines: [], closed: false, sigil: null, signs: [], stray: [] }
		const { ring, parts } = found
		const rest = lines.map( ( _, i )=> i ).filter( i => !parts.includes( i ) && lines[ i ].length >= 2 )
		const groups = $bog_atelier_glyph_groups( lines, rest, ring.r * 0.05 )
		const core = [] as number[]
		const outer = [] as number[][]
		for( const group of groups ) {
			const box = $bog_atelier_ink_box( $bog_atelier_glyph_local( $bog_atelier_ink_join( group.map( i => lines[ i ] ) ), ring ) )
			if( Math.hypot( box.left + box.width / 2, box.top + box.height / 2 ) < $bog_atelier_glyph_core ) core.push( ... group )
			else outer.push( group )
		}
		const marks = [ ... core.length ? [ core ] : [], ... outer ].map( group => $bog_atelier_glyph_mark_read( lines, group, ring ) )
		const inside = marks.filter( mark => Math.hypot( mark.x, mark.y ) < 1 + $bog_atelier_glyph_band )
		const cores = inside.filter( mark => mark.kind === 'sigil' ).sort( ( a, b )=> b.size - a.size )
		const sigil = cores.find( mark => mark.id ) ?? cores[ 0 ] ?? null
		const signs = inside.filter( mark => mark.kind === 'sign' && mark.id )
		const stray = marks.filter( mark => mark !== sigil && !signs.includes( mark ) )
		return {
			ring,
			ring_lines: parts,
			closed: ring.gap <= $bog_atelier_glyph_closure,
			sigil,
			signs,
			stray,
		}
	}

}
