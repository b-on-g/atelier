namespace $ {

	export const $bog_atelier_cast_art_span = 1.25

	function canvas( size: number ) {
		const node = $mol_dom_context.document.createElement( 'canvas' )
		node.width = size
		node.height = size
		return node
	}

	function ink( ctx: CanvasRenderingContext2D, lines: readonly $bog_atelier_ink_line[], size: number ) {
		const scale = size / 2 / $bog_atelier_cast_art_span
		ctx.save()
		ctx.translate( size / 2, size / 2 )
		ctx.scale( scale, scale )
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		for( const line of lines ) {
			if( line.length < 2 ) continue
			ctx.beginPath()
			ctx.moveTo( line[ 0 ], line[ 1 ] )
			if( line.length === 2 ) ctx.lineTo( line[ 0 ] + 0.001, line[ 1 ] )
			for( let i = 2; i < line.length; i += 2 ) ctx.lineTo( line[ i ], line[ i + 1 ] )
			ctx.stroke()
		}
		ctx.restore()
	}

	function rand( seed: number ) {
		let t = seed | 0
		return ()=> {
			t = ( t + 0x6D2B79F5 ) | 0
			let r = Math.imul( t ^ ( t >>> 15 ), t | 1 )
			r ^= r + Math.imul( r ^ ( r >>> 7 ), r | 61 )
			return ( ( r ^ ( r >>> 14 ) ) >>> 0 ) / 4294967296
		}
	}

	export function $bog_atelier_cast_art_paper( lines: readonly $bog_atelier_ink_line[], size = 1024 ) {
		const node = canvas( size )
		const ctx = node.getContext( '2d' )!
		const base = ctx.createRadialGradient( size / 2, size / 2, size * 0.1, size / 2, size / 2, size * 0.75 )
		base.addColorStop( 0, '#e7cd96' )
		base.addColorStop( 1, '#b18c4f' )
		ctx.fillStyle = base
		ctx.fillRect( 0, 0, size, size )
		const next = rand( 7 )
		for( let k = 0; k < 900; ++ k ) {
			ctx.fillStyle = `rgba(50, 26, 8, ${ 0.03 + next() * 0.06 })`
			ctx.fillRect( next() * size, next() * size, 1 + next() * size / 200, 1 + next() * size / 200 )
		}
		ctx.strokeStyle = '#03051a'
		ctx.lineWidth = 0.017
		ink( ctx, lines, size )
		return node
	}

	export function $bog_atelier_cast_art_glow( lines: readonly $bog_atelier_ink_line[], size = 1024 ) {
		const node = canvas( size )
		const ctx = node.getContext( '2d' )!
		ctx.shadowColor = 'rgba(255, 255, 255, 1)'
		ctx.shadowBlur = size / 40
		ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
		ctx.lineWidth = 0.04
		ink( ctx, lines, size )
		ink( ctx, lines, size )
		ctx.shadowBlur = 0
		ctx.strokeStyle = 'rgba(255, 255, 255, 1)'
		ctx.lineWidth = 0.014
		ink( ctx, lines, size )
		return node
	}

	export function $bog_atelier_cast_art_spark( size = 64 ) {
		const node = canvas( size )
		const ctx = node.getContext( '2d' )!
		const glow = ctx.createRadialGradient( size / 2, size / 2, 0, size / 2, size / 2, size / 2 )
		glow.addColorStop( 0, 'rgba(255, 255, 255, 1)' )
		glow.addColorStop( 0.25, 'rgba(255, 255, 255, 0.55)' )
		glow.addColorStop( 1, 'rgba(255, 255, 255, 0)' )
		ctx.fillStyle = glow
		ctx.fillRect( 0, 0, size, size )
		return node
	}

	export function $bog_atelier_cast_art_mote( size = 64 ) {
		const node = canvas( size )
		const ctx = node.getContext( '2d' )!
		const next = rand( 3 )
		ctx.fillStyle = 'rgba(255, 255, 255, 1)'
		ctx.beginPath()
		for( let k = 0; k < 7; ++ k ) {
			const a = k / 7 * Math.PI * 2
			const r = size * ( 0.28 + next() * 0.16 )
			const x = size / 2 + Math.cos( a ) * r
			const y = size / 2 + Math.sin( a ) * r
			if( k ) ctx.lineTo( x, y )
			else ctx.moveTo( x, y )
		}
		ctx.closePath()
		ctx.fill()
		return node
	}

}
