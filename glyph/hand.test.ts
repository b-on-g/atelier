namespace $ {

	function sloppy( seed: number ) {
		let state = seed
		const next = ()=> ( state = ( state * 1103515245 + 12345 ) & 0x7fffffff ) / 0x7fffffff
		const spread = ( amp: number )=> ( next() * 2 - 1 ) * amp
		const stroke = ( line: $bog_atelier_ink_line, amp: number ) => {
			const count = Math.max( 8, Math.ceil( $bog_atelier_ink_length( line ) * 70 ) )
			const dense = $bog_atelier_ink_resample( line, count )
			const [ cx, cy ] = $bog_atelier_ink_center( dense )
			const turn = spread( 0.14 )
			const sx = 1 + spread( 0.1 )
			const sy = 1 + spread( 0.1 )
			const f = 2 + next() * 4
			const p = next() * 6
			const out = [] as number[]
			for( let i = 0; i < dense.length; i += 2 ) {
				const x = ( dense[ i ] - cx ) * sx
				const y = ( dense[ i + 1 ] - cy ) * sy
				const t = i / dense.length
				out.push(
					x * Math.cos( turn ) - y * Math.sin( turn ) + cx + Math.sin( t * f + p ) * amp,
					x * Math.sin( turn ) + y * Math.cos( turn ) + cy + Math.cos( t * f + p ) * amp,
				)
			}
			return out
		}
		return { next, spread, stroke }
	}

	function score( kind: $bog_atelier_lexicon_kind, count: number ) {
		const hand = sloppy( 7 )
		let ok = 0
		let wrong = 0
		let total = 0
		for( const entry of $bog_atelier_lexicon_of( kind ) ) {
			for( let k = 0; k < count; ++ k ) {
				const angle = hand.next() * Math.PI * 2
				const parts = kind === 'sigil'
					? $bog_atelier_glyph_sigil( entry.id, $bog_atelier_glyph_sigil_size * ( 0.75 + hand.next() * 0.45 ) )
						.map( line => $bog_atelier_ink_move( line, hand.spread( 0.05 ), hand.spread( 0.05 ) ) )
					: [
						... $bog_atelier_glyph_sigil( 'fire' ),
						... $bog_atelier_glyph_sign( entry.id, angle, 0.62 + hand.next() * 0.16, $bog_atelier_glyph_sign_size * ( 0.8 + hand.next() * 0.45 ) ),
					]
				const reading = $bog_atelier_glyph_read( [
					hand.stroke( $bog_atelier_glyph_circle(), 0.012 ),
					... parts.map( line => hand.stroke( line, 0.006 ) ),
				] )
				const got = kind === 'sigil'
					? reading.sigil?.id ?? null
					: reading.signs.find( sign => Math.abs( Math.atan2( Math.sin( sign.angle - angle ), Math.cos( sign.angle - angle ) ) ) < 0.5 )?.id ?? null
				++ total
				if( got === entry.id ) ++ ok
				else if( got ) ++ wrong
			}
		}
		return { ok: ok / total, wrong: wrong / total }
	}

	$mol_test({

		'sloppy hand still reads sigils'() {
			const result = score( 'sigil', 8 )
			$mol_assert_ok( result.ok >= 0.85 )
			$mol_assert_ok( result.wrong <= 0.03 )
		},

		'sloppy hand still reads signs'() {
			const result = score( 'sign', 8 )
			$mol_assert_ok( result.ok >= 0.9 )
			$mol_assert_ok( result.wrong <= 0.03 )
		},

	})

}
