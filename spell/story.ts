namespace $ {

	const percent = ( v: number )=> `${ Math.round( v * 100 ) }%`

	const forms: Record< $bog_atelier_spell_form, string > = {
		still: 'Знаков нет, поэтому стихия просто проявляется над сигилом.',
		jet: 'Столбы поднимают стихию струёй.',
		ball: 'Стихия собирается в шар и парит над листом.',
		fan: 'Стихия переливается через край во все стороны.',
		bolt: 'Стихия вылетает стрелами.',
		vortex: 'Знаки затягивают стихию в глиф вихрем.',
		dust: 'Дробление крошит стихию в пыль.',
		mend: 'Перевёрнутое дробление собирает пыль обратно.',
	}

	export function $bog_atelier_spell_story( spell: $bog_atelier_spell ) {
		const lines = [] as string[]
		const entry = spell.sigil ? $bog_atelier_lexicon_entry( spell.sigil ) : null
		if( !entry ) {
			lines.push( 'Осечка: сигил в центре не прочитан. Чернила вспыхнули и задымились.' )
			return lines
		}
		lines.push( `${ entry.title }: сила ${ percent( spell.power ) }, аккуратность ${ percent( spell.neat ) }.` )
		if( spell.misfire ) lines.push( 'Линии слишком неровные: магия идёт рывками и сразу гаснет.' )
		lines.push( forms[ spell.form ] )
		const tilt = Math.hypot( spell.tilt_x, spell.tilt_y )
		if( tilt >= 0.15 ) lines.push( 'Знаки стоят неравно, поэтому поток тянет туда, где их больше или где они длиннее.' )
		if( spell.lift < 0 ) lines.push( 'Столбы перевёрнуты: стихия не поднимается, а тлеет у самого листа.' )
		if( spell.focus > 0.3 && spell.form !== 'ball' ) lines.push( 'Сгущение сжимает поток.' )
		if( spell.hover > 0 && spell.form !== 'ball' ) lines.push( 'Левитация держит стихию над листом.' )
		if( !spell.misfire ) {
			lines.push( spell.life > 30
				? 'Глиф нарисован чисто и продержится долго.'
				: `Глиф нарисован наспех и выдохнется примерно через ${ Math.round( spell.life ) } с.` )
		}
		return lines
	}

}
