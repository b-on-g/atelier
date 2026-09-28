namespace $.$$ {

	export class $bog_atelier_icon extends $.$bog_atelier_icon {

		geometry() {
			const entry = $bog_atelier_lexicon_entry( this.entry_id() )
			return entry ? $bog_atelier_lexicon_path( entry ) : ''
		}

	}

}
