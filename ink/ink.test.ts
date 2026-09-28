namespace $ {

	const shaky = ( line: readonly number[], amp: number )=> line.map( ( v, i )=> v + Math.sin( i * 12.9898 ) * amp )

	$mol_test({

		'full circle fits center and radius'() {
			const ring = $bog_atelier_ink_ring( $bog_atelier_ink_arc( 3, -2, 5, 0, Math.PI * 2, 90 ) )!
			$mol_assert_equal( Math.round( ring.x * 100 ), 300 )
			$mol_assert_equal( Math.round( ring.y * 100 ), -200 )
			$mol_assert_equal( Math.round( ring.r * 100 ), 500 )
			$mol_assert_equal( $bog_atelier_ink_closed( ring ), true )
		},

		'open arc keeps a gap'() {
			const ring = $bog_atelier_ink_ring( $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 1.8, 90 ) )!
			$mol_assert_equal( $bog_atelier_ink_closed( ring ), false )
			$mol_assert_equal( $bog_atelier_ink_ring_like( ring ), true )
		},

		'straight line is not a ring'() {
			const ring = $bog_atelier_ink_ring( [ 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7.1 ] )
			$mol_assert_equal( $bog_atelier_ink_ring_like( ring ), false )
		},

		'trembling hand raises wobble'() {
			const calm = $bog_atelier_ink_ring( $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 2, 90 ) )!
			const shaking = $bog_atelier_ink_ring( shaky( $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 2, 90 ), 0.05 ) )!
			$mol_assert_ok( shaking.wobble > calm.wobble + 0.02 )
		},

		'resample keeps ends and count'() {
			const line = $bog_atelier_ink_resample( [ 0, 0, 10, 0 ], 11 )
			$mol_assert_equal( line.length, 22 )
			$mol_assert_equal( line[ 2 ], 1 )
			$mol_assert_equal( line[ 20 ], 10 )
		},

		'cover finds the missing arc'() {
			const arc = $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 1.5, 90 )
			const cover = $bog_atelier_ink_cover( [ arc ], 0, 0, 1 )
			$mol_assert_equal( Math.round( cover.gap / Math.PI * 10 ), 5 )
			$mol_assert_equal( Math.round( cover.gap_at / Math.PI * 100 ), -25 )
		},

		'cover is closed by a second stroke'() {
			const arc = $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 1.5, 90 )
			const patch = $bog_atelier_ink_arc( 0, 0, 1.05, Math.PI * 1.45, Math.PI * 2.05, 30 )
			const cover = $bog_atelier_ink_cover( [ arc, patch ], 0, 0, 1 )
			$mol_assert_equal( cover.gap, 0 )
		},

		'stroke far from the ring does not cover it'() {
			const arc = $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 1.5, 90 )
			const inner = $bog_atelier_ink_arc( 0, 0, 0.5, Math.PI * 1.45, Math.PI * 2.05, 30 )
			const cover = $bog_atelier_ink_cover( [ arc, inner ], 0, 0, 1 )
			$mol_assert_ok( cover.gap > 1 )
		},

	})

}
