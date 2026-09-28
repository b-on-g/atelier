namespace $ {

	type sign = readonly [ string, number, number?, boolean? ]

	const lines_of = ( sigil: string, signs: readonly sign[], wobble = 0, r = 1 )=> [
		$bog_atelier_glyph_circle( 0, 0, r ).map( ( v, i )=> v * ( 1 + Math.sin( i * 0.9 ) * wobble ) ),
		... $bog_atelier_glyph_sigil( sigil, $bog_atelier_glyph_sigil_size * r ),
		... signs.flatMap( ( [ id, angle, size = 1, inverted = false ] )=> $bog_atelier_glyph_sign( id, angle, $bog_atelier_glyph_sign_orbit * r, $bog_atelier_glyph_sign_size * size * r, inverted ) ),
	]

	const cast = ( sigil: string, signs: readonly sign[], wobble = 0, r = 1 )=> $bog_atelier_spell_of( $bog_atelier_glyph_read( lines_of( sigil, signs, wobble, r ) ) )

	const quarter = Math.PI / 2
	const ring_of = ( id: string, count = 4 )=> Array.from( { length: count }, ( _, k )=> [ id, k * Math.PI * 2 / count ] as sign )

	$mol_test({

		'sigil gives the element'() {
			$mol_assert_equal( cast( 'water', [] ).element, 'water' )
			$mol_assert_equal( cast( 'light', [] ).element, 'light' )
			$mol_assert_equal( cast( 'aeroform', [] ).element, 'air' )
		},

		'watershot: even ring of columns shoots straight up'() {
			const spell = cast( 'water', ring_of( 'column' ) )
			$mol_assert_equal( spell.form, 'jet' )
			$mol_assert_ok( Math.hypot( spell.tilt_x, spell.tilt_y ) < 0.05 )
		},

		'longer column pulls the jet to its side'() {
			const spell = cast( 'water', [ [ 'column', 0, 1.5 ], [ 'column', quarter ], [ 'column', quarter * 2 ], [ 'column', quarter * 3 ] ] )
			$mol_assert_ok( spell.tilt_x > 0.1 )
			$mol_assert_ok( Math.abs( spell.tilt_y ) < 0.05 )
		},

		'extra column pulls the jet to the crowded side'() {
			const spell = cast( 'water', [ [ 'column', -0.4 ], [ 'column', 0.4 ], [ 'column', quarter * 2 ] ] )
			$mol_assert_ok( spell.tilt_x > 0.2 )
		},

		'pyreball: levitations around fire hold a ball'() {
			const spell = cast( 'fire', ring_of( 'levitation' ) )
			$mol_assert_equal( spell.form, 'ball' )
			$mol_assert_ok( spell.hover > 0.5 )
		},

		'bigger glyph is stronger'() {
			$mol_assert_ok( cast( 'fire', [], 0, 1 ).power > cast( 'fire', [], 0, 0.5 ).power + 0.2 )
		},

		'sloppy glyph burns out sooner'() {
			const neat = cast( 'fire', [] )
			const sloppy = cast( 'fire', [], 0.04 )
			$mol_assert_ok( sloppy.life < neat.life )
			$mol_assert_ok( sloppy.power > 0 )
		},

		'crush breaks and flipped crush mends'() {
			$mol_assert_equal( cast( 'earth', ring_of( 'crush' ) ).form, 'dust' )
			$mol_assert_equal( cast( 'earth', ring_of( 'crush' ).map( ( [ id, a ] )=> [ id, a, 1, true ] as sign ) ).form, 'mend' )
		},

		'four convergences focus into a ball'() {
			const one = cast( 'light', [ [ 'convergence', 0 ] ] )
			const four = cast( 'light', ring_of( 'convergence' ) )
			$mol_assert_equal( four.form, 'ball' )
			$mol_assert_ok( four.focus > one.focus + 0.5 )
		},

		'grasping wind: pulls make a vortex'() {
			$mol_assert_equal( cast( 'wind', ring_of( 'pull' ) ).form, 'vortex' )
		},

		'unknown sigil misfires'() {
			$mol_assert_equal( $bog_atelier_spell_of( $bog_atelier_glyph_read( [ $bog_atelier_glyph_circle() ] ) ).misfire, true )
		},

	})

}
