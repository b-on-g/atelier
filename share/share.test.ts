namespace $ {

	$mol_test({

		'packed glyph unpacks to the same points'() {
			const lines = [ $bog_atelier_glyph_circle(), ... $bog_atelier_glyph_sigil( 'water' ) ]
			const back = $bog_atelier_share_unpack( $bog_atelier_share_pack( lines ) )
			$mol_assert_equal( back.length, lines.length )
			for( let k = 0; k < lines.length; ++ k ) {
				$mol_assert_equal( back[ k ].length, lines[ k ].length )
				for( let i = 0; i < lines[ k ].length; ++ i ) $mol_assert_ok( Math.abs( back[ k ][ i ] - lines[ k ][ i ] ) <= 0.0026 )
			}
		},

		'code is url safe'() {
			const code = $bog_atelier_share_pack( [ $bog_atelier_glyph_circle(), ... $bog_atelier_glyph_sign( 'column', 1 ) ] )
			$mol_assert_equal( encodeURIComponent( code ), code )
		},

		'broken code fails loudly'() {
			$mol_assert_fail( ()=> $bog_atelier_share_unpack( 'CC' ), 'Glyph code is cut' )
		},

		'opened glyph sleeps until the ring is closed again'() {
			const lines = [ $bog_atelier_glyph_circle(), ... $bog_atelier_glyph_sigil( 'fire' ) ]
			const reading = $bog_atelier_glyph_read( lines )
			$mol_assert_equal( reading.closed, true )
			const opened = $bog_atelier_share_open( lines, reading.ring_lines, reading.ring!.x, reading.ring!.y )
			const again = $bog_atelier_glyph_read( opened )
			$mol_assert_equal( again.closed, false )
			$mol_assert_equal( again.sigil?.id, 'fire' )
		},

	})

}
