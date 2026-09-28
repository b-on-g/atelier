namespace $.$$ {

	$mol_test({

		'first lesson opens with a sleeping glyph'( $ ) {
			const course = $bog_atelier_course.make({ $ })
			$mol_assert_equal( course.lesson().id, 'spark' )
			$mol_assert_equal( course.closed(), false )
			$mol_assert_equal( course.actions(), [] )
		},

		'later lessons are locked until the earlier ones are passed'( $ ) {
			const course = $bog_atelier_course.make({ $ })
			$mol_assert_equal( course.item_open( 'spark' ), true )
			$mol_assert_equal( course.item_open( 'glow' ), false )
			$mol_assert_equal( course.item_open( 'sloppy' ), false )
		},

		'tracing the guide casts, marks the lesson and unlocks the next one'( $ ) {
			const course = $bog_atelier_course.make({ $ })
			course.lines( $bog_atelier_course_guide( course.lesson() ) )
			$mol_assert_equal( course.closed(), true )
			course.auto()
			$mol_assert_equal( course.done(), [ 'spark' ] )
			$mol_assert_equal( course.item_open( 'glow' ), true )
			$mol_assert_equal( course.actions(), [ course.Next(), course.Again() ] )
			course.next()
			$mol_assert_equal( course.lesson().id, 'glow' )
			$mol_assert_equal( course.lines(), [] )
			$mol_assert_equal( course.closed(), false )
		},

		'passing a lesson keeps you on it'( $ ) {
			const course = $bog_atelier_course.make({ $ })
			course.lines( $bog_atelier_course_guide( course.lesson() ) )
			course.auto()
			$mol_assert_equal( course.lesson().id, 'spark' )
		},

		'again wipes only what was drawn'( $ ) {
			const course = $bog_atelier_course.make({ $ })
			const base = course.base()
			course.lines( $bog_atelier_course_guide( course.lesson() ) )
			course.again()
			$mol_assert_equal( course.lines(), [] )
			$mol_assert_equal( course.base(), base )
			$mol_assert_equal( course.closed(), false )
		},

	})

}
