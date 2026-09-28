namespace $.$$ {

	export class $bog_atelier_desk extends $.$bog_atelier_desk {

		@ $mol_mem
		ink() {
			const lines = this.lines()
			const keys = lines.map( ( _, i )=> i )
			return [
				... keys.map( i => this.Line( i ) ),
				... this.line_now().length ? [ this.Line( -1 ) ] : [],
			]
		}

		line_path( index: number ) {
			const line = index < 0 ? this.line_now() : this.lines()[ index ] ?? []
			return $bog_atelier_ink_path( line )
		}

		point_of( event: PointerEvent ) {
			const svg = this.dom_node() as SVGSVGElement
			const matrix = svg.getScreenCTM?.()
			if( !matrix ) return null
			const point = new DOMPoint( event.clientX, event.clientY ).matrixTransform( matrix.inverse() )
			return [ point.x, point.y ] as const
		}

		pen_id = -1

		draw_start( event?: PointerEvent ) {
			if( !event || !this.enabled() ) return null
			if( event.button && event.button !== 0 ) return null
			const point = this.point_of( event )
			if( !point ) return null
			event.preventDefault()
			this.pen_id = event.pointerId
			;( this.dom_node() as Element ).setPointerCapture?.( event.pointerId )
			this.line_now( [ point[ 0 ], point[ 1 ] ] )
			return null
		}

		draw_move( event?: PointerEvent ) {
			if( !event || event.pointerId !== this.pen_id ) return null
			const events = event.getCoalescedEvents?.() ?? []
			const line = [ ... this.line_now() ]
			for( const each of events.length ? events : [ event ] ) {
				const point = this.point_of( each )
				if( !point ) continue
				const x = line[ line.length - 2 ]
				const y = line[ line.length - 1 ]
				if( Math.hypot( point[ 0 ] - x, point[ 1 ] - y ) < 0.004 ) continue
				line.push( point[ 0 ], point[ 1 ] )
			}
			if( line.length !== this.line_now().length ) this.line_now( line )
			return null
		}

		draw_end( event?: PointerEvent ) {
			if( !event || event.pointerId !== this.pen_id ) return null
			this.pen_id = -1
			const line = this.line_now()
			this.line_now( [] )
			if( line.length >= 2 ) this.stroke( line )
			return null
		}

		stroke( line: readonly number[] ) {
			this.lines( [ ... this.lines(), line ] )
		}

	}

}
