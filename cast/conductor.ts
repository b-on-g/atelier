namespace $ {

	export class $bog_atelier_cast_conductor extends $bog_gamengine_node {

		key() {
			return 0
		}

		flow(): $bog_gamengine_particle | null {
			return null
		}

		core(): $bog_gamengine_particle | null {
			return null
		}

		glow(): $bog_gamengine_node | null {
			return null
		}

		lamp(): $bog_gamengine_light | null {
			return null
		}

		form(): string {
			return 'still'
		}

		life() {
			return Infinity
		}

		flow_rate() {
			return 0
		}

		core_rate() {
			return 0
		}

		glow_color(): ArrayLike< number > {
			return [ 1, 1, 1 ]
		}

		lamp_color(): ArrayLike< number > {
			return [ 1, 1, 1 ]
		}

		lamp_power() {
			return 0
		}

		neat() {
			return 1
		}

		@ $mol_mem
		spent( next = false ) {
			return next
		}

		last = NaN
		time = 0
		shake = 1
		owed = 0
		volley = 0
		at = new Float32Array( 3 )
		shade = new Float32Array( 3 )

		charge() {
			return Math.min( 1, this.time / 0.9 )
		}

		fade() {
			const over = this.time - this.life()
			return over > 0 ? Math.max( 0, 1 - over / 2 ) : 1
		}

		restart() {
			this.time = 0
			this.owed = 0
			this.volley = 0
			const flow = this.flow()
			const core = this.core()
			if( flow ) flow.pool().count = 0
			if( core ) core.pool().count = 0
			$mol_wire_async( this ).spent( false )
		}

		inflow( flow: $bog_gamengine_particle, count: number, twist: number, lift: number ) {
			const pool = flow.pool()
			const at = this.at
			for( let k = 0; k < count; ++ k ) {
				const angle = Math.random() * Math.PI * 2
				const reach = 0.9 + Math.random() * 0.15
				at[ 0 ] = Math.cos( angle ) * reach
				at[ 1 ] = 0.02 + Math.random() * 0.05
				at[ 2 ] = Math.sin( angle ) * reach
				const before = pool.count
				flow.spawn( 1, at )
				if( pool.count === before ) return
				const i = pool.count - 1
				const speed = 0.6 + Math.random() * 0.5
				pool.vel[ i * 3 ] = ( - Math.cos( angle ) - Math.sin( angle ) * twist ) * speed
				pool.vel[ i * 3 + 1 ] = lift * ( 0.3 + Math.random() * 0.5 )
				pool.vel[ i * 3 + 2 ] = ( - Math.sin( angle ) + Math.cos( angle ) * twist ) * speed
			}
		}

		floor( flow: $bog_gamengine_particle ) {
			const pool = flow.pool()
			const pos = pool.pos
			for( let i = 0; i < pool.count; ++ i ) {
				if( pos[ i * 3 + 1 ] >= 0 ) continue
				if( Math.abs( pos[ i * 3 ] ) > 1.25 || Math.abs( pos[ i * 3 + 2 ] ) > 1.25 ) continue
				pool.kill( i )
				-- i
			}
		}

		step( dt: number ) {
			const key = this.key()
			if( key !== this.last ) {
				this.last = key
				this.restart()
			}
			this.time += dt
			const charge = this.charge()
			const neat = this.neat()
			if( Math.random() < dt * 6 ) this.shake = 0.55 + 0.45 * neat + ( 1 - neat ) * Math.random() * 0.9
			const pulse = 0.85 + 0.15 * Math.sin( this.time * 3 )
			const fade = this.fade()
			if( fade === 0 && !this.spent() ) $mol_wire_async( this ).spent( true )
			const live = charge >= 1 ? this.shake * fade : 0
			const form = this.form()
			const flow = this.flow()
			if( flow ) {
				const rate = this.flow_rate() * live
				if( form === 'vortex' || form === 'mend' ) {
					flow.rate( 0 )
					this.owed += rate * dt
					const count = Math.floor( this.owed )
					this.owed -= count
					if( count ) this.inflow( flow, count, form === 'vortex' ? 0.9 : 0, form === 'vortex' ? 1 : 0.15 )
				} else if( form === 'bolt' ) {
					flow.rate( 0 )
					this.volley -= dt
					if( live > 0 && this.volley <= 0 ) {
						this.volley = 0.22
						flow.burst( Math.round( 12 * live ) )
					}
				} else {
					flow.rate( rate )
				}
			}
			if( flow ) this.floor( flow )
			const core = this.core()
			if( core ) core.rate( this.core_rate() * live )
			const glow = this.glow()
			if( glow ) {
				const color = this.glow_color()
				const flash = Math.max( 0, 1 - Math.abs( this.time - 0.9 ) / 0.5 )
				const bright = ( 0.9 * flash + 0.05 * charge * pulse ) * fade
				const tint = new Float32Array( 4 )
				tint[ 0 ] = color[ 0 ] * bright
				tint[ 1 ] = color[ 1 ] * bright
				tint[ 2 ] = color[ 2 ] * bright
				tint[ 3 ] = 0
				glow.tint( tint )
			}
			const lamp = this.lamp()
			if( lamp ) {
				lamp.power( this.lamp_power() * charge * pulse * this.shake * fade )
				const color = this.lamp_color()
				const shade = this.shade
				if( shade[ 0 ] !== color[ 0 ] || shade[ 1 ] !== color[ 1 ] || shade[ 2 ] !== color[ 2 ] ) {
					shade.set( color )
					lamp.color( new Float32Array( color ) )
				}
			}
		}

	}

}
