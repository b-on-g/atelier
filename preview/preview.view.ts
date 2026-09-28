namespace $.$$ {

	export class $bog_atelier_preview extends $.$bog_atelier_preview {

		@ $mol_mem
		geometry() {
			return ( this.lines() as readonly $bog_atelier_ink_line[] ).map( line => $bog_atelier_ink_path( line ) ).join( '' )
		}

	}

}
