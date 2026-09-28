namespace $ {

	const tri = [ [ 0, -1, 0.87, 0.5, -0.87, 0.5, 0, -1 ] ]
	const cross = [ [ -1, -1, 1, 1 ], [ 1, -1, -1, 1 ] ]
	const bar = [ [ -1, 0, 1, 0 ] ]
	const ring = [ $bog_atelier_ink_arc( 0, 0, 1, 0, Math.PI * 2, 40 ) ]

	const templates = [
		{ id: 'tri', cloud: $bog_atelier_read_cloud( tri ) },
		{ id: 'cross', cloud: $bog_atelier_read_cloud( cross ) },
		{ id: 'bar', cloud: $bog_atelier_read_cloud( bar ) },
		{ id: 'ring', cloud: $bog_atelier_read_cloud( ring ) },
	]

	const hand = ( lines: readonly ( readonly number[] )[], dx: number, scale: number )=> lines.map(
		line => $bog_atelier_ink_resample( line, 20 ).map( ( v, i )=> v * scale + dx + Math.sin( i * 7.31 ) * 0.04 * scale )
	)

	$mol_test({

		'moved and scaled drawing reads as its template'() {
			for( const [ id, lines ] of [ [ 'tri', tri ], [ 'cross', cross ], [ 'bar', bar ], [ 'ring', ring ] ] as const ) {
				const rank = $bog_atelier_read_rank( $bog_atelier_read_cloud( hand( lines, 40, 17 ) ), templates )
				$mol_assert_equal( rank[ 0 ].id, id )
			}
		},

		'stroke order and direction do not matter'() {
			const flipped = [ [ -1, 1, 1, -1 ], [ 1, 1, -1, -1 ] ]
			const rank = $bog_atelier_read_rank( $bog_atelier_read_cloud( flipped ), templates )
			$mol_assert_equal( rank[ 0 ].id, 'cross' )
		},

		'empty drawing reads nothing'() {
			$mol_assert_equal( $bog_atelier_read_cloud( [] ).length, 0 )
			$mol_assert_equal( $bog_atelier_read_rank( [], templates )[ 0 ].distance, Infinity )
		},

	})

}
