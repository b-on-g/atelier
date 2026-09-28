namespace $ {

	export type $bog_atelier_course_sign = readonly [ id: string, angle: number, size?: number, inverted?: boolean ]

	export type $bog_atelier_course_lesson = {
		id: string
		title: string
		source: string
		text: string
		sigil: string
		signs: readonly $bog_atelier_course_sign[]
		gap_at: number
		shaky?: number
	}

	const turn = ( k: number, n: number, from = 0 )=> from + k * Math.PI * 2 / n

	const ring_of = ( id: string, n = 4, from = 0, inverted = false ): $bog_atelier_course_sign[] =>
		Array.from( { length: n }, ( _, k )=> [ id, turn( k, n, from ), 1, inverted ] as const )

	const alternate = ( a: string, b: string, n = 8, from = 0 ): $bog_atelier_course_sign[] =>
		Array.from( { length: n }, ( _, k )=> [ k % 2 ? b : a, turn( k, n, from ) ] as const )

	const deg = Math.PI / 180

	export const $bog_atelier_course_lessons: readonly $bog_atelier_course_lesson[] = [
		{
			id: 'spark',
			title: 'Первая искра',
			source: 'Глава 1',
			text: 'Коко перерисовала огонь из детской книжки и увидела, что магию рисуют, а не произносят. Сигил в центре выбирает стихию, кольцо её запускает. Пока в кольце разрыв, глиф спит. Замкни его одним штрихом.',
			sigil: 'fire',
			signs: [],
			gap_at: -60 * deg,
		},
		{
			id: 'glow',
			title: 'Свет',
			source: 'Глава 29',
			text: 'Ольруджо говорит, что свет — вариант огня. Тот же приём: сигил в центре, кольцо вокруг. Замкни кольцо, и над листом загорится огонёк.',
			sigil: 'light',
			signs: [],
			gap_at: 30 * deg,
		},
		{
			id: 'watershot',
			title: 'Водяной выстрел',
			source: 'Глава 3',
			text: 'Первый глиф Коко в ателье. Вокруг сигила воды четыре знака-столба: перекладина на кольце, ножка к центру. Ровный круг столбов поднимает воду прямой струёй.',
			sigil: 'water',
			signs: ring_of( 'column', 4, 45 * deg ),
			gap_at: 180 * deg,
		},
		{
			id: 'agott',
			title: 'Урок Агот',
			source: 'Глава 3',
			text: 'У Коко один столб вышел длиннее остальных, и струя ударила вбок, прямо в лицо Агот. Длинный знак тянет эффект на себя. Посмотри, куда наклонится вода.',
			sigil: 'water',
			signs: [ [ 'column', 0, 1.55 ], [ 'column', 90 * deg ], [ 'column', 180 * deg ], [ 'column', 270 * deg ] ],
			gap_at: 135 * deg,
		},
		{
			id: 'beam',
			title: 'Луч света',
			source: 'Глава 10',
			text: 'Свет и шесть столбов. Чем ровнее нарисован глиф, тем ровнее луч.',
			sigil: 'light',
			signs: ring_of( 'column', 6, 30 * deg ),
			gap_at: -90 * deg,
		},
		{
			id: 'pyreball',
			title: 'Огненный шар',
			source: 'Глава 8',
			text: 'Вокруг огня четыре левитации: стрелка к центру стоит на перекладине. Огонь не бьёт вверх, а парит шаром. На таком Коко запекала ямс.',
			sigil: 'fire',
			signs: ring_of( 'levitation', 4, 45 * deg ),
			gap_at: 0,
		},
		{
			id: 'lamp',
			title: 'Парящая лампа',
			source: 'Глава 1',
			text: 'Свет, а по кругу чередуются парение и столбы. Две волнистые черты держат стихию на высоте, столбы её поднимают. Так светится камень на мостовой в родной деревне Коко.',
			sigil: 'light',
			signs: alternate( 'float', 'column', 8, 22.5 * deg ),
			gap_at: 100 * deg,
		},
		{
			id: 'grasp',
			title: 'Хватающий ветер',
			source: 'Глава 14',
			text: 'Ветер не создаёт воздух, а двигает его. Знаки притяжения — стрелки к центру — затягивают воздух в глиф. Тетия подсказала этим способом сорвать яблоко, а Коко вырвала яблоню с корнем.',
			sigil: 'wind',
			signs: ring_of( 'pull', 4, 45 * deg ),
			gap_at: -135 * deg,
		},
		{
			id: 'breaker',
			title: 'Разрушитель стен',
			source: 'Глава 6',
			text: 'Земля, по бокам два столба, сверху и снизу знаки дробления: зигзаг пиками к кольцу. Камень рассыпается в пыль.',
			sigil: 'earth',
			signs: [ [ 'column', 0 ], [ 'crush', 90 * deg ], [ 'column', 180 * deg ], [ 'crush', 270 * deg ] ],
			gap_at: 45 * deg,
		},
		{
			id: 'integration',
			title: 'Сборка',
			source: 'Глава 17',
			text: 'Тот же зигзаг, но пиками внутрь. Перевёрнутый знак даёт обратный эффект: пыль собирается в прежнюю форму. Так Тарта и Коко узнали, из каких трав был порошок.',
			sigil: 'earth',
			signs: ring_of( 'crush', 4, 45 * deg, true ),
			gap_at: 180 * deg,
		},
		{
			id: 'bucket',
			title: 'Переполненное ведро',
			source: 'Знак рассеяния',
			text: 'Столб с чашей снаружи — рассеяние. Вода переливается через край во все стороны, как из переполненного ведра.',
			sigil: 'water',
			signs: ring_of( 'dispersion', 4, 45 * deg ),
			gap_at: -30 * deg,
		},
		{
			id: 'focus',
			title: 'Сгущение',
			source: 'Главы 6–7',
			text: 'Треугольник вершиной к центру сводит стихию в точку. Один такой знак почти ничего не делает, четыре собирают свет в плотный шар.',
			sigil: 'light',
			signs: ring_of( 'convergence', 4, 0 ),
			gap_at: 45 * deg,
		},
		{
			id: 'bolt',
			title: 'Водяные стрелы',
			source: 'Глава 24',
			text: 'Черта с ромбом посередине — снаряд. Вода вылетает стрелами в сторону, где стоят знаки. Qifrey рисовал такой глиф прямо на земле.',
			sigil: 'water',
			signs: [ [ 'bolt', -20 * deg ], [ 'bolt', 20 * deg ], [ 'direction', -55 * deg ], [ 'direction', 55 * deg ] ],
			gap_at: 180 * deg,
		},
		{
			id: 'air',
			title: 'Сотворить воздух',
			source: 'Глава 30',
			text: 'Воздушные формы создают воздух, но не двигают его. Направления внутрь и столбы поднимают его над листом: так дышат пассажиры кареты-пузыря.',
			sigil: 'aeroform',
			signs: alternate( 'direction', 'column', 8, 0 ),
			gap_at: 110 * deg,
		},
		{
			id: 'smolder',
			title: 'Тлеющий огонь',
			source: 'По мотивам главы 18',
			text: 'Перевёрнутые столбы: перекладина у центра, ножка к кольцу. Огонь не поднимается, а тлеет у самого листа. Похожим глифом Ольруджо греет камни.',
			sigil: 'fire',
			signs: ring_of( 'column', 4, 45 * deg, true ),
			gap_at: -90 * deg,
		},
		{
			id: 'sloppy',
			title: 'Наспех',
			source: 'Глава 1',
			text: 'Этот глиф нарисован дрожащей рукой. Он сработает, но быстро выдохнется: чем аккуратнее глиф, тем дольше он держится. Замкни кольцо и досчитай до десяти.',
			sigil: 'fire',
			signs: ring_of( 'column', 4, 45 * deg ),
			gap_at: 60 * deg,
			shaky: 0.045,
		},
	]

	export const $bog_atelier_course_scale = 0.95

	export const $bog_atelier_course_gap = 26 * Math.PI / 180

	export function $bog_atelier_course_base( lesson: $bog_atelier_course_lesson ) {
		const scale = $bog_atelier_course_scale
		const shaky = lesson.shaky ?? 0
		const ring = $bog_atelier_glyph_circle( $bog_atelier_course_gap, lesson.gap_at, scale )
			.map( ( v, i )=> v * ( 1 + Math.sin( i * 0.37 ) * shaky + Math.sin( i * 1.9 ) * shaky * 0.5 ) )
		return [
			ring,
			... $bog_atelier_glyph_sigil( lesson.sigil, $bog_atelier_glyph_sigil_size * scale ),
			... lesson.signs.flatMap( ( [ id, angle, size = 1, inverted = false ] )=> $bog_atelier_glyph_sign(
				id, angle,
				$bog_atelier_glyph_sign_orbit * scale,
				$bog_atelier_glyph_sign_size * scale * size,
				inverted,
			) ),
		]
	}

	export function $bog_atelier_course_guide( lesson: $bog_atelier_course_lesson ) {
		const half = $bog_atelier_course_gap / 2 + 0.06
		return [ $bog_atelier_ink_arc( 0, 0, $bog_atelier_course_scale, lesson.gap_at - half, lesson.gap_at + half, 24 ) ]
	}

}
