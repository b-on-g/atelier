namespace $ {

	const hand = ( lines: readonly $bog_atelier_ink_line[], seed: number, amp = 0.012 )=> lines.map( ( line, k )=> {
		const dense = $bog_atelier_ink_resample( line, Math.max( 6, Math.ceil( $bog_atelier_ink_length( line ) * 60 ) ) )
		return dense.map( ( v, i )=> v + Math.sin( ( i + 1 ) * 12.9898 + seed * 78.233 + k * 3.7 ) * amp )
	} )

	const glyph = ( sigil: string, signs: readonly [ string, number ][], gap = 0, seed = 1 )=> hand( [
		$bog_atelier_glyph_circle( gap ),
		... $bog_atelier_glyph_sigil( sigil ),
		... signs.flatMap( ( [ id, angle ] )=> $bog_atelier_glyph_sign( id, angle ) ),
	], seed )

	$mol_test({

		'every sigil reads as itself at the center'() {
			for( const entry of $bog_atelier_lexicon_of( 'sigil' ) ) {
				const reading = $bog_atelier_glyph_read( glyph( entry.id, [], 0, entry.id.length ) )
				$mol_assert_equal( [ entry.id, reading.sigil?.id ], [ entry.id, entry.id ] )
			}
		},

		'every sign reads as itself anywhere on the orbit'() {
			for( const entry of $bog_atelier_lexicon_of( 'sign' ) ) {
				for( const angle of [ 0, 1, 2.5, 4 ] ) {
					const reading = $bog_atelier_glyph_read( glyph( 'fire', [ [ entry.id, angle ] ], 0, angle ) )
					$mol_assert_equal( [ entry.id, angle, reading.signs[ 0 ]?.id ], [ entry.id, angle, entry.id ] )
				}
			}
		},

		'closed ring is closed and open ring is not'() {
			$mol_assert_equal( $bog_atelier_glyph_read( glyph( 'fire', [] ) ).closed, true )
			$mol_assert_equal( $bog_atelier_glyph_read( glyph( 'fire', [], 0.3 ) ).closed, false )
		},

		'gap is found where it was left'() {
			const reading = $bog_atelier_glyph_read( glyph( 'water', [], 0.4 ) )
			$mol_assert_equal( Math.round( reading.ring!.gap_at * 10 ), Math.round( -Math.PI / 2 * 10 ) )
		},

		'arc drawn over the gap closes the ring'() {
			const lines = [ ... glyph( 'light', [ [ 'column', 0 ], [ 'column', Math.PI ] ], 0.5 ) ]
			$mol_assert_equal( $bog_atelier_glyph_read( lines ).closed, false )
			lines.push( $bog_atelier_ink_arc( 0, 0, 1.02, -Math.PI / 2 - 0.35, -Math.PI / 2 + 0.35, 20 ) )
			const reading = $bog_atelier_glyph_read( lines )
			$mol_assert_equal( reading.closed, true )
			$mol_assert_equal( reading.sigil?.id, 'light' )
			$mol_assert_equal( reading.signs.map( sign => sign.id ), [ 'column', 'column' ] )
		},

		'glyph drawn anywhere at any size reads the same'() {
			const lines = glyph( 'earth', [ [ 'levitation', 0.5 ] ] ).map( line => $bog_atelier_ink_move( line, 300, 200, 150 ) )
			const reading = $bog_atelier_glyph_read( lines )
			$mol_assert_equal( reading.sigil?.id, 'earth' )
			$mol_assert_equal( reading.signs[ 0 ]?.id, 'levitation' )
		},

		'scribble is not a sigil'() {
			const scribble = [ Array.from( { length: 40 }, ( _, i )=> [ Math.sin( i * 1.7 ) * 0.3, Math.cos( i * 2.9 ) * 0.3 ] ).flat() ]
			const reading = $bog_atelier_glyph_read( [ $bog_atelier_glyph_circle(), ... scribble ] )
			$mol_assert_equal( reading.sigil?.id ?? null, null )
		},

		'no ring reads nothing'() {
			const reading = $bog_atelier_glyph_read( $bog_atelier_glyph_sigil( 'fire' ) )
			$mol_assert_equal( reading.ring, null )
		},

	})

}
