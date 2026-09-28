namespace $ {

	export type $bog_atelier_ink_line = readonly number[]

	export type $bog_atelier_ink_ring = {
		x: number
		y: number
		r: number
		wobble: number
		sweep: number
		gap: number
		gap_at: number
	}

	export function $bog_atelier_ink_length( line: $bog_atelier_ink_line ) {
		let sum = 0
		for( let i = 2; i < line.length; i += 2 ) {
			sum += Math.hypot( line[ i ] - line[ i - 2 ], line[ i + 1 ] - line[ i - 1 ] )
		}
		return sum
	}

	export function $bog_atelier_ink_resample( line: $bog_atelier_ink_line, count: number ) {
		const out = [] as number[]
		if( line.length < 2 ) return out
		const total = $bog_atelier_ink_length( line )
		if( total === 0 || line.length < 4 ) {
			for( let k = 0; k < count; ++ k ) out.push( line[ 0 ], line[ 1 ] )
			return out
		}
		const step = total / ( count - 1 )
		out.push( line[ 0 ], line[ 1 ] )
		let walked = 0
		let px = line[ 0 ]
		let py = line[ 1 ]
		let i = 2
		while( i < line.length && out.length < count * 2 ) {
			const qx = line[ i ]
			const qy = line[ i + 1 ]
			const d = Math.hypot( qx - px, qy - py )
			if( walked + d >= step && d > 0 ) {
				const t = ( step - walked ) / d
				px = px + t * ( qx - px )
				py = py + t * ( qy - py )
				out.push( px, py )
				walked = 0
			} else {
				walked += d
				px = qx
				py = qy
				i += 2
			}
		}
		while( out.length < count * 2 ) out.push( line[ line.length - 2 ], line[ line.length - 1 ] )
		return out
	}

	export function $bog_atelier_ink_center( line: $bog_atelier_ink_line ) {
		let x = 0
		let y = 0
		const n = line.length / 2
		for( let i = 0; i < line.length; i += 2 ) {
			x += line[ i ]
			y += line[ i + 1 ]
		}
		return [ x / n, y / n ] as const
	}

	export function $bog_atelier_ink_box( line: $bog_atelier_ink_line ) {
		let left = Infinity
		let top = Infinity
		let right = -Infinity
		let bottom = -Infinity
		for( let i = 0; i < line.length; i += 2 ) {
			left = Math.min( left, line[ i ] )
			right = Math.max( right, line[ i ] )
			top = Math.min( top, line[ i + 1 ] )
			bottom = Math.max( bottom, line[ i + 1 ] )
		}
		return { left, top, right, bottom, width: right - left, height: bottom - top }
	}

	export function $bog_atelier_ink_fit( line: $bog_atelier_ink_line ) {
		const [ mx, my ] = $bog_atelier_ink_center( line )
		let suu = 0, svv = 0, suv = 0, suuu = 0, svvv = 0, suvv = 0, svuu = 0
		for( let i = 0; i < line.length; i += 2 ) {
			const u = line[ i ] - mx
			const v = line[ i + 1 ] - my
			suu += u * u
			svv += v * v
			suv += u * v
			suuu += u * u * u
			svvv += v * v * v
			suvv += u * v * v
			svuu += v * u * u
		}
		const n = line.length / 2
		const det = suu * svv - suv * suv
		if( Math.abs( det ) < 1e-12 ) return null
		const bu = ( suuu + suvv ) / 2
		const bv = ( svvv + svuu ) / 2
		const uc = ( bu * svv - bv * suv ) / det
		const vc = ( bv * suu - bu * suv ) / det
		const r = Math.sqrt( uc * uc + vc * vc + ( suu + svv ) / n )
		return { x: uc + mx, y: vc + my, r }
	}

	export function $bog_atelier_ink_ring( line: $bog_atelier_ink_line ): $bog_atelier_ink_ring | null {
		if( line.length < 16 ) return null
		const fit = $bog_atelier_ink_fit( line )
		if( !fit || !Number.isFinite( fit.r ) || fit.r <= 0 ) return null
		const { x, y, r } = fit
		let dev = 0
		let sweep = 0
		let prev = Math.atan2( line[ 1 ] - y, line[ 0 ] - x )
		for( let i = 0; i < line.length; i += 2 ) {
			const d = Math.hypot( line[ i ] - x, line[ i + 1 ] - y ) - r
			dev += d * d
			if( i ) {
				const a = Math.atan2( line[ i + 1 ] - y, line[ i ] - x )
				let da = a - prev
				if( da > Math.PI ) da -= Math.PI * 2
				if( da < -Math.PI ) da += Math.PI * 2
				sweep += da
				prev = a
			}
		}
		const wobble = Math.sqrt( dev / ( line.length / 2 ) ) / r
		const n = line.length
		const ends = Math.hypot( line[ n - 2 ] - line[ 0 ], line[ n - 1 ] - line[ 1 ] ) / r
		const short = Math.max( 0, Math.PI * 2 - Math.abs( sweep ) )
		const gap = short === 0 ? 0 : Math.max( ends, 2 * Math.sin( Math.min( Math.PI, short ) / 2 ) )
		const gap_at = Math.atan2(
			( line[ 1 ] + line[ n - 1 ] ) / 2 - y,
			( line[ 0 ] + line[ n - 2 ] ) / 2 - x,
		)
		return { x, y, r, wobble, sweep: Math.abs( sweep ), gap, gap_at }
	}

	export function $bog_atelier_ink_ring_like( ring: $bog_atelier_ink_ring | null ) {
		if( !ring ) return false
		return ring.wobble < 0.12 && ring.sweep > Math.PI * 1.5
	}

	export function $bog_atelier_ink_closed( ring: $bog_atelier_ink_ring, tolerance = 0.06 ) {
		return ring.gap <= tolerance
	}

	export function $bog_atelier_ink_cover(
		lines: readonly $bog_atelier_ink_line[],
		x: number,
		y: number,
		r: number,
		band = 0.12,
	) {
		const slots = 360
		const hit = new Uint8Array( slots )
		for( const line of lines ) {
			let prev = -1
			for( let i = 0; i < line.length; i += 2 ) {
				const dx = line[ i ] - x
				const dy = line[ i + 1 ] - y
				if( Math.abs( Math.hypot( dx, dy ) - r ) > band * r ) {
					prev = -1
					continue
				}
				const a = Math.atan2( dy, dx )
				const slot = Math.floor( ( a + Math.PI ) / ( Math.PI * 2 ) * slots ) % slots
				hit[ slot ] = 1
				if( prev >= 0 && prev !== slot ) {
					let d = slot - prev
					if( d > slots / 2 ) d -= slots
					if( d < -slots / 2 ) d += slots
					const dir = Math.sign( d )
					for( let k = prev; k !== slot; k = ( k + dir + slots ) % slots ) hit[ k ] = 1
				}
				prev = slot
			}
		}
		let covered = 0
		for( let k = 0; k < slots; ++ k ) covered += hit[ k ]
		let widest = 0
		let widest_at = 0
		if( covered === 0 ) return { covered: 0, gap: Math.PI * 2, gap_at: 0 }
		let start = 0
		if( covered === slots ) return { covered: 1, gap: 0, gap_at: 0 }
		while( !hit[ start ] ) ++ start
		let run = 0
		for( let n = 0; n < slots; ++ n ) {
			const k = ( start + n ) % slots
			if( !hit[ k ] ) {
				++ run
				if( run > widest ) {
					widest = run
					widest_at = k - ( run - 1 ) / 2
				}
			} else {
				run = 0
			}
		}
		return {
			covered: covered / slots,
			gap: widest / slots * Math.PI * 2,
			gap_at: ( widest_at + 0.5 ) / slots * Math.PI * 2 - Math.PI,
		}
	}

	export function $bog_atelier_ink_join( lines: readonly $bog_atelier_ink_line[] ) {
		const out = [] as number[]
		for( const line of lines ) for( const v of line ) out.push( v )
		return out
	}

	export function $bog_atelier_ink_path( line: $bog_atelier_ink_line ) {
		if( line.length < 2 ) return ''
		const r = ( v: number )=> Math.round( v * 1000 ) / 1000
		if( line.length < 6 ) {
			return `M${ r( line[ 0 ] ) } ${ r( line[ 1 ] ) }L${ r( line[ line.length - 2 ] ) } ${ r( line[ line.length - 1 ] ) }`
		}
		let d = `M${ r( line[ 0 ] ) } ${ r( line[ 1 ] ) }`
		for( let i = 2; i < line.length - 2; i += 2 ) {
			const mx = ( line[ i ] + line[ i + 2 ] ) / 2
			const my = ( line[ i + 1 ] + line[ i + 3 ] ) / 2
			d += `Q${ r( line[ i ] ) } ${ r( line[ i + 1 ] ) } ${ r( mx ) } ${ r( my ) }`
		}
		d += `L${ r( line[ line.length - 2 ] ) } ${ r( line[ line.length - 1 ] ) }`
		return d
	}

	export function $bog_atelier_ink_arc( x: number, y: number, r: number, from: number, to: number, count = 48 ) {
		const out = [] as number[]
		for( let k = 0; k <= count; ++ k ) {
			const a = from + ( to - from ) * k / count
			out.push( x + Math.cos( a ) * r, y + Math.sin( a ) * r )
		}
		return out
	}

	export function $bog_atelier_ink_move( line: $bog_atelier_ink_line, dx: number, dy: number, scale = 1, turn = 0 ) {
		const out = [] as number[]
		const c = Math.cos( turn )
		const s = Math.sin( turn )
		for( let i = 0; i < line.length; i += 2 ) {
			const x = line[ i ] * scale
			const y = line[ i + 1 ] * scale
			out.push( x * c - y * s + dx, x * s + y * c + dy )
		}
		return out
	}

}
