namespace $.$$ {

	type look = {
		frame: string
		from: readonly number[]
		to: readonly number[]
		glow: readonly number[]
		lamp: readonly number[]
		lamp_power: number
		speed: readonly number[]
		life: readonly number[]
		size: readonly number[]
		gravity: number
		spread: number
		rate: number
		core: number
	}

	const linear = ( ... screen: readonly number[] )=> screen.map( ( v, i )=> i % 4 === 3 ? v : Math.pow( v, 2.2 ) )

	const looks: Record< string, look > = {
		fire: {
			frame: 'spark',
			from: linear( 1, 0.78, 0.35, 0 ), to: linear( 0.85, 0.12, 0.02, 0 ),
			glow: [ 2.4, 0.9, 0.25 ], lamp: [ 1, 0.55, 0.2 ], lamp_power: 1.6,
			speed: [ 0.7, 1.6 ], life: [ 0.35, 0.8 ], size: [ 0.13, 0.02 ],
			gravity: 2.6, spread: 0.22, rate: 700, core: 90,
		},
		water: {
			frame: 'spark',
			from: linear( 0.55, 0.85, 1, 0.5 ), to: linear( 0.15, 0.4, 1, 0 ),
			glow: [ 0.4, 1, 2.4 ], lamp: [ 0.3, 0.6, 1 ], lamp_power: 1.2,
			speed: [ 2.4, 3.2 ], life: [ 0.8, 1.3 ], size: [ 0.06, 0.035 ],
			gravity: -4.5, spread: 0.14, rate: 650, core: 30,
		},
		air: {
			frame: 'spark',
			from: linear( 0.8, 0.95, 1, 0 ), to: linear( 0.35, 0.55, 0.7, 0 ),
			glow: [ 1.2, 1.8, 2 ], lamp: [ 0.75, 0.9, 1 ], lamp_power: 0.5,
			speed: [ 2.5, 4.5 ], life: [ 0.35, 0.8 ], size: [ 0.03, 0.12 ],
			gravity: 0, spread: 0.45, rate: 600, core: 0,
		},
		earth: {
			frame: 'mote',
			from: linear( 0.62, 0.48, 0.32, 1 ), to: linear( 0.42, 0.32, 0.22, 1 ),
			glow: [ 1.6, 1.1, 0.5 ], lamp: [ 0.9, 0.7, 0.45 ], lamp_power: 0.7,
			speed: [ 2.2, 3.6 ], life: [ 0.7, 1.2 ], size: [ 0.07, 0.05 ],
			gravity: -7, spread: 0.35, rate: 240, core: 0,
		},
		light: {
			frame: 'spark',
			from: linear( 1, 0.98, 0.85, 0 ), to: linear( 1, 0.85, 0.45, 0 ),
			glow: [ 2.2, 2, 1.5 ], lamp: [ 1, 0.95, 0.8 ], lamp_power: 1.1,
			speed: [ 0.15, 0.6 ], life: [ 0.9, 1.8 ], size: [ 0.3, 0.04 ],
			gravity: 0.2, spread: 3.14, rate: 120, core: 80,
		},
		misfire: {
			frame: 'spark',
			from: linear( 0.55, 0.52, 0.5, 0.7 ), to: linear( 0.25, 0.25, 0.25, 0 ),
			glow: [ 1, 0.6, 0.35 ], lamp: [ 1, 0.6, 0.3 ], lamp_power: 0.4,
			speed: [ 0.3, 0.9 ], life: [ 0.9, 1.8 ], size: [ 0.12, 0.45 ],
			gravity: 0.6, spread: 0.9, rate: 50, core: 0,
		},
	}

	export class $bog_atelier_cast extends $.$bog_atelier_cast {

		spell(): $bog_atelier_spell {
			return $bog_atelier_spell_empty()
		}

		@ $mol_mem
		look() {
			const spell = this.spell()
			if( spell.misfire || !spell.element ) return looks.misfire
			return looks[ spell.element ]
		}

		@ $mol_mem
		sound() {
			this.cast_key()
			const spell = this.spell()
			const voice = this.$.$bog_atelier_voice
			voice.chime( spell.element, spell.misfire )
			return voice.bed( spell.element, spell.misfire, spell.power )
		}

		@ $mol_mem
		hush() {
			if( this.Conductor().spent() ) this.sound().stop()
			return null
		}

		auto() {
			this.sound()
			this.hush()
		}

		@ $mol_mem
		nodes() {
			return [ this.Paper(), this.Glow(), this.Lamp(), this.Sun(), this.Flow(), this.Core(), this.Conductor() ]
		}

		@ $mol_mem
		art() {
			const lines = this.lines()
			return [
				{ name: 'paper', image: $bog_atelier_cast_art_paper( lines ) },
				{ name: 'glow', image: $bog_atelier_cast_art_glow( lines ) },
			]
		}

		@ $mol_mem
		dust() {
			return [
				{ name: 'spark', image: $bog_atelier_cast_art_spark() },
				{ name: 'mote', image: $bog_atelier_cast_art_mote() },
			]
		}

		draw_dpr() {
			return Math.min( 2, this.$.$mol_dom_context.devicePixelRatio || 1 )
		}

		@ $mol_mem
		clear() {
			return new Float32Array([ 0.035, 0.03, 0.045, 1 ])
		}

		@ $mol_mem
		eye_pos() {
			return new Float32Array([ 0, 2.55, 4.1 ])
		}

		@ $mol_mem
		eye_rot() {
			return new Float32Array([ -0.5, 0, 0 ])
		}

		@ $mol_mem
		paper_size() {
			const side = $bog_atelier_cast_art_span * 2
			return new Float32Array([ side, 1, side ])
		}

		@ $mol_mem
		glow_size() {
			const side = $bog_atelier_cast_art_span * 2
			return new Float32Array([ side, side ])
		}

		@ $mol_mem
		glow_pos() {
			return new Float32Array([ 0, 0.004, 0 ])
		}

		@ $mol_mem
		flat_rot() {
			return new Float32Array([ -Math.PI / 2, 0, 0 ])
		}

		@ $mol_mem
		sun_rot() {
			return new Float32Array([ -1.1, 0.5, 0 ])
		}

		@ $mol_mem
		tune() {
			const spell = this.spell()
			const look = this.look()
			const form = spell.misfire ? 'still' : spell.form
			const k = 0.55 + spell.power * 0.6
			const lean = 1.2
			let dir_x = spell.tilt_x * lean
			let dir_y = 1
			let dir_z = spell.tilt_y * lean
			let spread = look.spread + spell.spread * 0.6
			let speed = k * ( 1 + spell.focus * 0.5 )
			let height = 0.05
			let gravity = look.gravity
			let life = 1
			let rate = look.rate * ( 0.35 + spell.power * 0.75 )
			let core = look.core
			switch( form ) {
				case 'still':
					speed *= 0.45
					spread = Math.max( spread, 0.5 )
					rate *= 0.5
					if( spell.lift < 0 ) {
						dir_y = 0.1
						speed *= 0.35
						spread = 1.5
						gravity *= 0.08
						life = 2.2
						rate *= 0.7
						core = 0
					}
					break
				case 'jet':
					spread = Math.min( spread, 0.3 )
					if( look.spread > 3 ) {
						speed *= 6
						life = 0.5
						rate *= 3
					}
					if( spell.lift < 0 ) {
						dir_y = 0.15
						speed *= 0.3
						spread = 1.5
						rate *= 0.4
					}
					break
				case 'fan':
					spread = look.spread > 3 ? look.spread : 1.25
					speed *= 0.75
					break
				case 'ball':
					height = 0.35 + spell.hover * 0.55
					spread = 3.14
					speed *= 0.4
					gravity *= 0.4
					life = 0.8
					rate *= 0.8
					core += 40 + spell.focus * 80
					break
				case 'bolt':
					dir_y = Math.hypot( dir_x, dir_z ) > 0.1 ? 0.35 : 1
					spread = 0.06
					speed *= 0.9
					gravity *= 0.15
					life = 1.8
					break
				case 'vortex':
					gravity = 0
					rate *= 0.8
					break
				case 'mend':
					gravity = 0
					life = 1.4
					rate *= 0.6
					break
				case 'dust':
					spread = 0.9
					speed *= 0.3
					gravity = -0.3
					life = 1.6
					break
			}
			spread = Math.max( 0.03, spread * ( 1 - spell.focus * 0.8 ) + ( 1 - spell.neat ) * 0.35 )
			if( spell.hover > 0 && form !== 'ball' ) {
				height += spell.hover * 0.4
				gravity *= 1 - spell.hover * 0.8
			}
			const len = Math.hypot( dir_x, dir_y, dir_z ) || 1
			return {
				form,
				dir: [ dir_x / len, dir_y / len, dir_z / len ],
				spread, speed, height, gravity, life, rate, core,
			}
		}

		@ $mol_mem
		lamp_pos() {
			return new Float32Array([ 0, 1.4 + this.tune().height, 0.3 ])
		}

		@ $mol_mem
		flow_pos() {
			return new Float32Array([ 0, this.tune().height, 0 ])
		}

		@ $mol_mem
		core_pos() {
			const tune = this.tune()
			return new Float32Array([ 0, tune.form === 'ball' ? tune.height : tune.height + 0.1, 0 ])
		}

		@ $mol_mem
		flow_dir() {
			return new Float32Array( this.tune().dir )
		}

		flow_frame() {
			return this.look().frame
		}

		@ $mol_mem
		flow_life() {
			const life = this.look().life
			const k = this.tune().life
			return new Float32Array([ life[ 0 ] * k, life[ 1 ] * k ])
		}

		@ $mol_mem
		flow_speed() {
			const speed = this.look().speed
			const k = this.tune().speed
			return new Float32Array([ speed[ 0 ] * k, speed[ 1 ] * k ])
		}

		flow_spread() {
			return this.tune().spread
		}

		@ $mol_mem
		flow_gravity() {
			return new Float32Array([ 0, this.tune().gravity, 0 ])
		}

		@ $mol_mem
		flow_size() {
			const spell = this.spell()
			const size = this.look().size
			const k = ( 0.75 + spell.power * 0.35 ) * ( this.tune().form === 'bolt' ? 2.2 : 1 )
			return this.tune().form === 'dust'
				? new Float32Array([ size[ 0 ] * k * 0.4, size[ 0 ] * k * 1.4 ])
				: new Float32Array([ size[ 0 ] * k, size[ 1 ] * k ])
		}

		@ $mol_mem
		flow_color() {
			const look = this.look()
			const to = this.tune().form === 'dust' ? [ ... look.to.slice( 0, 3 ), 0 ] : look.to
			return new Float32Array([ ... look.from, ... to ])
		}

		flow_rate() {
			return this.tune().rate
		}

		core_rate() {
			return this.tune().core
		}

		form() {
			return this.tune().form
		}

		life() {
			return this.spell().misfire ? 1.2 : this.spell().life
		}

		@ $mol_mem
		core_life() {
			return new Float32Array([ 0.25, 0.6 ])
		}

		@ $mol_mem
		core_speed() {
			const spell = this.spell()
			return new Float32Array([ 0.02, 0.15 + ( 1 - spell.focus ) * 0.2 ])
		}

		@ $mol_mem
		core_size() {
			const spell = this.spell()
			const ball = this.tune().form === 'ball'
			return new Float32Array([ ( ball ? 0.45 : 0.22 ) + spell.focus * 0.25, 0.05 ])
		}

		@ $mol_mem
		core_color() {
			const look = this.look()
			const dim = 0.3
			return new Float32Array([ ... look.from.slice( 0, 3 ).map( v => v * dim ), 0, ... look.to.slice( 0, 3 ).map( v => v * dim ), 0 ])
		}

		@ $mol_mem
		glow_color() {
			return new Float32Array( this.look().glow )
		}

		@ $mol_mem
		lamp_color() {
			return new Float32Array( this.look().lamp )
		}

		lamp_power() {
			return this.look().lamp_power * ( 0.5 + this.spell().power * 0.5 )
		}

		neat() {
			return this.spell().neat
		}

	}

}
