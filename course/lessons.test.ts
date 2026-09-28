namespace $ {

	$mol_test({

		'every lesson sleeps until its gap is closed'() {
			for( const lesson of $bog_atelier_course_lessons ) {
				const reading = $bog_atelier_glyph_read( $bog_atelier_course_base( lesson ) )
				$mol_assert_equal( [ lesson.id, reading.ring !== null, reading.closed ], [ lesson.id, true, false ] )
			}
		},

		'every lesson reads as written once the guide is traced'() {
			for( const lesson of $bog_atelier_course_lessons ) {
				const reading = $bog_atelier_glyph_read( [ ... $bog_atelier_course_base( lesson ), ... $bog_atelier_course_guide( lesson ) ] )
				const want = lesson.signs.map( ( [ id, , , inverted = false ] )=> `${ id }${ inverted ? '!' : '' }` ).sort()
				const got = reading.signs.map( sign => `${ sign.id }${ sign.inverted ? '!' : '' }` ).sort()
				$mol_assert_equal( [ lesson.id, reading.closed, reading.sigil?.id, got ], [ lesson.id, true, lesson.sigil, want ] )
			}
		},

		'lesson ids are unique'() {
			const ids = $bog_atelier_course_lessons.map( lesson => lesson.id )
			$mol_assert_equal( new Set( ids ).size, ids.length )
		},

		'course has between ten and twenty lessons'() {
			const count = $bog_atelier_course_lessons.length
			$mol_assert_ok( count >= 10 && count <= 20 )
		},

	})

}
