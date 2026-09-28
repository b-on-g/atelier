namespace $ {

	export type $bog_atelier_read_cloud = readonly number[]

	export type $bog_atelier_read_template = {
		id: string
		cloud: $bog_atelier_read_cloud
	}

	export function $bog_atelier_read_cloud( lines: readonly $bog_atelier_ink_line[], count = 48 ): $bog_atelier_read_cloud {
		const kept = lines.filter( line => line.length >= 2 )
		if( !kept.length ) return []
		const lengths = kept.map( line => Math.max( $bog_atelier_ink_length( line ), 1e-6 ) )
		const total = lengths.reduce( ( a, b )=> a + b, 0 )
		const points = [] as number[]
		let left = count
		kept.forEach( ( line, i )=> {
			const share = i === kept.length - 1 ? left : Math.max( 2, Math.round( count * lengths[ i ] / total ) )
			const take = Math.max( 1, Math.min( share, left - ( kept.length - 1 - i ) ) )
			left -= take
			points.push( ... $bog_atelier_ink_resample( line, take ) )
		} )
		return $bog_atelier_read_normal( points )
	}

	export function $bog_atelier_read_normal( points: readonly number[] ) {
		const box = $bog_atelier_ink_box( points )
		const size = Math.max( box.width, box.height, 1e-6 )
		const [ cx, cy ] = $bog_atelier_ink_center( points )
		return points.map( ( v, i )=> ( v - ( i % 2 ? cy : cx ) ) / size )
	}

	export function $bog_atelier_read_cost( a: $bog_atelier_read_cloud, b: $bog_atelier_read_cloud, start: number ) {
		const n = Math.min( a.length, b.length ) / 2
		const used = new Uint8Array( n )
		let sum = 0
		let i = start
		do {
			let best = Infinity
			let index = -1
			for( let j = 0; j < n; ++ j ) {
				if( used[ j ] ) continue
				const d = Math.hypot( a[ i * 2 ] - b[ j * 2 ], a[ i * 2 + 1 ] - b[ j * 2 + 1 ] )
				if( d < best ) {
					best = d
					index = j
				}
			}
			used[ index ] = 1
			const weight = 1 - ( ( i - start + n ) % n ) / n
			sum += weight * best
			i = ( i + 1 ) % n
		} while( i !== start )
		return sum
	}

	export function $bog_atelier_read_distance( a: $bog_atelier_read_cloud, b: $bog_atelier_read_cloud ) {
		const n = Math.min( a.length, b.length ) / 2
		if( !n ) return Infinity
		const step = Math.max( 1, Math.floor( Math.sqrt( n ) ) )
		let best = Infinity
		for( let i = 0; i < n; i += step ) {
			best = Math.min( best, $bog_atelier_read_cost( a, b, i ), $bog_atelier_read_cost( b, a, i ) )
		}
		return best / n
	}

	export function $bog_atelier_read_rank( cloud: $bog_atelier_read_cloud, templates: readonly $bog_atelier_read_template[] ) {
		return templates
			.map( template => ( { id: template.id, distance: $bog_atelier_read_distance( cloud, template.cloud ) } ) )
			.sort( ( a, b )=> a.distance - b.distance )
	}

}
