namespace $.$$ {

	export class $bog_atelier_app extends $.$bog_atelier_app {

		screen( next?: string ) {
			return this.$.$mol_state_arg.value( 'screen', next ) ?? 'course'
		}

		@ $mol_mem
		screen_body() {
			switch( this.screen() ) {
				case 'sheet': return [ this.Sheet() ]
				case 'book': return [ this.Book() ]
				default: return [ this.Course() ]
			}
		}

	}

}
