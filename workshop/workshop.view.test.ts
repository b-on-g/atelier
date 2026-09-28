namespace $.$$ {

	$mol_test({

		'empty sheet asks for a ring and shows a guide'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			$mol_assert_equal( sheet.reading().ring, null )
			$mol_assert_equal( sheet.status(), sheet.status_empty() )
			$mol_assert_equal( sheet.guide().length, 1 )
		},

		'stamps build a watershot that sleeps until the ring is closed'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			sheet.stamp_ring()
			sheet.stamp_sigil( 'water' )
			for( let k = 0; k < 4; ++ k ) sheet.stamp_sign( 'column' )
			const reading = sheet.reading()
			$mol_assert_equal( reading.closed, false )
			$mol_assert_equal( reading.sigil?.id, 'water' )
			$mol_assert_equal( reading.signs.map( sign => sign.id ), [ 'column', 'column', 'column', 'column' ] )
			$mol_assert_equal( sheet.story(), [] )
			sheet.lines( [ ... sheet.lines(), $bog_atelier_ink_arc( 0, 0, 1, -Math.PI / 2 - 0.3, -Math.PI / 2 + 0.3, 24 ) ] )
			$mol_assert_equal( sheet.closed(), true )
			$mol_assert_ok( sheet.story()[ 0 ].startsWith( 'Вода' ) )
			$mol_assert_equal( sheet.tools()[ 0 ], sheet.Break() )
		},

		'breaking the ring stops the spell and keeps the drawing'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			sheet.lines( [ $bog_atelier_glyph_circle(), ... $bog_atelier_glyph_sigil( 'fire' ) ] )
			$mol_assert_equal( sheet.closed(), true )
			sheet.break()
			$mol_assert_equal( sheet.closed(), false )
			$mol_assert_equal( sheet.reading().sigil?.id, 'fire' )
		},

		'stamped sigil replaces the old one'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			sheet.stamp_ring()
			sheet.stamp_sigil( 'fire' )
			sheet.stamp_sigil( 'light' )
			$mol_assert_equal( sheet.reading().sigil?.id, 'light' )
			$mol_assert_equal( sheet.lines().length, 1 + $bog_atelier_lexicon_entry( 'light' )!.strokes.length )
		},

		'signs spread around the ring instead of piling up'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			sheet.stamp_ring()
			sheet.stamp_sign( 'column' )
			sheet.stamp_sign( 'column' )
			const [ a, b ] = sheet.reading().signs.map( sign => sign.angle )
			$mol_assert_ok( Math.abs( Math.atan2( Math.sin( a - b ), Math.cos( a - b ) ) ) > 3 )
		},

		'undo and clear'( $ ) {
			const sheet = $bog_atelier_workshop.make({ $ })
			sheet.stamp_ring()
			sheet.stamp_sign( 'crush' )
			const count = sheet.lines().length
			sheet.undo()
			$mol_assert_equal( sheet.lines().length, count - 1 )
			sheet.clear()
			$mol_assert_equal( sheet.lines(), [] )
		},

	})

}
