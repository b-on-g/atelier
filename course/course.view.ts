namespace $.$$ {

	export class $bog_atelier_course extends $.$bog_atelier_course {

		lessons() {
			return $bog_atelier_course_lessons
		}

		@ $mol_mem
		done( next?: readonly string[] ) {
			return this.$.$mol_state_local.value( 'bog_atelier_course_done', next ) ?? []
		}

		first_open() {
			const done = this.done()
			const index = this.lessons().findIndex( lesson => !done.includes( lesson.id ) )
			return index < 0 ? this.lessons().length - 1 : index
		}

		@ $mol_mem
		current_id( next?: string ) {
			const id = this.$.$mol_state_arg.value( 'lesson', next )
			if( id && this.lessons().some( lesson => lesson.id === id ) ) return id
			return this.lessons()[ this.first_open() ].id
		}

		current_index() {
			return this.lessons().findIndex( lesson => lesson.id === this.current_id() )
		}

		lesson() {
			return this.lessons()[ this.current_index() ]
		}

		@ $mol_mem_key
		lines_of( id: string, next?: readonly $bog_atelier_ink_line[] ) {
			return next ?? []
		}

		lines( next?: readonly $bog_atelier_ink_line[] ) {
			return this.lines_of( this.current_id(), next )
		}

		@ $mol_mem
		base() {
			return $bog_atelier_course_base( this.lesson() )
		}

		@ $mol_mem
		guide() {
			return this.closed() ? [] : $bog_atelier_course_guide( this.lesson() )
		}

		reading(): $bog_atelier_glyph_reading {
			return this.Stage().reading()
		}

		closed() {
			return this.reading().closed
		}

		@ $mol_mem
		cast_key() {
			return this.current_index() * 1000 + this.lines().length
		}

		auto() {
			if( !this.closed() ) return
			const id = this.current_id()
			const done = this.done()
			if( done.includes( id ) ) return
			this.current_id( id )
			this.done( [ ... done, id ] )
		}

		number() {
			return `${ this.current_index() + 1 } / ${ this.lessons().length }`
		}

		lesson_title() {
			return this.lesson().title
		}

		lesson_source() {
			return this.lesson().source
		}

		lesson_text() {
			return this.lesson().text
		}

		@ $mol_mem
		result() {
			if( !this.closed() ) return []
			return $bog_atelier_spell_story( this.Stage().spell() as $bog_atelier_spell )
		}

		@ $mol_mem
		result_rows() {
			if( !this.closed() ) return [ this.Hint() ]
			return this.result().map( ( _, i )=> this.Result_line( i ) )
		}

		result_line( index: number ) {
			return this.result()[ index ]
		}

		@ $mol_mem
		actions() {
			const last = this.current_index() === this.lessons().length - 1
			if( !this.closed() ) return this.lines().length ? [ this.Again() ] : []
			return [ last ? this.Finish() : this.Next(), this.Again() ]
		}

		again() {
			this.lines( [] )
		}

		next() {
			const next = this.lessons()[ this.current_index() + 1 ]
			if( next ) this.current_id( next.id )
		}

		@ $mol_mem
		menu_rows() {
			return this.lessons().map( lesson => this.Item( lesson.id ) )
		}

		item_open( id: string ) {
			const index = this.lessons().findIndex( lesson => lesson.id === id )
			return index <= this.first_open() || this.done().includes( id )
		}

		item_done( id: string ) {
			return this.done().includes( id )
		}

		item_current( id: string ) {
			return this.current_id() === id
		}

		item_mark( id: string ) {
			if( this.item_done( id ) ) return '✓'
			return String( this.lessons().findIndex( lesson => lesson.id === id ) + 1 )
		}

		item_title( id: string ) {
			return this.lessons().find( lesson => lesson.id === id )?.title ?? id
		}

		pick( id: string ) {
			this.current_id( id )
		}

	}

}
