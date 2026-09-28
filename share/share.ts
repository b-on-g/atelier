namespace $ {

	const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_'
	const step = 1 / 200

	function put( out: string[], value: number ) {
		let rest = value < 0 ? -value * 2 - 1 : value * 2
		do {
			const chunk = rest & 31
			rest = Math.floor( rest / 32 )
			out.push( alphabet[ chunk | ( rest ? 32 : 0 ) ] )
		} while( rest )
	}

	export function $bog_atelier_share_pack( lines: readonly $bog_atelier_ink_line[] ) {
		const out = [] as string[]
		put( out, lines.length )
		for( const line of lines ) {
			const points = line.length / 2
			put( out, points )
			let px = 0
			let py = 0
			for( let i = 0; i < line.length; i += 2 ) {
				const x = Math.round( line[ i ] / step )
				const y = Math.round( line[ i + 1 ] / step )
				put( out, x - px )
				put( out, y - py )
				px = x
				py = y
			}
		}
		return out.join( '' )
	}

	export function $bog_atelier_share_unpack( text: string ) {
		let at = 0
		const take = ()=> {
			let value = 0
			let scale = 1
			while( true ) {
				if( at >= text.length ) throw new Error( 'Glyph code is cut' )
				const code = alphabet.indexOf( text[ at ++ ] )
				if( code < 0 ) throw new Error( 'Glyph code has a stray letter' )
				value += ( code & 31 ) * scale
				scale *= 32
				if( !( code & 32 ) ) break
			}
			return value % 2 ? -( value + 1 ) / 2 : value / 2
		}
		const lines = [] as number[][]
		const count = take()
		for( let k = 0; k < count; ++ k ) {
			const points = take()
			const line = [] as number[]
			let x = 0
			let y = 0
			for( let i = 0; i < points; ++ i ) {
				x += take()
				y += take()
				line.push( x * step, y * step )
			}
			lines.push( line )
		}
		return lines as readonly $bog_atelier_ink_line[]
	}

	export function $bog_atelier_share_thin( line: $bog_atelier_ink_line, gap = 0.012 ) {
		const out = [ line[ 0 ], line[ 1 ] ]
		for( let i = 2; i < line.length - 2; i += 2 ) {
			const x = out[ out.length - 2 ]
			const y = out[ out.length - 1 ]
			if( Math.hypot( line[ i ] - x, line[ i + 1 ] - y ) >= gap ) out.push( line[ i ], line[ i + 1 ] )
		}
		if( line.length >= 4 ) out.push( line[ line.length - 2 ], line[ line.length - 1 ] )
		return out
	}

	export function $bog_atelier_share_open( lines: readonly $bog_atelier_ink_line[], ring: readonly number[], cx: number, cy: number, at = -Math.PI / 2, width = 0.3 ) {
		const out = [] as number[][]
		lines.forEach( ( line, index )=> {
			if( !ring.includes( index ) ) return out.push( [ ... line ] )
			let piece = [] as number[]
			for( let i = 0; i < line.length; i += 2 ) {
				const a = Math.atan2( line[ i + 1 ] - cy, line[ i ] - cx )
				const off = Math.abs( Math.atan2( Math.sin( a - at ), Math.cos( a - at ) ) )
				if( off < width / 2 ) {
					if( piece.length >= 4 ) out.push( piece )
					piece = []
				} else {
					piece.push( line[ i ], line[ i + 1 ] )
				}
			}
			if( piece.length >= 4 ) out.push( piece )
		} )
		return out as readonly $bog_atelier_ink_line[]
	}

}
