namespace $.$$ {

	export class $bog_atelier_grimoire extends $.$bog_atelier_grimoire {

		spell_rows() {
			return $bog_atelier_course_lessons.map( lesson => this.Spell( lesson.id ) )
		}

		spell( id: string ) {
			return $bog_atelier_course_lessons.find( lesson => lesson.id === id )!
		}

		spell_id( id: string ) {
			return id
		}

		@ $mol_mem_key
		spell_lines( id: string ) {
			return [ ... $bog_atelier_course_base( this.spell( id ) ), ... $bog_atelier_course_guide( this.spell( id ) ) ]
		}

		spell_title( id: string ) {
			return this.spell( id ).title
		}

		spell_source( id: string ) {
			return this.spell( id ).source
		}

		spell_note( id: string ) {
			return this.spell( id ).text
		}

		sigil_rows() {
			return $bog_atelier_lexicon_of( 'sigil' ).map( entry => this.Entry( entry.id ) )
		}

		sign_rows() {
			return $bog_atelier_lexicon_of( 'sign' ).map( entry => this.Entry( entry.id ) )
		}

		entry( id: string ) {
			return $bog_atelier_lexicon_entry( id )!
		}

		entry_id( id: string ) {
			return id
		}

		entry_title( id: string ) {
			return this.entry( id ).title
		}

		entry_note( id: string ) {
			return this.entry( id ).note
		}

		entry_canon( id: string ) {
			return this.entry( id ).canon === 'manga' ? this.canon_manga() : this.canon_fan()
		}

	}

}
