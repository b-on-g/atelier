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
			note: 'Пламя и жар. Треугольник вершиной вверх, усы на боковых сторонах и хвост снизу. С него начались беды Коко (гл. 1).',
			canon: 'manga',
			strokes: [
				seg( 0, -0.46, 0.4, 0.23, -0.4, 0.23, 0, -0.46 ),
				seg( 0.1, -0.03, 0.31, -0.16 ),
				seg( -0.1, -0.03, -0.31, -0.16 ),
				seg( 0, 0.23, 0, 0.46 ),
			],
		},

		{
			id: 'water',
			kind: 'sigil',
			element: 'water',
			title: 'Вода',
			note: 'Вода. Волна по центру и две капли: слева остриём вверх, справа вниз. Первый глиф Коко в ателье (гл. 3).',
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
			note: 'Двигает воздух, но не создаёт его. Двойной завиток и по три луча веером наружу (гл. 14).',
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
			note: 'Воздушные формы: создают и держат воздух, но не двигают его. Завиток, стрелки к нему с боков, четыре точки (гл. 30).',
			canon: 'manga',
			strokes: [
				... wind_s(),
				seg( 0.5, -0.14, 0.32, 0, 0.5, 0.14 ),
				seg( 0.32, 0, 0.56, 0 ),
				seg( -0.5, -0.14, -0.32, 0, -0.5, 0.14 ),
				seg( -0.32, 0, -0.56, 0 ),
				dot( -0.5, -0.4 ),
				dot( 0.5, -0.4 ),
				dot( -0.5, 0.4 ),
				dot( 0.5, 0.4 ),
			],
		},

		{
			id: 'earth',
			kind: 'sigil',
			element: 'earth',
			title: 'Земля',
			note: 'Двигает камень, песок и дерево, но не создаёт их. Перекладина с ножками, стержень и галка с загибами внутрь (гл. 6).',
			canon: 'manga',
			strokes: [
				seg( -0.42, -0.3, -0.42, -0.4, 0.42, -0.4, 0.42, -0.3 ),
				seg( 0, -0.4, 0, 0.4 ),
				seg( -0.23, 0, -0.34, 0, 0, 0.4, 0.34, 0, 0.23, 0 ),
				dot( -0.54, -0.12 ),
				dot( 0.54, -0.12 ),
			],
		},

		{
			id: 'light',
			kind: 'sigil',
			element: 'light',
			title: 'Свет',
			note: 'Свет, по словам Ольруджо — вариант огня (гл. 29). Квадрат, в нём ромб, из середин сторон четыре луча.',
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
			note: 'Стихия бьёт столбом вверх из глифа. Ровный круг столбов даёт прямую струю, лишний или более длинный столб тянет её к себе (гл. 3, водяной выстрел Коко).',
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
			note: 'Стихия парит над глифом. Кольцо левитаций вокруг огня держит огненный шар (гл. 8, Pyreball).',
			canon: 'manga',
			strokes: [
				seg( 0, -0.5, 0, 0.45 ),
				seg( -0.3, 0.45, 0.3, 0.45 ),
				seg( -0.22, -0.24, 0, -0.5, 0.22, -0.24 ),
			],
		},

		{
			id: 'dispersion',
			kind: 'sign',
			title: 'Рассеяние',
			note: 'Стихия переливается через край во все стороны, как из переполненного ведра.',
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
			title: 'Сгущение',
			note: 'Сводит стихию в точку и делает рыхлое плотным. Один знак почти не действует, четыре собирают шар (гл. 7).',
			canon: 'manga',
			strokes: [
				seg( 0, -0.4, 0.4, 0.35, -0.4, 0.35, 0, -0.4 ),
			],
		},

		{
			id: 'pull',
			kind: 'sign',
			title: 'Притяжение',
			note: 'Затягивает стихию того же рода в глиф: так ветер срывает яблоко (гл. 14). Перевёрнутый знак толкает.',
			canon: 'manga',
			strokes: [
				seg( 0, 0.5, 0, -0.45 ),
				seg( -0.2, -0.05, 0.2, -0.05, 0, -0.35, -0.2, -0.05 ),
				seg( -0.25, -0.2, 0, -0.5, 0.25, -0.2 ),
			],
		},

		{
			id: 'direction',
			kind: 'sign',
			title: 'Направление',
			note: 'Остриё указывает, куда пойдёт стихия. Все внутрь — бьёт вверх, все наружу — бьёт наружу (гл. 16, 27).',
			canon: 'manga',
			strokes: [
				seg( -0.34, 0.2, 0, -0.26, 0.34, 0.2 ),
			],
		},

		{
			id: 'crush',
			kind: 'sign',
			title: 'Дробление',
			note: 'С землёй рассыпает камень в пыль (гл. 6, Wall Breaker). Перевёрнутое собирает пыль обратно в форму (гл. 17, Integration).',
			canon: 'manga',
			strokes: [
				seg( -0.5, -0.15, -0.25, 0.15, 0, -0.15, 0.25, 0.15, 0.5, -0.15 ),
			],
		},

		{
			id: 'float',
			kind: 'sign',
			title: 'Парение',
			note: 'Держит стихию на ровной высоте, вопреки тяжести (гл. 1, парящая лампа).',
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
			note: 'Собирает материал вокруг глифа. Открытой стороной смотрит внутрь (гл. 6–7, облако для ложа змея).',
			canon: 'manga',
			strokes: [
				seg( -0.36, -0.42, 0.36, 0.42, -0.36, 0.42, 0.36, -0.42 ),
			],
		},

		{
			id: 'bolt',
			kind: 'sign',
			title: 'Снаряд',
			note: 'Стихия вылетает стрелами. Вместе с направлением они летят с опасной скоростью (гл. 24, Water Bolt).',
			canon: 'manga',
			strokes: [
				seg( 0, -0.5, 0, 0.5 ),
				seg( 0, -0.16, 0.13, 0, 0, 0.16, -0.13, 0, 0, -0.16 ),
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
