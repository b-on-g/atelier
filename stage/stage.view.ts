namespace $.$$ {

	export class $bog_atelier_stage extends $.$bog_atelier_stage {

		@ $mol_mem
		all_lines() {
			return [ ... this.base(), ... this.lines() ] as readonly $bog_atelier_ink_line[]
		}

		@ $mol_mem
		reading(): $bog_atelier_glyph_reading {
			return $bog_atelier_glyph_read( this.all_lines() )
		}

		@ $mol_mem
		spell() {
			return $bog_atelier_spell_of( this.reading() )
		}

		closed() {
			return this.reading().closed
		}

		@ $mol_mem
		layers() {
			return this.closed() && this.casting() ? [ this.Cast() ] : [ this.Desk() ]
		}

		drawing() {
			return !this.closed() || !this.casting()
		}

		@ $mol_mem
		cast_lines() {
			const ring = this.reading().ring
			if( !ring ) return []
			return this.all_lines().map( line => $bog_atelier_glyph_local( line, ring ) )
		}

		base_path() {
			return this.base().map( line => $bog_atelier_ink_path( line ) ).join( '' )
		}

		guide_path() {
			return this.guide().map( line => $bog_atelier_ink_path( line ) ).join( '' )
		}

		@ $mol_mem
		gap_path() {
			const ring = this.reading().ring
			if( !ring || this.closed() || ring.gap > Math.PI * 0.6 ) return ''
			const half = ring.gap / 2 + 0.05
			return $bog_atelier_ink_path( $bog_atelier_ink_arc( ring.x, ring.y, ring.r, ring.gap_at - half, ring.gap_at + half, 16 ) )
		}

		@ $mol_mem
		mark_list() {
			const reading = this.reading()
			return [
				... reading.sigil ? [ reading.sigil ] : [],
				... reading.signs,
				... reading.stray.filter( mark => Math.hypot( mark.x, mark.y ) < 1.2 ),
			]
		}

		@ $mol_mem
		marks() {
			return [
				... this.gap_path() ? [ this.Gap() ] : [],
				... this.mark_list().map( ( _, i )=> this.Mark( i ) ),
			]
		}

		mark( index: number ) {
			return this.mark_list()[ index ]
		}

		mark_spot( index: number ) {
			const ring = this.reading().ring!
			const mark = this.mark( index )
			const lift = mark.kind === 'sigil' ? mark.size / 2 + 0.08 : 0
			return [ ring.x + mark.x * ring.r, ring.y + ( mark.y - lift ) * ring.r ] as const
		}

		mark_x( index: number ) {
			return String( this.mark_spot( index )[ 0 ] )
		}

		mark_y( index: number ) {
			return String( this.mark_spot( index )[ 1 ] )
		}

		mark_known( index: number ) {
			return Boolean( this.mark( index )?.id )
		}

		mark_text( index: number ) {
			const mark = this.mark( index )
			if( !mark ) return ''
			if( mark.id ) return $bog_atelier_lexicon_entry( mark.id )?.title ?? mark.id
			const guess = mark.rank[ 0 ]
			const entry = guess ? $bog_atelier_lexicon_entry( guess.id ) : null
			return entry ? `${ entry.title }?` : '?'
		}

	}

}
