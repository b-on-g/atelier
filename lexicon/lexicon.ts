namespace $ {

	export type $bog_atelier_lexicon_kind = 'sigil' | 'sign'

	export type $bog_atelier_lexicon_canon = 'manga' | 'fan'

	export type $bog_atelier_lexicon_element = 'fire' | 'water' | 'air' | 'earth' | 'light'

	export type $bog_atelier_lexicon_entry = {
		id: string
		kind: $bog_atelier_lexicon_kind
		title: string
		note: string
		canon: $bog_atelier_lexicon_canon
		strokes: readonly $bog_atelier_ink_line[]
		element?: $bog_atelier_lexicon_element
	}

	const seg = ( ... points: number[] )=> points

	const arc = ( x: number, y: number, r: number, from: number, to: number, count = 24 )=> $bog_atelier_ink_arc( x, y, r, from * Math.PI / 180, to * Math.PI / 180, count )

	const dot = ( x: number, y: number )=> arc( x, y, 0.03, 0, 360, 8 )

	const spiral = ( x: number, y: number, r_from: number, r_to: number, from: number, to: number, count = 32 )=> {
		const out = [] as number[]
		for( let k = 0; k <= count; ++ k ) {
			const t = k / count
			const a = ( from + ( to - from ) * t ) * Math.PI / 180
			const r = r_from + ( r_to - r_from ) * t
			out.push( x + Math.cos( a ) * r, y + Math.sin( a ) * r )
		}
		return out
	}

	const turn = ( line: $bog_atelier_ink_line )=> line.map( v => -v )

	const drop = ( x: number, y: number, r: number, up: boolean )=> {
		const tip = up ? -1 : 1
		const round = arc( x, y, r, up ? 20 : 200, up ? 160 : 340, 16 )
		return [ x, y + tip * r * 3, ... round, x, y + tip * r * 3 ]
	}

	const wind_s = ()=> {
		const upper = [ ... arc( 0, -0.2, 0.2, 90, -180, 20 ), ... spiral( 0, -0.2, 0.2, 0.08, 180, 360, 14 ) ]
		return [ upper, turn( upper ) ]
	}

	export const $bog_atelier_lexicon_list: readonly $bog_atelier_lexicon_entry[] = [

		{
			id: 'fire',
			kind: 'sigil',
			element: 'fire',
			title: 'Огонь',
			note: 'Создаёт пламя и жар. Треугольник вершиной вверх, «ручки» по бокам и хвост снизу.',
			canon: 'manga',
			strokes: [
				seg( 0, -0.45, 0.45, 0.33, -0.45, 0.33, 0, -0.45 ),
				seg( 0.225, -0.06, 0.43, -0.18 ),
				seg( -0.225, -0.06, -0.43, -0.18 ),
				seg( 0, 0.33, 0, 0.55 ),
			],
		},

		{
			id: 'water',
			kind: 'sigil',
			element: 'water',
			title: 'Вода',
			note: 'Создаёт и направляет воду. Волна по центру и две капли: слева остриём вверх, справа вниз.',
			canon: 'manga',
			strokes: [
				Array.from( { length: 21 }, ( _, k )=> {
					const t = k / 20
					return [ 0.12 * Math.cos( Math.PI * t ) - 0.06 * Math.sin( 2 * Math.PI * t ), -0.5 + t ]
				} ).flat(),
				drop( -0.34, 0.12, 0.09, true ),
				drop( 0.34, -0.12, 0.09, false ),
			],
		},

		{
			id: 'wind',
			kind: 'sigil',
			element: 'air',
			title: 'Ветер',
			note: 'Двигает воздух, но не создаёт его. Двойной завиток и по три луча с каждой стороны.',
			canon: 'manga',
			strokes: [
				... wind_s(),
				seg( 0.3, 0, 0.5, 0 ),
				seg( 0.28, -0.14, 0.44, -0.3 ),
				seg( 0.28, 0.14, 0.44, 0.3 ),
				seg( -0.3, 0, -0.5, 0 ),
				seg( -0.28, -0.14, -0.44, -0.3 ),
				seg( -0.28, 0.14, -0.44, 0.3 ),
			],
		},

		{
			id: 'aeroform',
			kind: 'sigil',
			element: 'air',
			title: 'Воздух',
			note: 'Создаёт воздух, но не двигает. Двойной завиток между двумя наконечниками, остриями к центру.',
			canon: 'manga',
			strokes: [
				... wind_s(),
				seg( 0.5, -0.18, 0.3, 0, 0.5, 0.18 ),
				seg( 0.3, 0, 0.52, 0 ),
				seg( -0.5, -0.18, -0.3, 0, -0.5, 0.18 ),
				seg( -0.3, 0, -0.52, 0 ),
			],
		},

		{
			id: 'earth',
			kind: 'sigil',
			element: 'earth',
			title: 'Земля',
			note: 'Двигает камень, песок и дерево, но не создаёт их. Черта сверху, стержень вниз и чаша с загнутыми краями.',
			canon: 'manga',
			strokes: [
				seg( -0.34, -0.36, 0.34, -0.36 ),
				seg( 0, -0.36, 0, 0.42 ),
				seg( -0.2, -0.05, -0.36, 0.1, 0, 0.42, 0.36, 0.1, 0.2, -0.05 ),
				dot( -0.5, 0.02 ),
				dot( 0.5, 0.02 ),
			],
		},

		{
			id: 'light',
			kind: 'sigil',
			element: 'light',
			title: 'Свет',
			note: 'Создаёт свет. Квадрат, в нём ромб, из середин сторон наружу четыре луча.',
			canon: 'manga',
			strokes: [
				seg( -0.28, -0.28, 0.28, -0.28, 0.28, 0.28, -0.28, 0.28, -0.28, -0.28 ),
				seg( 0, -0.28, 0.28, 0, 0, 0.28, -0.28, 0, 0, -0.28 ),
				seg( 0, -0.28, 0, -0.5 ),
				seg( 0.28, 0, 0.5, 0 ),
				seg( 0, 0.28, 0, 0.5 ),
				seg( -0.28, 0, -0.5, 0 ),
			],
		},

		{
			id: 'column',
			kind: 'sign',
			title: 'Столб',
			note: 'Толкает стихию прочь от знака. Симметричные столбы поднимают поток вверх, лишний столб наклоняет его.',
			canon: 'manga',
			strokes: [
				seg( 0, -0.5, 0, 0.45 ),
				seg( -0.3, 0.45, 0.3, 0.45 ),
			],
		},

		{
			id: 'levitation',
			kind: 'sign',
			title: 'Левитация',
			note: 'Ослабляет тяжесть: стихия парит над листом.',
			canon: 'manga',
			strokes: [
				seg( 0, -0.5, 0, 0.45 ),
				seg( -0.3, 0.45, 0.3, 0.45 ),
				seg( -0.22, -0.22, 0, -0.5, 0.22, -0.22 ),
			],
		},

		{
			id: 'dispersion',
			kind: 'sign',
			title: 'Рассеяние',
			note: 'Разворачивает поток веером.',
			canon: 'manga',
			strokes: [
				seg( 0, -0.5, 0, 0.2 ),
				seg( -0.32, 0.2, 0.32, 0.2 ),
				arc( 0, 0.12, 0.34, 20, 160, 16 ),
			],
		},

		{
			id: 'convergence',
			kind: 'sign',
			title: 'Схождение',
			note: 'Сводит стихию в точку. Один знак почти не действует, четыре собирают шар.',
			canon: 'manga',
			strokes: [
				seg( 0, -0.4, 0.4, 0.35, -0.4, 0.35, 0, -0.4 ),
			],
		},

		{
			id: 'pull',
			kind: 'sign',
			title: 'Притяжение',
			note: 'Тянет стихию к глифу.',
			canon: 'fan',
			strokes: [
				seg( 0, -0.5, 0, 0.5 ),
				seg( -0.2, 0.05, 0, -0.25, 0.2, 0.05, -0.2, 0.05 ),
				seg( -0.28, -0.22, 0, -0.5, 0.28, -0.22 ),
			],
		},

		{
			id: 'region',
			kind: 'sign',
			title: 'Сектор',
			note: 'Выбирает сторону, куда уйдёт действие.',
			canon: 'fan',
			strokes: [
				seg( -0.36, 0.3, 0, -0.3, 0.36, 0.3 ),
			],
		},

		{
			id: 'crush',
			kind: 'sign',
			title: 'Дробление',
			note: 'Крошит твёрдое в пыль, воду превращает в туман.',
			canon: 'manga',
			strokes: [
				seg( -0.5, 0.15, -0.25, -0.15, 0, 0.15, 0.25, -0.15, 0.5, 0.15 ),
			],
		},

		{
			id: 'float',
			kind: 'sign',
			title: 'Парение',
			note: 'Держит стихию на ровной высоте над листом.',
			canon: 'manga',
			strokes: [ -0.13, 0.13 ].map( x => Array.from( { length: 17 }, ( _, k )=> {
				const t = k / 16
				return [ x + 0.1 * Math.sin( 2 * Math.PI * t ), -0.5 + t ]
			} ).flat() ),
		},

		{
			id: 'collection',
			kind: 'sign',
			title: 'Сбор',
			note: 'Собирает стихию из окружения.',
			canon: 'fan',
			strokes: [
				seg( -0.34, -0.42, 0.34, -0.42, -0.34, 0.42, 0.34, 0.42, -0.34, -0.42 ),
			],
		},

		{
			id: 'weave',
			kind: 'sign',
			title: 'Сплетение',
			note: 'Вытягивает стихию лентой.',
			canon: 'manga',
			strokes: [
				arc( 0, -0.02, 0.36, 135, 405, 24 ),
				seg( -0.25, 0.23, -0.42, 0.4 ),
				seg( 0.25, 0.23, 0.42, 0.4 ),
			],
		},

	]

	export function $bog_atelier_lexicon_entry( id: string ) {
		return $bog_atelier_lexicon_list.find( entry => entry.id === id ) ?? null
	}

	export function $bog_atelier_lexicon_of( kind: $bog_atelier_lexicon_kind ) {
		return $bog_atelier_lexicon_list.filter( entry => entry.kind === kind )
	}

	export function $bog_atelier_lexicon_path( entry: $bog_atelier_lexicon_entry ) {
		return entry.strokes.map( line => $bog_atelier_ink_poly( line ) ).join( '' )
	}

}
