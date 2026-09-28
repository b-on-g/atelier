namespace $ {

	export type $bog_atelier_spell_form = 'still' | 'jet' | 'ball' | 'fan' | 'bolt' | 'vortex' | 'dust' | 'mend'

	export type $bog_atelier_spell = {
		element: $bog_atelier_lexicon_element | null
		sigil: string | null
		form: $bog_atelier_spell_form
		power: number
		neat: number
		life: number
		lift: number
		tilt_x: number
		tilt_y: number
		spread: number
		focus: number
		hover: number
		misfire: boolean
		counts: Readonly< Record< string, number > >
		flipped: Readonly< Record< string, number > >
	}

	export function $bog_atelier_spell_empty(): $bog_atelier_spell {
		return {
			element: null, sigil: null, form: 'still', power: 0, neat: 0, life: 0, lift: 0, tilt_x: 0, tilt_y: 0,
			spread: 0, focus: 0, hover: 0, misfire: false, counts: {}, flipped: {},
		}
	}

	const clamp = ( v: number, min = 0, max = 1 )=> Math.min( max, Math.max( min, v ) )

	export const $bog_atelier_spell_leaners = [ 'column', 'levitation', 'dispersion', 'direction', 'bolt' ] as readonly string[]

	export function $bog_atelier_spell_of( reading: $bog_atelier_glyph_reading, sheet = 1 ): $bog_atelier_spell {
		const spell = $bog_atelier_spell_empty()
		const ring = reading.ring
		if( !ring ) return spell
		const sigil = reading.sigil
		const entry = sigil?.id ? $bog_atelier_lexicon_entry( sigil.id ) : null
		spell.sigil = entry?.id ?? null
		spell.element = entry?.element ?? null

		const counts: Record< string, number > = {}
		const flipped: Record< string, number > = {}
		for( const sign of reading.signs ) {
			const bag = sign.inverted ? flipped : counts
			bag[ sign.id! ] = ( bag[ sign.id! ] ?? 0 ) + 1
		}
		spell.counts = counts
		spell.flipped = flipped
		const has = ( id: string )=> counts[ id ] ?? 0
		const has_flipped = ( id: string )=> flipped[ id ] ?? 0

		const marks = [ ... sigil ? [ sigil ] : [], ... reading.signs ]
		const mark_neat = marks.length
			? marks.reduce( ( sum, mark )=> sum + clamp( 1 - mark.distance / $bog_atelier_glyph_accept ), 0 ) / marks.length
			: 0
		const ring_neat = clamp( 1 - ring.wobble / 0.08 )
		spell.neat = clamp( ring_neat * 0.6 + mark_neat * 0.4 - reading.stray.length * 0.12 )
		spell.life = 3 + 57 * spell.neat ** 2

		const scale = clamp( ring.r / sheet, 0.25, 1.2 )
		const sigil_scale = sigil ? clamp( sigil.size / $bog_atelier_glyph_sigil_size, 0.4, 1.4 ) : 0
		spell.power = entry ? clamp( scale * ( 0.55 + 0.45 * sigil_scale ), 0, 1.3 ) : 0
		spell.misfire = !entry || spell.neat < 0.15

		let lean_x = 0
		let lean_y = 0
		let weight = 0
		let inward = 0
		let outward = 0
		for( const sign of reading.signs ) {
			if( !$bog_atelier_spell_leaners.includes( sign.id! ) ) continue
			const w = sign.size / $bog_atelier_glyph_sign_size
			lean_x += Math.cos( sign.angle ) * w
			lean_y += Math.sin( sign.angle ) * w
			weight += w
			if( sign.id === 'direction' ) {
				if( sign.inverted ) ++ outward
				else ++ inward
			}
		}
		if( weight ) {
			spell.tilt_x = clamp( lean_x / weight * 1.6, -1, 1 )
			spell.tilt_y = clamp( lean_y / weight * 1.6, -1, 1 )
		}

		const columns = has( 'column' ) + has( 'dispersion' ) + has( 'bolt' ) + inward
		spell.lift = columns ? clamp( 0.4 + 0.15 * columns ) : 0
		if( has_flipped( 'column' ) && !columns ) spell.lift = -0.5
		spell.spread = clamp( 0.2 + 0.35 * has( 'dispersion' ) + 0.3 * outward - 0.15 * has( 'convergence' ) )
		spell.focus = clamp( [ 0, 0.15, 0.55, 0.7, 1 ][ Math.min( 4, has( 'convergence' ) ) ] )
		spell.hover = clamp( 0.3 * has( 'levitation' ) + 0.35 * has( 'float' ) )

		spell.form =
			has( 'crush' ) ? 'dust' :
			has_flipped( 'crush' ) ? 'mend' :
			has( 'pull' ) || has( 'collection' ) ? 'vortex' :
			has( 'bolt' ) ? 'bolt' :
			spell.focus >= 0.9 ? 'ball' :
			has( 'dispersion' ) || outward ? 'fan' :
			columns ? 'jet' :
			spell.hover > 0 ? 'ball' :
			'still'
		return spell
	}

}
