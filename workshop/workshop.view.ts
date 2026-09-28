namespace $.$$ {

	export class $bog_atelier_workshop extends $.$bog_atelier_workshop {

		@ $mol_mem
		lines( next?: readonly $bog_atelier_ink_line[] ) {
			return this.$.$mol_state_local.value( 'bog_atelier_sheet', next ) ?? []
		}

		reading(): $bog_atelier_glyph_reading {
			return this.Stage().reading()
		}

		closed() {
			return this.reading().closed
		}

		@ $mol_mem
		cast_key() {
			this.closed()
			return this.lines().length
		}

		can_undo() {
			return this.lines().length > 0
		}

		undo() {
			this.lines( this.lines().slice( 0, -1 ) )
		}

		clear() {
			this.lines( [] )
		}

		break() {
			const lines = this.lines()
			const ring = this.reading().ring_lines
			const last = [ ... ring ].sort( ( a, b )=> b - a )[ 0 ]
			if( last === undefined ) return this.undo()
			this.lines( lines.filter( ( _, i )=> i !== last ) )
		}

		@ $mol_mem
		tools() {
			return this.closed()
				? [ this.Break(), this.Undo(), this.Clear() ]
				: [ this.Ring(), this.Undo(), this.Clear() ]
		}

		@ $mol_mem
		status() {
			const reading = this.reading()
			const ring = reading.ring
			if( !ring ) return this.status_empty()
			if( reading.closed ) return this.status_cast()
			const degrees = Math.round( ring.gap * 180 / Math.PI )
			return this.status_open().replace( '{gap}', String( degrees ) )
		}

		@ $mol_mem
		story() {
			if( !this.closed() ) return []
			return $bog_atelier_spell_story( this.Stage().spell() as $bog_atelier_spell )
		}

		story_rows() {
			return this.story().map( ( _, i )=> this.Story_line( i ) )
		}

		story_line( index: number ) {
			return this.story()[ index ]
		}

		frame() {
			const ring = this.reading().ring
			return ring ? { x: ring.x, y: ring.y, r: ring.r } : { x: 0, y: 0, r: 1 }
		}

		place( lines: readonly $bog_atelier_ink_line[] ) {
			const frame = this.frame()
			return lines.map( line => $bog_atelier_ink_move( line, frame.x, frame.y, frame.r ) )
		}

		stamp_ring() {
			if( this.reading().ring ) return
			this.lines( [ ... this.lines(), $bog_atelier_glyph_circle( 0.35, -Math.PI / 2 ) ] )
		}

		@ $mol_mem
		sigil_stamps() {
			return $bog_atelier_lexicon_of( 'sigil' ).map( entry => this.Sigil_stamp( entry.id ) )
		}

		@ $mol_mem
		sign_stamps() {
			return $bog_atelier_lexicon_of( 'sign' ).map( entry => this.Sign_stamp( entry.id ) )
		}

		stamp_id( id: string ) {
			return id
		}

		stamp_title( id: string ) {
			const entry = $bog_atelier_lexicon_entry( id )
			return entry ? `${ entry.title }. ${ entry.note }` : id
		}

		stamp_sigil( id: string ) {
			const reading = this.reading()
			const old = new Set( reading.sigil?.lines ?? [] )
			const kept = this.lines().filter( ( _, i )=> !old.has( i ) )
			this.lines( [ ... kept, ... this.place( $bog_atelier_glyph_sigil( id ) ) ] )
		}

		free_angle() {
			const taken = this.reading().signs.map( sign => sign.angle )
			let best = Math.PI / 2
			let best_gap = -1
			for( let k = 0; k < 24; ++ k ) {
				const angle = Math.PI / 2 + k * Math.PI * 2 / 24
				let gap = Math.PI
				for( const other of taken ) {
					const d = Math.abs( Math.atan2( Math.sin( angle - other ), Math.cos( angle - other ) ) )
					gap = Math.min( gap, d )
				}
				if( gap > best_gap + 1e-6 ) {
					best = angle
					best_gap = gap
				}
			}
			return best
		}

		stamp_sign( id: string ) {
			this.lines( [ ... this.lines(), ... this.place( $bog_atelier_glyph_sign( id, this.free_angle() ) ) ] )
		}

	}

}
