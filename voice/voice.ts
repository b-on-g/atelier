namespace $ {

	const notes: Record< string, readonly number[] > = {
		fire: [ 220, 329.6, 440, 659.3 ],
		water: [ 261.6, 392, 523.3, 784 ],
		air: [ 293.7, 440, 587.3, 880 ],
		earth: [ 146.8, 220, 293.7, 440 ],
		light: [ 523.3, 784, 1046.5, 1568 ],
		misfire: [ 233.1, 246.9, 311.1 ],
	}

	const beds: Record< string, { type: BiquadFilterType, freq: number, q: number, wobble: number, level: number } > = {
		fire: { type: 'bandpass', freq: 900, q: 0.8, wobble: 9, level: 0.5 },
		water: { type: 'lowpass', freq: 700, q: 0.5, wobble: 0.6, level: 0.6 },
		air: { type: 'bandpass', freq: 1400, q: 1.8, wobble: 0.25, level: 0.45 },
		earth: { type: 'lowpass', freq: 180, q: 1, wobble: 2, level: 0.9 },
		light: { type: 'highpass', freq: 3000, q: 0.7, wobble: 0.4, level: 0.18 },
		misfire: { type: 'bandpass', freq: 500, q: 1.2, wobble: 14, level: 0.4 },
	}

	export class $bog_atelier_voice_bed extends $mol_object2 {

		stop = ()=> {}

		destructor() {
			this.stop()
		}

	}

	export class $bog_atelier_voice extends $mol_object2 {

		@ $mol_mem
		static enabled( next?: boolean ) {
			return this.$.$mol_state_local.value( 'bog_atelier_sound', next ) ?? true
		}

		static volume() {
			return 0.16
		}

		static context: AudioContext | null = null

		static audio() {
			if( this.context ) return this.context
			const Context = ( globalThis as { AudioContext?: typeof AudioContext } ).AudioContext
			if( !Context ) return null
			this.context = new Context
			return this.context
		}

		static noise( ctx: AudioContext ) {
			const buffer = ctx.createBuffer( 1, ctx.sampleRate * 2, ctx.sampleRate )
			const data = buffer.getChannelData( 0 )
			for( let i = 0; i < data.length; ++ i ) data[ i ] = Math.random() * 2 - 1
			return buffer
		}

		static chime( element: string | null, misfire: boolean ) {
			if( !this.enabled() ) return
			const ctx = this.audio()
			if( !ctx ) return
			if( ctx.state === 'suspended' ) ctx.resume()
			const now = ctx.currentTime
			const tones = notes[ misfire || !element ? 'misfire' : element ]
			const master = ctx.createGain()
			master.gain.value = this.volume()
			master.connect( ctx.destination )
			tones.forEach( ( freq, k )=> {
				const osc = ctx.createOscillator()
				const gain = ctx.createGain()
				osc.type = k ? 'sine' : 'triangle'
				osc.frequency.value = freq
				const start = now + k * 0.07
				gain.gain.setValueAtTime( 0, start )
				gain.gain.linearRampToValueAtTime( 0.5 / ( k + 1 ), start + 0.02 )
				gain.gain.exponentialRampToValueAtTime( 0.0001, start + 1.8 )
				osc.connect( gain ).connect( master )
				osc.start( start )
				osc.stop( start + 1.9 )
			} )
		}

		static bed( element: string | null, misfire: boolean, power: number ) {
			const bed = new $bog_atelier_voice_bed
			if( !this.enabled() ) return bed
			const ctx = this.audio()
			if( !ctx ) return bed
			const tune = beds[ misfire || !element ? 'misfire' : element ]
			const now = ctx.currentTime
			const source = ctx.createBufferSource()
			source.buffer = this.noise( ctx )
			source.loop = true
			const filter = ctx.createBiquadFilter()
			filter.type = tune.type
			filter.frequency.value = tune.freq
			filter.Q.value = tune.q
			const lfo = ctx.createOscillator()
			lfo.frequency.value = tune.wobble
			const depth = ctx.createGain()
			depth.gain.value = tune.freq * 0.35
			lfo.connect( depth ).connect( filter.frequency )
			const gain = ctx.createGain()
			const level = this.volume() * tune.level * ( 0.5 + power * 0.5 )
			gain.gain.setValueAtTime( 0, now )
			gain.gain.linearRampToValueAtTime( level, now + 1.2 )
			source.connect( filter ).connect( gain ).connect( ctx.destination )
			source.start( now )
			lfo.start( now )
			bed.stop = ()=> {
				const at = ctx.currentTime
				gain.gain.cancelScheduledValues( at )
				gain.gain.setValueAtTime( gain.gain.value, at )
				gain.gain.linearRampToValueAtTime( 0, at + 0.6 )
				source.stop( at + 0.7 )
				lfo.stop( at + 0.7 )
			}
			return bed
		}

	}

}
