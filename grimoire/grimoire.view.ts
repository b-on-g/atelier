namespace $.$$ {

	export class $bog_atelier_grimoire extends $.$bog_atelier_grimoire {

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
