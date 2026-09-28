declare let _$_: {
    new (): {};
} & typeof globalThis;
declare class $ extends _$_ {
}
declare namespace $ {
    export type $ = typeof $$;
    export class $$ extends $ {
        static $: $;
    }
    namespace $$ {
        type $$ = $;
    }
    export {};
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    var $mol_dom: typeof globalThis;
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_promise<Result = void> extends Promise<Result> {
        done: (value: Result | PromiseLike<Result>) => void;
        fail: (reason?: any) => void;
        constructor(executor?: (done: (value: Result | PromiseLike<Result>) => void, fail: (reason?: any) => void) => void);
    }
}

declare namespace $ {
    class $mol_promise_blocker<Result> extends $mol_promise<Result> {
        static [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    type $mol_style_unit_str<Quanity extends $mol_style_unit_any = $mol_style_unit_any> = `${number}${Quanity}`;
    /**
     * CSS Units
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): `${number}%`;
        static px(value: number): `${number}px`;
        static mm(value: number): `${number}mm`;
        static cm(value: number): `${number}cm`;
        static Q(value: number): `${number}Q`;
        static in(value: number): `${number}in`;
        static pc(value: number): `${number}pc`;
        static pt(value: number): `${number}pt`;
        static cap(value: number): `${number}cap`;
        static ch(value: number): `${number}ch`;
        static em(value: number): `${number}em`;
        static rem(value: number): `${number}rem`;
        static ex(value: number): `${number}ex`;
        static ic(value: number): `${number}ic`;
        static lh(value: number): `${number}lh`;
        static rlh(value: number): `${number}rlh`;
        static vh(value: number): `${number}vh`;
        static vw(value: number): `${number}vw`;
        static vi(value: number): `${number}vi`;
        static vb(value: number): `${number}vb`;
        static vmin(value: number): `${number}vmin`;
        static vmax(value: number): `${number}vmax`;
        static deg(value: number): `${number}deg`;
        static rad(value: number): `${number}rad`;
        static grad(value: number): `${number}grad`;
        static turn(value: number): `${number}turn`;
        static s(value: number): `${number}s`;
        static ms(value: number): `${number}ms`;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'clamp' | 'scale' | 'cubic-bezier' | 'linear' | 'steps' | $mol_style_func_image | $mol_style_func_filter;
    type $mol_style_func_image = 'url' | 'linear-gradient' | 'radial-gradient' | 'conic-gradient';
    type $mol_style_func_filter = 'blur' | 'brightness' | 'contrast' | 'drop-shadow' | 'grayscale' | 'hue-rotate' | 'invert' | 'opacity' | 'sepia' | 'saturate';
    /**
     * CSS Functions
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static linear_gradient<Value>(value: Value): $mol_style_func<"linear-gradient", Value>;
        static radial_gradient<Value>(value: Value): $mol_style_func<"radial-gradient", Value>;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string, Value extends string>(name: Name, defaultValue?: Value): $mol_style_func<"var", Name | (Name | Value)[]>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number | $mol_style_func<'var'>, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | `${number}%` | $mol_style_func<"var", unknown>)[]>;
        static clamp(min: $mol_style_unit_str<any>, mid: $mol_style_unit_str<any>, max: $mol_style_unit_str<any>): $mol_style_func<"clamp", `${number}${any}`[]>;
        static rgba(red: number | $mol_style_func<'var'>, green: number | $mol_style_func<'var'>, blue: number | $mol_style_func<'var'>, alpha: number | $mol_style_func<'var'>): $mol_style_func<"rgba", (number | $mol_style_func<"var", unknown>)[]>;
        static scale(zoom: number): $mol_style_func<"scale", number[]>;
        static linear(...breakpoints: Array<number | [number, number | $mol_style_unit_str<'%'>]>): $mol_style_func<"linear", string[]>;
        static cubic_bezier(x1: number, y1: number, x2: number, y2: number): $mol_style_func<"cubic-bezier", number[]>;
        static steps(value: number, step_position: 'jump-start' | 'jump-end' | 'jump-none' | 'jump-both' | 'start' | 'end'): $mol_style_func<"steps", (number | "end" | "start" | "jump-start" | "jump-end" | "jump-none" | "jump-both")[]>;
        static blur(value?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"blur", string>;
        static brightness(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"brightness", string | number>;
        static contrast(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"contrast", string | number>;
        static drop_shadow(color: $mol_style_properties_color, x_offset: $mol_style_unit_str<$mol_style_unit_length>, y_offset: $mol_style_unit_str<$mol_style_unit_length>, blur_radius?: $mol_style_unit_str<$mol_style_unit_length>): $mol_style_func<"drop-shadow", readonly [$mol_style_properties_color, `${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax`, `${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax`, `${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax`] | readonly [$mol_style_properties_color, `${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax`, `${number}%` | `${number}px` | `${number}mm` | `${number}cm` | `${number}Q` | `${number}in` | `${number}pc` | `${number}pt` | `${number}cap` | `${number}ch` | `${number}em` | `${number}rem` | `${number}ex` | `${number}ic` | `${number}lh` | `${number}rlh` | `${number}vh` | `${number}vw` | `${number}vi` | `${number}vb` | `${number}vmin` | `${number}vmax`]>;
        static grayscale(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"grayscale", string | number>;
        static hue_rotate(value?: 0 | $mol_style_unit_str<$mol_style_unit_angle>): $mol_style_func<"hue-rotate", string | 0>;
        static invert(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"invert", string | number>;
        static opacity(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"opacity", string | number>;
        static sepia(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"sepia", string | number>;
        static saturate(value?: number | $mol_style_unit_str<'%'>): $mol_style_func<"saturate", string | number>;
    }
}

declare namespace $ {
    /** Replaces properties of `Base` record by properties from `Over`. */
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset' | 'revert' | 'revert-layer' | 'none' | $mol_style_func<'var'>;
    type Portion = `${number}${'%'}` | number;
    type Space = '' | ' ';
    type Var = `var(--${string})`;
    type Calc = `calc(${string})`;
    type Angle = number | `${number}${'deg' | 'turn'}` | Var | Calc | 'none';
    export type $mol_style_properties_color = 'aliceblue' | 'antiquewhite' | 'aqua' | 'aquamarine' | 'azure' | 'beige' | 'bisque' | 'black' | 'blanchedalmond' | 'blue' | 'blueviolet' | 'brown' | 'burlywood' | 'cadetblue' | 'chartreuse' | 'chocolate' | 'coral' | 'cornflowerblue' | 'cornsilk' | 'crimson' | 'cyan' | 'darkblue' | 'darkcyan' | 'darkgoldenrod' | 'darkgray' | 'darkgreen' | 'darkgrey' | 'darkkhaki' | 'darkmagenta' | 'darkolivegreen' | 'darkorange' | 'darkorchid' | 'darkred' | 'darksalmon' | 'darkseagreen' | 'darkslateblue' | 'darkslategrey' | 'darkturquoise' | 'darkviolet' | 'deeppink' | 'deepskyblue' | 'dimgray' | 'dimgrey' | 'dodgerblue' | 'firebrick' | 'floralwhite' | 'forestgreen' | 'fuchsia' | 'gainsboro' | 'ghostwhite' | 'gold' | 'goldenrod' | 'gray' | 'green' | 'greenyellow' | 'grey' | 'honeydew' | 'hotpink' | 'indianred' | 'indigo' | 'ivory' | 'khaki' | 'lavender' | 'lavenderblush' | 'lawngreen' | 'lemonchiffon' | 'lightblue' | 'lightcoral' | 'lightcyan' | 'lightgoldenrodyellow' | 'lightgray' | 'lightgreen' | 'lightgrey' | 'lightpink' | 'lightsalmon' | 'lightseagreen' | 'lightskyblue' | 'lightslategray' | 'lightslategrey' | 'lightsteelblue' | 'lightyellow' | 'lime' | 'limegreen' | 'linen' | 'magenta' | 'maroon' | 'mediumaquamarine' | 'mediumblue' | 'mediumorchid' | 'mediumpurple' | 'mediumseagreen' | 'mediumslateblue' | 'mediumspringgreen' | 'mediumturquoise' | 'mediumvioletred' | 'midnightblue' | 'mintcream' | 'mistyrose' | 'moccasin' | 'navajowhite' | 'navy' | 'oldlace' | 'olive' | 'olivedrab' | 'orange' | 'orangered' | 'orchid' | 'palegoldenrod' | 'palegreen' | 'paleturquoise' | 'palevioletred' | 'papayawhip' | 'peachpuff' | 'peru' | 'pink' | 'plum' | 'powderblue' | 'purple' | 'rebeccapurple' | 'red' | 'rosybrown' | 'royalblue' | 'saddlebrown' | 'salmon' | 'sandybrown' | 'seagreen' | 'seashell' | 'sienna' | 'silver' | 'skyblue' | 'slateblue' | 'slategray' | 'slategrey' | 'snow' | 'springgreen' | 'steelblue' | 'tan' | 'teal' | 'thistle' | 'tomato' | 'turquoise' | 'violet' | 'wheat' | 'white' | 'whitesmoke' | 'yellow' | 'yellowgreen' | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'> | `#${string}` | `hsl(${Space}${Angle} ${Portion} ${Portion}${'' | `${Space}/${Space}${Portion}`}${Space})`;
    type Length = 0 | `${number}${$mol_style_unit_length}` | $mol_style_func<'calc' | 'var' | 'clamp'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Sides<Value> = {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
        blockStart?: Value;
        blockEnd?: Value;
        inlineStart?: Value;
        inlineEnd?: Value;
    };
    type Directions<Value> = Value | readonly [Value, Value] | Sides<Value>;
    type Edges<Value> = {
        topLeft?: Value;
        topRight?: Value;
        bottomLeft?: Value;
        bottomRight?: Value;
    };
    type Borders<Value> = Value | readonly [Value, Value] | (Sides<Value> & Edges<Value>);
    type Single_animation_composition = 'replace' | 'add' | 'accumulate';
    type Single_animation_direction = 'normal' | 'reverse' | 'alternate' | 'alternate-reverse';
    type Single_animation_fill_mode = 'none' | 'forwards' | 'backwards' | 'both';
    type Single_animation_iteration_count = 'infinite' | number;
    type Single_animation_play_state = 'running' | 'paused';
    type Easing_function = Linear_easing_function | Cubic_bezier_easing_function | Step_easing_function;
    type Linear_easing_function = 'linear' | $mol_style_func<'linear'>;
    type Cubic_bezier_easing_function = 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | $mol_style_func<'cubic-bezier'>;
    type Step_easing_function = 'step-start' | 'step-end' | $mol_style_func<'steps'>;
    type Compat_auto = 'searchfield' | 'textarea' | 'push-button' | 'slider-horizontal' | 'checkbox' | 'radio' | 'menulist' | 'listbox' | 'meter' | 'progress-bar' | 'button';
    type Compat_special = 'textfield' | 'menulist-button';
    type Mix_blend_mode = Blend_mode | 'plus-darker' | 'plus-lighter';
    type Blend_mode = 'normal' | 'multiply' | 'screen' | 'overlay' | 'darken' | 'lighten' | 'color-dodge' | 'color-burn' | 'hard-light' | 'soft-light' | 'difference' | 'exclusion' | 'hue' | 'saturation' | 'color' | 'luminosity';
    type Box = 'border-box' | 'padding-box' | 'content-box';
    type Baseline_position = 'baseline' | `${'first' | 'last'} baseline`;
    type Content_distribution = 'space-between' | 'space-around' | 'space-evenly' | 'stretch';
    type Self_position = 'center' | 'start' | 'end' | 'self-start' | 'self-end' | 'flex-start' | 'flex-end';
    type Content_position = 'center' | 'start' | 'end' | 'flex-start' | 'flex-end';
    type Span_align = 'none' | 'start' | 'end' | 'center' | $mol_style_func<'var'>;
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both' | $mol_style_func<'var'>;
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type Overflow_position = 'unsafe' | 'safe';
    type ContainRule = 'size' | 'layout' | 'style' | 'paint' | $mol_style_func<'var'>;
    type Repeat = 'repeat-x' | 'repeat-y' | 'repeat' | 'space' | 'round' | 'no-repeat' | $mol_style_func<'var'>;
    type BG_size = Length | 'auto' | 'contain' | 'cover';
    interface Overrides {
        /**
         * Sets the accent color for user-interface controls generated by some elements.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/accent-color
         */
        accentColor?: $mol_style_properties_color | Common;
        align?: {
            /**
             * Distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-content
             */
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            /**
             * Sets the align-self value on all direct children as a group.
             * In Flexbox, it controls the alignment of items on the Cross Axis.
             * In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
             */
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            /**
             * Overrides a grid or flex item's align-items value.
             * In Grid, it aligns the item inside the grid area.
             * In Flexbox, it aligns the item on the cross axis.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
             */
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        justify?: {
            /**
             * Distribution of space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
             */
            content?: 'normal' | Baseline_position | Content_distribution | Content_position | `${Overflow_position} ${Content_position}` | Common;
            /**
             * Sets the justify-self value on all direct children as a group.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-items
             */
            items?: 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
            /**
             * Way a box is justified inside its alignment container along the appropriate axis.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/justify-self
             */
            self?: 'auto' | 'normal' | 'stretch' | Baseline_position | Self_position | `${Overflow_position} ${Self_position}` | Common;
        };
        /**
         * resets all of an element's properties except unicode-bidi, direction, and CSS Custom Properties.
         * It can set properties to their initial or inherited values, or to the values specified in another cascade layer or stylesheet origin.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/all
         */
        all?: Common;
        animation?: {
            /**
             * Specifies the composite operation to use when multiple animations affect the same property simultaneously.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-composition
             */
            composition?: Single_animation_composition | Single_animation_composition[][] | Common;
            /**
             * Specifies the amount of time to wait from applying the animation to an element before beginning to perform the animation.
             * The animation can start later, immediately from its beginning, or immediately and partway through the animation.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay
             */
            delay?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            /**
             * Sets whether an animation should play forward, backward, or alternate back and forth between playing the sequence forward and backward.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction
             */
            direction?: Single_animation_direction | Single_animation_direction[][] | Common;
            /**
             * Sets the length of time that an animation takes to complete one cycle.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-duration
             */
            duration?: $mol_style_unit_str<$mol_style_unit_time> | $mol_style_unit_str<$mol_style_unit_time>[][] | Common;
            /**
             * Sets how a CSS animation applies styles to its target before and after its execution.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode
             */
            fillMode?: Single_animation_fill_mode | Single_animation_fill_mode[][] | Common;
            /**
             * Sets the number of times an animation sequence should be played before stopping.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-iteration-count
             */
            iterationCount?: Single_animation_iteration_count | Single_animation_iteration_count[][] | Common;
            /**
             * Specifies the names of one or more keyframes at-rules that describe the animation to apply to an element.
             * Multiple keyframe at-rules are specified as a comma-separated list of names.
             * If the specified name does not match any keyframe at-rule, no properties are animated.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-name
             */
            name?: 'none' | string & {} | ('none' | string & {})[][] | Common;
            /**
             * Sets whether an animation is running or paused.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state
             */
            playState?: Single_animation_play_state | Single_animation_play_state[][] | Common;
            /**
             * Sets how an animation progresses through the duration of each cycle.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/animation-timing-function
             */
            timingFunction?: Easing_function | Easing_function[][] | Common;
        };
        /**
         * Used to control native appearance of UI controls, that are based on operating system's theme.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/appearance
         */
        appearance?: 'none' | 'auto' | Compat_auto | Compat_special | Common;
        /**
         * Sets a preferred aspect ratio for the box, which will be used in the calculation of auto sizes and some other layout functions.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/aspect-ratio
         */
        aspectRatio?: 'auto' | number | `${number} / ${number}`;
        /**
         * lets you apply graphical effects such as blurring or color shifting to the area behind an element.
         * Because it applies to everything behind the element, to see the effect you must make the element
         * or its background at least partially transparent.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
         */
        backdropFilter: $mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'> | ($mol_style_func<$mol_style_func_filter> | $mol_style_func<'url'>)[][] | 'none' | Common;
        /**
         * Sets whether the back face of an element is visible when turned towards the user.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/backface-visibility
         */
        backfaceVisibility: 'visible' | 'hidden' | Common;
        /**
         * How the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
         * @see https://developer.mozilla.org/ru/docs/Web/CSS/justify-content
         */
        justifyContent?: 'start' | 'end' | 'flex-start' | 'flex-end' | 'left' | 'right' | 'space-between' | 'space-around' | 'space-evenly' | 'normal' | 'stretch' | 'center' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/gap */
        gap?: Length | readonly [Length, Length] | Common;
        /**
         * All background style properties.
         * @see https://developer.mozilla.org/ru/docs/Web/CSS/background
         * */
        background?: 'none' | {
            /**
             * Sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment
             */
            attachment?: 'scroll' | 'fixed' | 'local' | ('scroll' | 'fixed' | 'local')[][] | Common;
            /**
             * Sets how an element's background images should blend with each other and with the element's background color.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-blend-mode
             */
            blendMode?: Mix_blend_mode | Mix_blend_mode[][] | Common;
            /**
             * Sets whether an element's background extends underneath its border box, padding box, or content box.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/background-clip
             */
            clip?: Box | Box[][] | Common;
            /**
             * Background color.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/background-color
             */
            color?: $mol_style_properties_color | Common;
            /**
             * Background images.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/background-image
             */
            image?: readonly (readonly [$mol_style_func<$mol_style_func_image> | string & {}])[] | 'none' | Common;
            /**
             * How background images are repeated.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/background-repeat
             */
            repeat?: Repeat | [Repeat, Repeat] | Common;
            /** @see https://developer.mozilla.org/ru/docs/Web/CSS/background-position */
            position?: 'left' | 'right' | 'top' | 'bottom' | 'center' | Common;
            /** @see https://developer.mozilla.org/ru/docs/Web/CSS/background-size */
            size?: (BG_size | [BG_size] | [BG_size, BG_size])[];
        };
        /** @see https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow */
        box?: {
            /**
             * Shadow effects around an element's frame.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/box-shadow
             */
            shadow?: readonly ([
                ...[inset: 'inset'] | [],
                x: Length,
                y: Length,
                blur: Length,
                spread: Length,
                color: $mol_style_properties_color
            ] | {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: $mol_style_properties_color;
            })[] | 'none' | Common;
        };
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/rx */
        rx?: Length | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/ry */
        ry?: Length | Common;
        /** @see https://developer.mozilla.org/ru/docs/Web/CSS/font */
        font?: {
            /**
             * Whether a font should be styled.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/font-style
             */
            style?: 'normal' | 'italic' | Common;
            /**
             * Weight (or boldness) of the font.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/font-weight
             */
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            /**
             * Size of the font. Changing the font size also updates the sizes of the font size-relative length units.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/font-size
             */
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            /**
             * Prioritized list of one or more font family names and/or generic family names.
             * @see https://developer.mozilla.org/ru/docs/Web/CSS/font-family
             */
            family?: string & {} | 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        /**
         * Foreground color value of text and text decorations, and sets the `currentcolor` value.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/color
         */
        color?: $mol_style_properties_color | Common;
        /**
         * Whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/display
         */
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        /**
         * What to do when an element's content is too big to fit in its block formatting context. It is a shorthand for `overflowX` and `overflowY`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow
         */
        overflow?: Overflow | {
            /**
             * What shows when content overflows a block-level element's left and right edges.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x
             */
            x?: Overflow | Common;
            /**
             * What shows when content overflows a block-level element's top and bottom edges.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y
             */
            y?: Overflow | Common;
            /**
             * A way to opt out of the browser's scroll anchoring behavior, which adjusts scroll position to minimize content shifts.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-anchor
             */
            anchor?: 'auto' | 'none' | Common;
        };
        /**
         * Indicate that an element and its contents are, as much as possible, independent of the rest of the document tree. This allows the browser to recalculate layout, style, paint, size, or any combination of them for a limited area of the DOM and not the entire page, leading to obvious performance benefits.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/contain
         */
        contain?: 'none' | 'strict' | 'content' | ContainRule | readonly ContainRule[] | Common;
        /**
         * How white space inside an element is handled.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/white-space
         */
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling */
        webkitOverflowScrolling?: 'auto' | 'touch' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color */
        scrollbar?: {
            /**
             * Color of thumb and track of scrollbars.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-color
             */
            color?: readonly [$mol_style_properties_color, $mol_style_properties_color] | 'auto' | Common;
            /**
             * Maximum thickness of scrollbars.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scrollbar-width
             */
            width?: 'auto' | 'thin' | 'none' | Common;
        };
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-behavior */
        scroll?: {
            /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align */
            snap?: {
                /**
                 * How strictly snap points are enforced on the scroll container in case there is one.
                 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
                 */
                type: 'none' | Snap_axis | readonly [Snap_axis, 'mandatory' | 'proximity'] | Common;
                /**
                 * Whether the scroll container is allowed to "pass over" possible snap positions.
                 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-stop
                 */
                stop: 'normal' | 'always' | Common;
                /**
                 * The box’s snap position as an alignment of its snap area (as the alignment subject) within its snap container’s snapport (as the alignment container). The two values specify the snapping alignment in the block axis and inline axis, respectively. If only one value is specified, the second value defaults to the same value.
                 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-align
                 */
                align: Span_align | readonly [Span_align, Span_align] | Common;
            };
            /**
             * Offsets for the optimal viewing region of the scrollport: the region used as the target region for placing things in view of the user.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-padding
             */
            padding?: Directions<Length | 'auto'>;
        };
        /**
         * Element's width. By default, it sets the width of the content area, but if `boxSizing` is set to `border-box`, it sets the width of the border area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/width
         */
        width?: Size;
        /**
         * Minimum width of an element. It prevents the used value of the `width` property from becoming smaller than the value specified for `minWidth`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-width
         */
        minWidth?: Size;
        /**
         * Maximum width of an element. It prevents the used value of the `width` property from becoming larger than the value specified for `maxWidth`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-width
         */
        maxWidth?: Size;
        /**
         * Height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/height
         */
        height?: Size;
        /**
         * Minimum height of an element. It prevents the used value of the `height` property from becoming smaller than the value specified for `minHeight`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/min-height
         */
        minHeight?: Size;
        /**
         * Maximum height of an element. It prevents the used value of the `height` property from becoming larger than the value specified for `maxHeight`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/max-height
         */
        maxHeight?: Size;
        /**
         * Margin area on all four sides of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/margin
         */
        margin?: Directions<Length | 'auto'>;
        /**
         * Padding area on all four sides of an element.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/padding
         */
        padding?: Directions<Length | 'auto'>;
        /**
         * How an element is positioned in a document. The `top`, `right`, `bottom`, and `left` properties determine the final location of positioned elements.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/position
         */
        position?: 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/top */
        top?: Length | 'auto' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/right */
        right?: Length | 'auto' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/bottom */
        bottom?: Length | 'auto' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/left */
        left?: Length | 'auto' | Common;
        /** @see https://developer.mozilla.org/en-US/docs/Web/CSS/border */
        border?: Borders<{
            /**
             * Rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
             */
            radius?: Length | [Length, Length];
            /**
             * Line style for all four sides of an element's border.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius
             */
            style?: 'none' | 'hidden' | 'dotted' | 'dashed' | 'solid' | 'double' | 'groove' | 'ridge' | 'inset' | 'outset' | Common;
            /**
             * Color of element's border.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-color
             */
            color?: $mol_style_properties_color | Common;
            /**
             * Width of element's border.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/border-width
             */
            width?: Length | Common;
        }>;
        /**
         * How a flex item will grow or shrink to fit the space available in its flex container. It is a shorthand for `flexGrow`, `flexShrink`, and `flexBasis`.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex
         */
        flex?: 'none' | 'auto' | {
            /**
             * Growing weight of the flex item. Negative values are considered invalid. Defaults to 1 when omitted.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow
             */
            grow?: number | Common;
            /**
             * Shrinking weight of the flex item. Negative values are considered invalid. Defaults to 1 when omitted.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink
             */
            shrink?: number | Common;
            /**
             * Preferred size of the flex item. A value of 0 must have a unit to avoid being interpreted as a flexibility. Defaults to 0 when omitted.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
             */
            basis?: Size | Common;
            /**
             * How flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis
             */
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse' | Common;
            /**
             * Whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
             * @see https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap
             */
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        container?: {
            name?: string;
            type?: Container_type | readonly Container_type[];
        };
        /**
         * Z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/z-index
         */
        zIndex: number | Common;
        /**
         * Degree to which content behind an element is hidden, and is the opposite of transparency.
         * @see https://developer.mozilla.org/en-US/docs/Web/CSS/opacity
         */
        opacity: number | Common;
    }
    type Container_type = 'normal' | 'size' | 'inline-size' | 'scroll-state' | 'anchored';
    export {};
}

declare namespace $ {
    /** Create record of CSS variables. */
    function $mol_style_prop<Keys extends string[]>(prefix: string, keys: Keys): Record<Keys[number], $mol_style_func<"var", unknown>>;
}

declare namespace $ {
    /**
     * Theme css variables
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_textarea_demo
     */
    const $mol_theme: Record<"image" | "line" | "text" | "hue" | "back" | "hover" | "card" | "current" | "special" | "control" | "shade" | "focus" | "field" | "spirit" | "hue_spread", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    /**
     * Gap in CSS
     * @see https://page.hyoo.ru/#!=msdb74_bm7nsq
     */
    let $mol_gap: Record<"text" | "block" | "blur" | "page" | "space" | "round" | "emoji", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_func_name(this: $, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element | DocumentFragment, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    /**
     * Recursive `Partial`.
     *
     * 	let props : $mol_type_partial_deep< HTMLElement > = { style : { display : 'block' } }
     */
    type $mol_type_partial_deep<Val> = Val extends object ? Val extends Function ? Val : {
        [field in keyof Val]?: $mol_type_partial_deep<Val[field]> | undefined;
    } : Val;
}

declare namespace $ {
    let $mol_jsx_prefix: string;
    let $mol_jsx_crumbs: string;
    let $mol_jsx_booked: null | Set<string>;
    let $mol_jsx_document: $mol_jsx.JSX.ElementClass['ownerDocument'];
    const $mol_jsx_frag = "";
    /**
     * JSX adapter that makes DOM tree.
     * Generates global unique ids for every DOM-element by components tree with ids.
     * Ensures all local ids are unique.
     * Can reuse an existing nodes by GUIDs when used inside [`mol_jsx_attach`](https://github.com/hyoo-ru/mam_mol/tree/master/jsx/attach).
     */
    function $mol_jsx<Props extends $mol_jsx.JSX.IntrinsicAttributes, Children extends Array<Node | string>>(Elem: string | ((props: Props, ...children: Children) => Element), props: Props, ...childNodes: Children): Element | DocumentFragment;
    namespace $mol_jsx.JSX {
        interface Element extends HTMLElement {
            class?: string;
        }
        interface ElementClass {
            attributes: {};
            ownerDocument: Pick<Document, 'getElementById' | 'createElementNS' | 'createDocumentFragment'>;
            childNodes: Array<Node | string>;
            valueOf(): Element;
        }
        type OrString<Dict> = {
            [key in keyof Dict]: Dict[key] | string;
        };
        /** Props for html elements */
        type IntrinsicElements = {
            [key in keyof ElementTagNameMap]?: $.$mol_type_partial_deep<OrString<Element & IntrinsicAttributes & ElementTagNameMap[key]>>;
        };
        /** Additional undeclared props */
        interface IntrinsicAttributes {
            id?: string;
            xmlns?: string;
        }
        interface ElementAttributesProperty {
            attributes: {};
        }
        interface ElementChildrenAttribute {
        }
    }
}

declare namespace $ {
    const $mol_ambient_ref: unique symbol;
    /** @deprecated use $ instead */
    type $mol_ambient_context = $;
    function $mol_ambient(this: $ | void, overrides: Partial<$>): $;
}

declare namespace $ {
    /**
     * Proxy that delegates all to lazy returned target.
     *
     * 	$mol_delegate( Array.prototype , ()=> fetch_array() )
     */
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    const $mol_key_handle: unique symbol;
    const $mol_key_store: WeakMap<object, string>;
}

declare namespace $ {
    class $mol_object2 {
        static $: $;
        [Symbol.toStringTag]: string;
        [$mol_ambient_ref]: $;
        get $(): $;
        set $(next: $);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static [Symbol.toPrimitive](): any;
        static toString(): any;
        static toJSON(): any;
        static [$mol_key_handle](): any;
        destructor(): void;
        static destructor(): void;
        [Symbol.dispose](): void;
        toString(): string;
    }
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<This extends typeof $mol_object>(this: This, config: Partial<InstanceType<This>>): InstanceType<This>;
    }
}

declare namespace $ {
    /** Generates unique identifier. */
    function $mol_guid(length?: number, exists?: (id: string) => boolean): string;
}

declare namespace $ {
    /** Special status statuses. */
    enum $mol_wire_cursor {
        /** Update required. */
        stale = -1,
        /** Some of (transitive) pub update required. */
        doubt = -2,
        /** Actual state but may be dropped. */
        fresh = -3,
        /** State will never be changed. */
        final = -4
    }
}

declare namespace $ {
    /**
     * Collects subscribers in compact array. 28B
     */
    class $mol_wire_pub extends Object {
        constructor(id?: string);
        [Symbol.toStringTag]: string;
        data: unknown[];
        static get [Symbol.species](): ArrayConstructor;
        /**
         * Index of first subscriber.
         */
        protected sub_from: number;
        /**
         * All current subscribers.
         */
        get sub_list(): readonly $mol_wire_sub[];
        /**
         * Has any subscribers or not.
         */
        get sub_empty(): boolean;
        /**
         * Subscribe subscriber to this publisher events and return position of subscriber that required to unsubscribe.
         */
        sub_on(sub: $mol_wire_pub, pub_pos: number): number;
        /**
         * Unsubscribe subscriber from this publisher events by subscriber position provided by `on(pub)`.
         */
        sub_off(sub_pos: number): void;
        /**
         * Called when last sub was unsubscribed.
         **/
        reap(): void;
        /**
         * Autowire this publisher with current subscriber.
         **/
        promote(): void;
        /**
         * Enforce actualization. Should not throw errors.
         */
        fresh(): void;
        /**
         * Allow to put data to caches in the subtree.
         */
        complete(): void;
        get incompleted(): boolean;
        /**
         * Notify subscribers about self changes.
         */
        emit(quant?: $mol_wire_cursor): void;
        /**
         * Moves peer from one position to another. Doesn't clear data at old position!
         */
        peer_move(from_pos: number, to_pos: number): void;
        /**
         * Updates self position in the peer.
         */
        peer_repos(peer_pos: number, self_pos: number): void;
    }
}

declare namespace $ {
    /** Generic subscriber interface */
    interface $mol_wire_sub extends $mol_wire_pub {
        temp: boolean;
        pub_list: $mol_wire_pub[];
        /**
         * Begin auto wire to publishers.
         * Returns previous auto subscriber that must me transfer to the `end`.
         */
        track_on(): $mol_wire_sub | null;
        /**
         * Returns next auto wired publisher. It can be easely repormoted.
         * Or promotes next publisher to auto wire its togeter.
         * Must be used only between `track_on` and `track_off`.
         */
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        pub_off(pub_pos: number): void;
        /**
         * Unsubscribes from unpromoted publishers.
         */
        track_cut(sub: $mol_wire_pub | null): void;
        /**
         * Ends auto wire to publishers.
         */
        track_off(sub: $mol_wire_pub | null): void;
        /**
         * Receive notification about publisher changes.
         */
        absorb(quant: $mol_wire_cursor, pos: number): void;
        /**
         * Unsubscribes from all publishers.
         */
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_wire_auto_sub: $mol_wire_sub | null;
    /**
     * When fulfilled, all publishers are promoted to this subscriber on access to its.
     */
    function $mol_wire_auto(next?: $mol_wire_sub | null): $mol_wire_sub | null;
    /**
     * Affection queue. Used to prevent accidental stack overflow on emit.
     */
    const $mol_wire_affected: ($mol_wire_sub | number)[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    const $mol_dev_format_head: unique symbol;
    const $mol_dev_format_body: unique symbol;
    function $mol_dev_format_native(obj: any): any[];
    function $mol_dev_format_auto(obj: any): any[];
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    let $mol_dev_format_span: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    /**
     * Publisher that can auto collect other publishers. 32B
     *
     * 	P1 P2 P3 P4 S1 S2 S3
     * 	^           ^
     * 	pubs_from   subs_from
     */
    class $mol_wire_pub_sub extends $mol_wire_pub implements $mol_wire_sub {
        protected pub_from: number;
        protected cursor: $mol_wire_cursor;
        get temp(): boolean;
        get pub_list(): $mol_wire_pub[];
        track_on(): $mol_wire_sub | null;
        promote(): void;
        track_next(pub?: $mol_wire_pub): $mol_wire_pub | null;
        track_off(sub: $mol_wire_sub | null): void;
        pub_off(sub_pos: number): void;
        destructor(): void;
        track_cut(): void;
        complete(): void;
        complete_pubs(): void;
        absorb(quant?: $mol_wire_cursor, pos?: number): void;
        [$mol_dev_format_head](): any[];
        /**
         * Is subscribed to any publisher or not.
         */
        get pub_empty(): boolean;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        static promise: Promise<void> | null;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_promise_like(val: any): val is Promise<any>;
}

declare namespace $ {
    /**
     * Suspendable task with support both sync/async api.
     *
     * 	A1 A2 A3 A4 P1 P2 P3 P4 S1 S2 S3
     * 	^           ^           ^
     * 	args_from   pubs_from   subs_from
     **/
    abstract class $mol_wire_fiber<Host, Args extends readonly unknown[], Result> extends $mol_wire_pub_sub {
        readonly task: (this: Host, ...args: Args) => Result;
        readonly host?: Host | undefined;
        static warm: boolean;
        static planning: Set<$mol_wire_fiber<any, any, any>>;
        static reaping: Set<$mol_wire_fiber<any, any, any>>;
        static plan_task: $mol_after_tick | null;
        static plan(): void;
        static sync(): void;
        cache: Result | Error | Promise<Result | Error>;
        get args(): Args;
        result(): Result | undefined;
        get incompleted(): boolean;
        field(): string;
        constructor(id: string, task: (this: Host, ...args: Args) => Result, host?: Host | undefined, args?: Args);
        plan(): this;
        reap(): void;
        toString(): string;
        toJSON(): string;
        [$mol_dev_format_head](): any[];
        [$mol_dev_format_body](): null;
        get $(): any;
        emit(quant?: $mol_wire_cursor): void;
        fresh(): this | undefined;
        refresh(): void;
        abstract put(next: Result | Error | Promise<Result | Error>): Result | Error | Promise<Result | Error>;
        /**
         * Synchronous execution. Throws Promise when waits async task (SuspenseAPI provider).
         * Should be called inside SuspenseAPI consumer (ie fiber).
         */
        sync(): Awaited<Result>;
        /**
         * Asynchronous execution.
         * It's SuspenseAPI consumer. So SuspenseAPI providers can be called inside.
         */
        async_raw(): Promise<Result>;
        async(): Promise<Result> & {
            destructor(): void;
        };
        step(): Promise<null>;
        destructor(): void;
    }
}

declare namespace $ {
    /** Returns string key for any value. */
    function $mol_key<Value>(value: Value): string;
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    let $mol_compare_deep_cache: WeakMap<any, WeakMap<any, boolean>>;
    /**
     * Deeply compares two values. Returns true if equal.
     * Define `Symbol.toPrimitive` to customize.
     */
    function $mol_compare_deep<Value>(left: Value, right: Value): boolean;
}

declare namespace $ {
    /** Logger event data */
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        /** Time of event creation */
        time?: string;
        /** Place of event creation */
        place: unknown;
        /** Short description of event */
        message: string;
    } & Fields;
    /** Logger function */
    type $mol_log3_logger<Fields, Res = void> = (this: $, event: $mol_log3_event<Fields>) => Res;
    /** Log begin of some task */
    let $mol_log3_come: $mol_log3_logger<{}>;
    /** Log end of some task */
    let $mol_log3_done: $mol_log3_logger<{}>;
    /** Log error */
    let $mol_log3_fail: $mol_log3_logger<{}>;
    /** Log warning message */
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    /** Log some generic event */
    let $mol_log3_rise: $mol_log3_logger<{}>;
    /** Log begin of log group, returns func to close group */
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    /** Log begin of collapsed group only when some logged inside, returns func to close group */
    function $mol_log3_area_lazy(this: $, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    /**
     * Extracts keys from `Input` which values extends `Upper` and extendable by `Lower`.
     *
     * 	type MathConstants = $mol_type_keys_extract< Math , number > // "E" | "PI" ...
     */
    type $mol_type_keys_extract<Input, Upper, Lower = never> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? [
            Lower
        ] extends [Input[Field]] ? Field : never : never;
    }[keyof Input];
}

declare namespace $ {
    function $mol_log3_web_make(level: $mol_type_keys_extract<Console, Function>, color: string): (this: $, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    /** One-shot fiber */
    class $mol_wire_task<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static getter<Host, Args extends readonly unknown[], Result>(task: (this: Host, ...args: Args) => Result): (host: Host, args: Args) => $mol_wire_task<Host, Args, Result>;
        get temp(): boolean;
        complete(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
        destructor(): void;
    }
}

declare namespace $ {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber.
     */
    function $mol_wire_method<Host extends object, Args extends readonly any[]>(host: Host, field: PropertyKey, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: Host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    /**
     * Returns `Tuple` without first element.
     *
     * 	$mol_type_tail<[ 1 , 2 , 3 ]> // [ 2, 3 ]
     */
    type $mol_type_tail<Tuple extends readonly any[]> = ((...tail: Tuple) => any) extends ((head: any, ...tail: infer Tail) => any) ? Tail : never;
}

declare namespace $ {
    /**
     * Returns last element of `Tuple`.
     *
     * 	$mol_type_tail<[ 1 , 2 , 3 ]> // 3
     */
    type $mol_type_foot<Tuple extends readonly any[]> = Tuple['length'] extends 0 ? never : Tuple[$mol_type_tail<Tuple>['length']];
}

declare namespace $ {
    function $mol_fail_catch(error: unknown): boolean;
}

declare namespace $ {
    function $mol_try<Result>(handler: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_try_web<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {
    function $mol_fail_log(error: unknown): boolean;
}

declare namespace $ {
    /** Long-living fiber. */
    class $mol_wire_atom<Host, Args extends readonly unknown[], Result> extends $mol_wire_fiber<Host, Args, Result> {
        static solo<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result): $mol_wire_atom<Host, Args, Result>;
        static plex<Host, Args extends readonly unknown[], Result>(host: Host, task: (this: Host, ...args: Args) => Result, key: Args[0]): $mol_wire_atom<Host, Args, Result>;
        static watching: Set<$mol_wire_atom<any, any, any>>;
        static watcher: $mol_after_frame | null;
        static watch(): void;
        watch(): void;
        /**
         * Update atom value through another temp fiber.
         */
        resync(args: Args): Error | Result | Promise<Error | Result>;
        once(): Awaited<Result>;
        channel(): ((next?: $mol_type_foot<Args>) => Awaited<Result>) & {
            atom: $mol_wire_atom<Host, Args, Result>;
        };
        destructor(): void;
        put(next: Result | Error | Promise<Result | Error>): Error | Result | Promise<Error | Result>;
    }
}

declare namespace $ {
    /** Decorates solo object channel to [mol_wire_atom](../atom/atom.ts). */
    export function $mol_wire_solo<Args extends any[]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): TypedPropertyDescriptor<(...args: First_optional<Args>) => any>;
    type First_optional<Args extends any[]> = Args extends [] ? [] : [Args[0] | undefined, ...$mol_type_tail<Args>];
    export {};
}

declare namespace $ {
    /** Reactive memoizing multiplexed property decorator. */
    function $mol_wire_plex<Args extends [any, ...any[]]>(host: object, field: string, descr?: TypedPropertyDescriptor<(...args: Args) => any>): {
        value: (this: typeof host, ...args: Args) => any;
        enumerable?: boolean;
        configurable?: boolean;
        writable?: boolean;
        get?: (() => (...args: Args) => any) | undefined;
        set?: ((value: (...args: Args) => any) => void) | undefined;
    };
}

declare namespace $ {
    /**
     * Reactive memoizing solo property decorator from [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem
     * name(next?: string) {
     * 	return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    let $mol_mem: typeof $mol_wire_solo;
    /**
     * Reactive memoizing multiplexed property decorator [mol_wire](../wire/README.md)
     * @example
     * '@' $mol_mem_key
     * name(id: number, next?: string) {
     *  return next ?? 'default'
     * }
     * @see https://mol.hyoo.ru/#!section=docs/=qxmh6t_sinbmb
     */
    let $mol_mem_key: typeof $mol_wire_plex;
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(): {
            width: number;
            height: number;
        };
        static resizes(next?: Event): Event | undefined;
    }
}

declare namespace $ {
    function $mol_guard_defined<T>(value: T): value is NonNullable<T>;
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[], notify?: 'notify'): Element[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    /**
    * Key names code for hotkey
    * @see [mol_hotkey](../../hotkey/hotkey.view.ts)
    */
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): (obj: object, name: PropertyKey, descr?: TypedPropertyDescriptor<any>) => TypedPropertyDescriptor<any>;
        static get field(): <Host extends object, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr?: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    /** Run code without state changes */
    function $mol_wire_probe<Value>(task: () => Value, def?: Value): Value | undefined;
}

declare namespace $ {
    /**
     * Real-time refresh current atom.
     * Don't use if possible. May reduce performance.
     */
    function $mol_wire_watch(): void;
}

declare namespace $ {
    /**
     * Returns closure that returns constant value.
     * @example
     * const rnd = $mol_const( Math.random() )
     */
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    /**
     * Disable reaping of current subscriber
     */
    function $mol_wire_solid(): void;
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }, passive?: boolean): void;
}

declare namespace $ {
    function $mol_error_message(this: $, error: unknown): string;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    /** Convert a pseudo-synchronous (Suspense API) API to an explicit asynchronous one (for integrating with external systems). */
    export function $mol_wire_async<Host extends object>(obj: Host): ObjectOrFunctionResultPromisify<Host>;
    type FunctionResultPromisify<Some> = Some extends (...args: infer Args) => infer Res ? Res extends PromiseLike<unknown> ? Some : (...args: Args) => Promise<Res> : Some;
    type MethodsResultPromisify<Host extends Object> = {
        [K in keyof Host]: FunctionResultPromisify<Host[K]>;
    };
    type ObjectOrFunctionResultPromisify<Some> = (Some extends (...args: any) => unknown ? FunctionResultPromisify<Some> : {}) & (Some extends Object ? MethodsResultPromisify<Some> : Some);
    export {};
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    /**
     * Picks keys from `Input` which values extends `Upper`.
     *
     * 	type MathConstants = $mol_type_pick< Math , number > // { E , PI , ... }
     */
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
}

/** @jsx $mol_jsx */
declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean | null;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    /**
     * The base class for all visual components. It provides the infrastructure for reactive lazy rendering, handling exceptions.
     * @see https://mol.hyoo.ru/#!section=docs/=vv2nig_s5zr0f
     */
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        static roots(): $mol_view[];
        static auto(): void;
        title(): string;
        hint(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly $mol_view_content[];
        sub_visible(): readonly $mol_view_content[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): {
            width: number;
            height: number;
            left: number;
            right: number;
            top: number;
            bottom: number;
        } | null;
        dom_id(): string;
        dom_node_external(next?: Element): Element;
        dom_node(next?: Element): Element;
        dom_final(): Element | undefined;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        auto(): any;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        static _view_names?: Map<string, string[]>;
        static view_names(suffix: string): string[];
        view_names_owned(): string[];
        view_names(): Set<string>;
        theme(next?: string | null): string | null | undefined;
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [x: string]: (event: Event) => Promise<void>;
        };
        plugins(): readonly $mol_view[];
        [$mol_dev_format_head](): any[];
        /** Deep search view by predicate. */
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        /** Renders path of views to DOM. */
        force_render(path: Set<$mol_view>): void;
        /** Renders view to DOM and scroll to it. */
        ensure_visible(view: $mol_view, align?: ScrollLogicalPosition): void;
        bring(): void;
        destructor(): void;
    }
    type $mol_view_all = $mol_type_pick<$, typeof $mol_view>;
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | `:not(${string})` | `:nth-child(${string})` | `:nth-last-child(${string})` | `:nth-of-type(${string})` | `:nth-last-of-type(${string})` | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':placeholder-shown' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    /** Returns error type, that don't match to normal value. */
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type Attrs<View extends $mol_view, Config, Attrs = ReturnType<View['attr']>> = {
        [name in keyof Attrs]?: {
            [val in keyof Config[Extract<name, keyof Config>]]: $mol_style_guard<View, Config[Extract<name, keyof Config>][val]>;
        };
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    type Keys<View extends $mol_view> = '>' | '@' | keyof $mol_style_properties | $mol_style_pseudo_element | $mol_style_pseudo_class | $mol_type_keys_extract<View, () => $mol_view> | `$${string}`;
    export type $mol_style_guard<View extends $mol_view, Config> = {
        [key in Keys<View>]?: unknown;
    } & $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? $mol_style_properties[key] : key extends '>' | $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends ('@media' | '@container') ? Medias<View, Config[key]> : key extends '@starting-style' ? $mol_style_guard<View, Config[key]> : key extends `[${string}]` ? {
            [val in keyof Config[key]]: $mol_style_guard<View, Config[key][val]>;
        } : key extends `--${string}` ? any : key extends keyof $ ? $mol_style_guard<InstanceType<Extract<$[key], typeof $mol_view>>, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : key extends `$${string}` ? $mol_type_error<'Unknown View Class'> : $mol_type_error<'Unknown CSS Property'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    /**
     * CSS in TS.
     * Statically typed CSS style sheets. Following samples show which CSS code are generated from TS code.
     * @see https://mol.hyoo.ru/#!section=docs/=xwq9q5_f966fg
     */
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {

	export class $mol_scroll extends $mol_view {
		tabindex( ): number
		event_scroll( next?: any ): any
		scroll_top( next?: number ): number
		scroll_left( next?: number ): number
		attr( ): ({ 
			'tabindex': ReturnType< $mol_scroll['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		event( ): ({ 
			scroll( next?: ReturnType< $mol_scroll['event_scroll'] > ): ReturnType< $mol_scroll['event_scroll'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=scroll.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Scrolling pane.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_scroll_demo
     */
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number, cache?: 'cache'): number;
        scroll_left(next?: number, cache?: 'cache'): number;
        event_scroll(next?: Event): void;
        minimal_height(): number;
        minimal_width(): number;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    /**
     * Fails if `Actual` type is not subtype of `Expected`.
     */
    type $mol_type_enforce<Actual extends Expected, Expected> = Actual;
}

declare namespace $ {
    /** Plugin is component without its own DOM element, but instead uses the owner DOM element */
    class $mol_plugin extends $mol_view {
        dom_node_external(next?: Element): Element;
        render(): void;
    }
}

declare namespace $ {

	type $mol_view__dom_name_mol_page_1 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_2 = $mol_type_enforce<
		ReturnType< $mol_page['title_content'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_mol_page_3 = $mol_type_enforce<
		ReturnType< $mol_page['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__minimal_height_mol_page_4 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_view['minimal_height'] >
	>
	type $mol_view__dom_name_mol_page_5 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_6 = $mol_type_enforce<
		ReturnType< $mol_page['head'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type __mol_page_7 = $mol_type_enforce<
		Parameters< $mol_page['body_scroll_top'] >[0]
		,
		Parameters< ReturnType< $mol_page['Body'] >['scroll_top'] >[0]
	>
	type $mol_view__sub_mol_page_8 = $mol_type_enforce<
		ReturnType< $mol_page['body'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_scroll__sub_mol_page_9 = $mol_type_enforce<
		ReturnType< $mol_page['body_content'] >
		,
		ReturnType< $mol_scroll['sub'] >
	>
	type $mol_view__dom_name_mol_page_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_view__sub_mol_page_11 = $mol_type_enforce<
		ReturnType< $mol_page['foot'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_page extends $mol_view {
		tabindex( ): number
		Logo( ): any
		title_content( ): readonly(any)[]
		Title( ): $mol_view
		tools( ): readonly($mol_view_content)[]
		Tools( ): $mol_view
		head( ): readonly(any)[]
		Head( ): $mol_view
		body_scroll_top( next?: ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] > ): ReturnType< ReturnType< $mol_page['Body'] >['scroll_top'] >
		body( ): readonly($mol_view)[]
		Body_content( ): $mol_view
		body_content( ): readonly(any)[]
		Body( ): $mol_scroll
		foot( ): readonly($mol_view)[]
		Foot( ): $mol_view
		dom_name( ): string
		attr( ): ({ 
			'tabIndex': ReturnType< $mol_page['tabindex'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=page.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    /**
     * Decorates method to fiber to ensure it is executed only once inside other fiber from [mol_wire](../wire/README.md)
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    let $mol_action: typeof $mol_wire_method;
}

declare namespace $ {
    /** State of arguments like `#foo=bar/xxx` or `?foo=bar&xxx` */
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static href_normal(): string;
        static href_absolute(): string;
        static dict(next?: {
            [key: string]: string | null;
        }): Readonly<{
            [key: string]: string;
        }>;
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: Record<string, string | null>): string;
        static prolog: string;
        static separator: string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static commit(): void;
        static go(next: {
            [key: string]: string | null;
        }): void;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: Record<string, string | null>): string;
    }
}

declare namespace $ {
    class $mol_media extends $mol_object2 {
        static match(query: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_storage extends $mol_object2 {
        /** Is storage a long term. */
        static persisted(next?: boolean): boolean;
        /** Total storage quota in bytes. */
        static total(): number;
        /** Total storage usage in bytes. */
        static used(): number;
        /** Minimum available free space in bytes. */
        static free(): number;
        /** Fulfillness of storage. */
        static portion(): number;
        /**
         * Fulfillness logarithmic level.
         * `0` - empty
         * `1` - half free
         * `2` - quart free
         * `Infinity` - fulfilled
         */
        static level(): number;
    }
}

declare namespace $ {
    let $mol_mem_persist: typeof $mol_wire_solid;
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_wire_probe;
}

declare namespace $ {
    /**
     * Convert asynchronous (promise-based) API to synchronous by wrapping function and method calls in a fiber.
     * @see https://mol.hyoo.ru/#!section=docs/=1fcpsq_1wh0h2
     */
    export function $mol_wire_sync<Host extends object>(obj: Host): ObjectOrFunctionResultAwaited<Host>;
    type FunctionResultAwaited<Some> = Some extends (...args: infer Args) => infer Res ? (...args: Args) => Awaited<Res> : Some;
    type ConstructorResultAwaited<Some> = Some extends new (...args: infer Args) => infer Res ? new (...args: Args) => Res : {};
    type MethodsResultAwaited<Host extends Object> = {
        [K in keyof Host]: FunctionResultAwaited<Host[K]>;
    };
    type ObjectOrFunctionResultAwaited<Some> = (Some extends (...args: any) => unknown ? FunctionResultAwaited<Some> : {}) & (Some extends Object ? MethodsResultAwaited<Some> & ConstructorResultAwaited<Some> : Some);
    export {};
}

declare namespace $ {
    function $mol_wait_user_async(this: $): Promise<unknown>;
    function $mol_wait_user(this: $): unknown;
}

declare namespace $ {
    /** State of time moment */
    class $mol_state_time extends $mol_object {
        static task(precision: number, reset?: null): $mol_after_timeout | $mol_after_frame;
        static now(precision: number): number;
    }
}

declare namespace $ {
    class $mol_storage_web extends $mol_storage {
        static native(): StorageManager;
        static persisted(next?: boolean, cache?: 'cache'): boolean;
        static estimate(): StorageEstimate;
        static total(): number;
        static used(): number;
        static free(): number;
        static portion(): number;
        static dir(): FileSystemDirectoryHandle;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static changes(next?: StorageEvent): StorageEvent | undefined;
        static value<Value>(key: string, next?: Value | null): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    /**
     * Switcher between light/dark themes (usually for `mol_theme_auto` plugin).
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_lights_demo
     */
    function $mol_lights(this: $, next?: boolean): boolean;
}

declare namespace $ {

	export class $mol_theme_auto extends $mol_plugin {
		dark( ): string
		theme( ): ReturnType< $mol_theme_auto['dark'] >
		light( ): string
		attr( ): ({ 
			'mol_theme': ReturnType< $mol_theme_auto['theme'] >,
		}) 
	}
	
}

//# sourceMappingURL=auto.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * The [plugin](../../plugin/readme.md) which defines theme based on [mol_lights](../../lights/readme.md).
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_lights_demo
     */
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): string;
    }
}

declare namespace $ {
    /**
     * Z-index values for layers
     * https://page.hyoo.ru/#!=xthcpx_wqmiba
     */
    let $mol_layer: Record<"float" | "hover" | "focus" | "speck" | "popup", $mol_style_func<"var", unknown>>;
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_speck extends $mol_view {
		value( ): any
		theme( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=speck.view.tree.d.ts.map
declare namespace $ {

	type $mol_speck__value_mol_button_1 = $mol_type_enforce<
		ReturnType< $mol_button['error'] >
		,
		ReturnType< $mol_speck['value'] >
	>
	export class $mol_button extends $mol_view {
		event_activate( next?: any ): any
		activate( next?: ReturnType< $mol_button['event_activate'] > ): ReturnType< $mol_button['event_activate'] >
		clicks( next?: any ): any
		event_key_press( next?: any ): any
		key_press( next?: ReturnType< $mol_button['event_key_press'] > ): ReturnType< $mol_button['event_key_press'] >
		disabled( ): boolean
		tab_index( ): number
		hint( ): string
		hint_safe( ): ReturnType< $mol_button['hint'] >
		error( ): string
		enabled( ): boolean
		click( next?: any ): any
		event_click( next?: any ): any
		status( next?: readonly(any)[] ): readonly(any)[]
		event( ): ({ 
			click( next?: ReturnType< $mol_button['activate'] > ): ReturnType< $mol_button['activate'] >,
			dblclick( next?: ReturnType< $mol_button['clicks'] > ): ReturnType< $mol_button['clicks'] >,
			keydown( next?: ReturnType< $mol_button['key_press'] > ): ReturnType< $mol_button['key_press'] >,
		})  & ReturnType< $mol_view['event'] >
		attr( ): ({ 
			'disabled': ReturnType< $mol_button['disabled'] >,
			'role': string,
			'tabindex': ReturnType< $mol_button['tab_index'] >,
			'title': ReturnType< $mol_button['hint_safe'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		Speck( ): $mol_speck
	}
	
}

//# sourceMappingURL=button.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Simple button.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
     */
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): any;
        tab_index(): number;
        error(): string;
        hint_safe(): string;
        sub_visible(): ($mol_view_content | $mol_speck)[];
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_typed extends $mol_button {
		minimal_height( ): number
		minimal_width( ): number
	}
	
}

//# sourceMappingURL=typed.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_button_minor extends $mol_button_typed {
	}
	
}

//# sourceMappingURL=minor.view.tree.d.ts.map
declare namespace $ {
    class $mol_dom_event<EventType extends Event> extends $mol_object {
        readonly native: EventType;
        constructor(native: EventType);
        prevented(next?: boolean): boolean;
        static wrap<EventType extends Event>(event: EventType): $mol_dom_event<EventType>;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_view__sub_mol_check_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $mol_check extends $mol_button_minor {
		checked( next?: boolean ): boolean
		aria_checked( ): string
		aria_role( ): string
		Icon( ): any
		title( ): string
		Title( ): $mol_view
		label( ): readonly(any)[]
		attr( ): ({ 
			'mol_check_checked': ReturnType< $mol_check['checked'] >,
			'aria-checked': ReturnType< $mol_check['aria_checked'] >,
			'role': ReturnType< $mol_check['aria_role'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		sub( ): readonly($mol_view_content)[]
	}
	
}

//# sourceMappingURL=check.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Checkbox UI component. See Variants for more concrete implementations.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_box_demo
     */
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): readonly $mol_view_content[];
        label(): readonly any[];
        aria_checked(): string;
    }
}

declare namespace $ {

	type $mol_check__checked_mol_check_list_1 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_checked'] >
		,
		ReturnType< $mol_check['checked'] >
	>
	type $mol_check__label_mol_check_list_2 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_label'] >
		,
		ReturnType< $mol_check['label'] >
	>
	type $mol_check__enabled_mol_check_list_3 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_enabled'] >
		,
		ReturnType< $mol_check['enabled'] >
	>
	type $mol_check__hint_mol_check_list_4 = $mol_type_enforce<
		ReturnType< $mol_check_list['option_hint'] >
		,
		ReturnType< $mol_check['hint'] >
	>
	type $mol_check__minimal_height_mol_check_list_5 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_check['minimal_height'] >
	>
	export class $mol_check_list extends $mol_view {
		option_checked( id: any, next?: boolean ): boolean
		option_title( id: any): string
		option_label( id: any): readonly(any)[]
		enabled( ): boolean
		option_enabled( id: any): ReturnType< $mol_check_list['enabled'] >
		option_hint( id: any): string
		items( ): readonly($mol_check)[]
		dictionary( ): Record<string, any>
		Option( id: any): $mol_check
		options( ): Record<string, any>
		keys( ): readonly(string)[]
		sub( ): ReturnType< $mol_check_list['items'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * List of checkboxes
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_list_demo
     */
    class $mol_check_list extends $.$mol_check_list {
        options(): {
            [key: string]: string;
        };
        dictionary(next?: Record<string, boolean>): Record<string, boolean>;
        option_checked(id: string, next?: boolean | null): boolean;
        keys(): readonly string[];
        items(): $.$mol_check[];
        option_title(key: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {

	export class $mol_switch extends $mol_check_list {
		value( next?: string ): string
	}
	
}

//# sourceMappingURL=switch.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Buttons which switching the state
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_switch_demo
     */
    class $mol_switch extends $.$mol_switch {
        value(next?: string): string;
        option_checked(key: string, next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_lock extends $mol_object {
        protected promise: null | Promise<void>;
        wait(): Promise<() => void>;
        grab(): () => void;
    }
}

declare namespace $ {
    function $mol_compare_array<Value extends ArrayLike<unknown>>(a: Value, b: Value): boolean;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'utf-16le' | 'utf-16be' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
}

declare namespace $ {
    function $mol_charset_decode(buffer: AllowSharedBufferSource, encoding?: $mol_charset_encoding): string;
}

declare namespace $ {
    /** Temporary buffer. Recursive usage isn't supported. */
    function $mol_charset_buffer(size: number): Uint8Array<ArrayBuffer>;
}

declare namespace $ {
    function $mol_charset_encode(str: string): Uint8Array<ArrayBuffer>;
    function $mol_charset_encode_to(str: string, buf: Uint8Array<ArrayBuffer>, from?: number): number;
    function $mol_charset_encode_size(str: string): number;
}

declare namespace $ {
    type $mol_file_transaction_mode = 'create' | 'exists_truncate' | 'exists_fail' | 'read_only' | 'write_only' | 'read_write' | 'append';
    type $mol_file_transaction_buffer = ArrayBufferView;
    class $mol_file_transaction extends $mol_object {
        path(): string;
        modes(): readonly $mol_file_transaction_mode[];
        write(options: {
            buffer: ArrayBufferView | string | readonly ArrayBufferView[];
            offset?: number | null;
            length?: number | null;
            position?: number | null;
        }): number;
        read(): Uint8Array<ArrayBuffer>;
        truncate(size: number): void;
        flush(): void;
        close(): void;
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_file_base extends $mol_object {
        static absolute<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static relative<This extends typeof $mol_file_base>(this: This, path: string): InstanceType<This>;
        static base: string;
        path(): string;
        parent(): this;
        exists_cut(): boolean;
        protected root(): boolean;
        protected stat(next?: $mol_file_stat | null, virt?: 'virt'): $mol_file_stat | null;
        protected static changed: Set<$mol_file_base>;
        protected static frame: null | $mol_after_timeout;
        protected static changed_add(type: 'change' | 'rename', path: string): void;
        /**
         * Должно быть больше, чем время между событиями от вотчера при записи внешним процессом.
         * Иначе запуск ресетов паралельно с изменением может привести к неконсистентности.
         */
        static watch_debounce(): number;
        static flush(): void;
        protected static watching: boolean;
        protected static lock: $mol_lock;
        protected static watch_off(path: string): void;
        static unwatched<Result>(side_effect: () => Result, affected_dir: string): Result;
        reset(): void;
        modified(): Date | null;
        version(): string;
        protected info(path: string): null | $mol_file_stat;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(buffer: Uint8Array<ArrayBuffer>): void;
        protected kids(): readonly this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        writable(opts: {
            start?: number;
        }): WritableStream<Uint8Array<ArrayBuffer>>;
        buffer(next?: Uint8Array<ArrayBuffer>): Uint8Array<ArrayBuffer>;
        stat_make(size: number): {
            readonly type: "file";
            readonly size: number;
            readonly atime: Date;
            readonly mtime: Date;
            readonly ctime: Date;
        };
        clone(to: string): this | null;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean): boolean;
        type(): "" | $mol_file_type;
        name(): string;
        ext(): string;
        text(next?: string, virt?: 'virt'): string;
        text_int(next?: string, virt?: 'virt'): string;
        sub(reset?: null): this[];
        resolve(path: string): this;
        relate(base?: $mol_file_base): string;
        find(include?: RegExp, exclude?: RegExp): this[];
        size(): number;
        toJSON(): string;
        open(...modes: readonly $mol_file_transaction_mode[]): $mol_file_transaction;
    }
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file extends $mol_file_base {
    }
}

declare namespace $ {
    enum $mol_rest_code {
        'Continue' = 100,
        'Switching protocols' = 101,
        'Processing' = 102,
        'OK' = 200,
        'Created' = 201,
        'Accepted' = 202,
        'Non-Authoritative Information' = 203,
        'No Content' = 204,
        'Reset Content' = 205,
        'Partial Content' = 206,
        'Multi Status' = 207,
        'Already Reported' = 208,
        'IM Used' = 226,
        'Multiple Choices' = 300,
        'Moved Permanently' = 301,
        'Found' = 302,
        'See Other' = 303,
        'Not Modified' = 304,
        'Use Proxy' = 305,
        'Temporary Redirect' = 307,
        'Bad Request' = 400,
        'Unauthorized' = 401,
        'Payment Required' = 402,
        'Forbidden' = 403,
        'Not Found' = 404,
        'Method Not Allowed' = 405,
        'Not Acceptable' = 406,
        'Proxy Authentication Required' = 407,
        'Request Timeout' = 408,
        'Conflict' = 409,
        'Gone' = 410,
        'Length Required' = 411,
        'Precondition Failed' = 412,
        'Request Entity Too Large' = 413,
        'Request URI Too Long' = 414,
        'Unsupported Media Type' = 415,
        'Requested Range Not Satisfiable' = 416,
        'Expectation Failed' = 417,
        'Teapot' = 418,
        'Unprocessable Entity' = 422,
        'Locked' = 423,
        'Failed Dependency' = 424,
        'Upgrade Required' = 426,
        'Precondition Required' = 428,
        'Too Many Requests' = 429,
        'Request Header Fields Too Large' = 431,
        'Unavailable For Legal Reasons' = 451,
        'Internal Server Error' = 500,
        'Not Implemented' = 501,
        'Bad Gateway' = 502,
        'Service Unavailable' = 503,
        'Gateway Timeout' = 504,
        'HTTP Version Not Supported' = 505,
        'Insufficient Storage' = 507,
        'Loop Detected' = 508,
        'Not Extended' = 510,
        'Network Authentication Required' = 511,
        'Network Read Timeout Error' = 598,
        'Network Connect Timeout Error' = 599
    }
}

declare namespace $ {
    class $mol_error_mix<Cause extends {} = {}> extends AggregateError {
        readonly cause: Cause;
        name: string;
        constructor(message: string, cause?: Cause, ...errors: readonly Error[]);
        static [Symbol.toPrimitive](): string;
        static toString(): string;
        static make(...params: ConstructorParameters<typeof $mol_error_mix>): $mol_error_mix<{}>;
    }
}

declare namespace $ {
    function $mol_error_fence<Data>(task: () => Data, fallback: (parent: Error) => Error | Data | PromiseLike<Data>, loading?: (parent: PromiseLike<Data>) => Error | Data | PromiseLike<Data>): Data;
}

declare namespace $ {
    function $mol_error_enriched<V>(cause: {}, cb: () => V): V;
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare namespace $ {
    class $mol_fetch_response extends $mol_object {
        readonly native: Response;
        readonly request: $mol_fetch_request;
        status(): "success" | "unknown" | "inform" | "redirect" | "wrong" | "failed";
        code(): number;
        ok(): boolean;
        message(): string;
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array<ArrayBuffer>> | null;
        text(): string;
        json(): unknown;
        blob(): Blob;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch_request extends $mol_object {
        readonly native: Request;
        response_async(): Promise<Response> & {
            destructor: () => void;
        };
        response(): $mol_fetch_response;
        success(): $mol_fetch_response;
    }
    class $mol_fetch extends $mol_object {
        static request(input: RequestInfo, init?: RequestInit): $mol_fetch_request;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static success(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array<ArrayBuffer>> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static blob(input: RequestInfo, init?: RequestInit): Blob;
        static buffer(input: RequestInfo, init?: RequestInit): ArrayBuffer;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $mol_file_webdav extends $mol_file_base {
        static relative<This extends typeof $mol_file>(this: This, path: string): InstanceType<This>;
        resolve(path: string): this;
        static headers(): Record<string, string>;
        headers(): Record<string, string>;
        protected fetch(init: RequestInit): $mol_fetch_response;
        protected read(): Uint8Array<ArrayBuffer>;
        protected write(body: Uint8Array<ArrayBuffer>): void;
        protected ensure(): void;
        protected drop(): void;
        protected copy(to: string): void;
        protected kids(): this[];
        readable(opts: {
            start?: number;
            end?: number;
        }): ReadableStream<Uint8Array<ArrayBuffer>>;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file_webdav {
        static base: string;
        version(): string;
        protected info(): $mol_file_stat | null;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    /**
     * Localisation in $mol framework
     * @see https://mol.hyoo.ru/#!section=docs/=s5aqnb_odub8l
     */
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static langs_rtl(): string[];
        static direction(): "ltr" | "rtl";
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
        static warn(key: string): null;
    }
}

declare namespace $ {

	export class $mol_svg extends $mol_view {
		dom_name( ): string
		dom_name_space( ): string
		font_size( ): number
		font_family( ): string
		style_size( ): Record<string, any>
	}
	
}

//# sourceMappingURL=svg.view.tree.d.ts.map
declare namespace $.$$ {
    /** Base SVG component to display SVG images or icons. */
    class $mol_svg extends $.$mol_svg {
        computed_style(): Record<string, any>;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_root extends $mol_svg {
		view_box( ): string
		aspect( ): string
		dom_name( ): string
		attr( ): ({ 
			'viewBox': ReturnType< $mol_svg_root['view_box'] >,
			'preserveAspectRatio': ReturnType< $mol_svg_root['aspect'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=root.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_path extends $mol_svg {
		geometry( ): string
		dom_name( ): string
		attr( ): ({ 
			'd': ReturnType< $mol_svg_path['geometry'] >,
		})  & ReturnType< $mol_svg['attr'] >
	}
	
}

//# sourceMappingURL=path.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_mol_icon_1 = $mol_type_enforce<
		ReturnType< $mol_icon['path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $mol_icon extends $mol_svg_root {
		path( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		minimal_width( ): number
		minimal_height( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_volume_high extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=high.view.tree.d.ts.map
declare namespace $ {
}

declare namespace $ {

	export class $mol_check_icon extends $mol_check {
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_brightness_4 extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=4.view.tree.d.ts.map
declare namespace $ {

	export class $mol_lights_toggle extends $mol_check_icon {
		Lights_icon( ): $mol_icon_brightness_4
		lights( next?: boolean ): boolean
		Icon( ): ReturnType< $mol_lights_toggle['Lights_icon'] >
		hint( ): string
		checked( next?: ReturnType< $mol_lights_toggle['lights'] > ): ReturnType< $mol_lights_toggle['lights'] >
	}
	
}

//# sourceMappingURL=toggle.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Toggle for Switcher between light/dark themes (usually for `mol_theme_auto` plugin).
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_lights_demo
     */
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    function $mol_dom_safe_uri(uri: string): string;
    function $mol_dom_safe_attr(val: string): string;
    let $mol_dom_safe_rules: Record<string, Record<string, (val: string) => string>>;
    function $mol_dom_safe(this: $, nodes: ChildNode[]): ChildNode[];
}

declare namespace $ {

	export class $mol_link extends $mol_view {
		uri_toggle( ): string
		uri_unsafe( ): ReturnType< $mol_link['uri_toggle'] >
		hint( ): string
		hint_safe( ): ReturnType< $mol_link['hint'] >
		target( ): string
		file_name( ): string
		current( ): boolean
		relation( ): string
		event_click( next?: any ): any
		click( next?: ReturnType< $mol_link['event_click'] > ): ReturnType< $mol_link['event_click'] >
		uri( ): string
		dom_name( ): string
		uri_off( ): string
		uri_native( ): any
		external( ): boolean
		attr( ): ({ 
			'href': ReturnType< $mol_link['uri_unsafe'] >,
			'title': ReturnType< $mol_link['hint_safe'] >,
			'target': ReturnType< $mol_link['target'] >,
			'download': ReturnType< $mol_link['file_name'] >,
			'mol_link_current': ReturnType< $mol_link['current'] >,
			'rel': ReturnType< $mol_link['relation'] >,
		})  & ReturnType< $mol_view['attr'] >
		sub( ): readonly($mol_view_content)[]
		arg( ): Record<string, any>
		event( ): ({ 
			click( next?: ReturnType< $mol_link['click'] > ): ReturnType< $mol_link['click'] >,
		})  & ReturnType< $mol_view['event'] >
	}
	
}

//# sourceMappingURL=link.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Dynamic hyperlink. It can add, change or remove parameters. A link that leads to the current page has [mol_link_current] attribute set to true.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_link_demo
     */
    class $mol_link extends $.$mol_link {
        uri_toggle(): string;
        uri(): string;
        uri_off(): string;
        uri_native(): URL;
        current(): boolean;
        file_name(): string;
        minimal_height(): number;
        external(): boolean;
        target(): '_self' | '_blank' | '_top' | '_parent' | string;
        hint_safe(): string;
        uri_unsafe(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_script extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=script.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_script_text extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $ {

	export class $mol_link_source extends $mol_link {
		Icon( ): $mol_icon_script_text
		hint( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=source.view.tree.d.ts.map
declare namespace $ {

	export class $mol_svg_group extends $mol_svg {
		dom_name( ): string
	}
	
}

//# sourceMappingURL=group.view.tree.d.ts.map
declare namespace $ {
    type $bog_atelier_ink_line = readonly number[];
    type $bog_atelier_ink_ring = {
        x: number;
        y: number;
        r: number;
        wobble: number;
        sweep: number;
        gap: number;
        gap_at: number;
    };
    function $bog_atelier_ink_length(line: $bog_atelier_ink_line): number;
    function $bog_atelier_ink_resample(line: $bog_atelier_ink_line, count: number): number[];
    function $bog_atelier_ink_center(line: $bog_atelier_ink_line): readonly [number, number];
    function $bog_atelier_ink_box(line: $bog_atelier_ink_line): {
        left: number;
        top: number;
        right: number;
        bottom: number;
        width: number;
        height: number;
    };
    function $bog_atelier_ink_fit(line: $bog_atelier_ink_line): {
        x: number;
        y: number;
        r: number;
    } | null;
    function $bog_atelier_ink_ring(line: $bog_atelier_ink_line): $bog_atelier_ink_ring | null;
    function $bog_atelier_ink_ring_like(ring: $bog_atelier_ink_ring | null): boolean;
    function $bog_atelier_ink_closed(ring: $bog_atelier_ink_ring, tolerance?: number): boolean;
    function $bog_atelier_ink_cover(lines: readonly $bog_atelier_ink_line[], x: number, y: number, r: number, band?: number): {
        covered: number;
        gap: number;
        gap_at: number;
    };
    function $bog_atelier_ink_join(lines: readonly $bog_atelier_ink_line[]): number[];
    function $bog_atelier_ink_path(line: $bog_atelier_ink_line): string;
    function $bog_atelier_ink_poly(line: $bog_atelier_ink_line): string;
    function $bog_atelier_ink_arc(x: number, y: number, r: number, from: number, to: number, count?: number): number[];
    function $bog_atelier_ink_move(line: $bog_atelier_ink_line, dx: number, dy: number, scale?: number, turn?: number): number[];
}

declare namespace $ {

	type $mol_svg_group__sub_bog_atelier_desk_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_desk['under'] >
		,
		ReturnType< $mol_svg_group['sub'] >
	>
	type $mol_svg_group__sub_bog_atelier_desk_2 = $mol_type_enforce<
		ReturnType< $bog_atelier_desk['ink'] >
		,
		ReturnType< $mol_svg_group['sub'] >
	>
	type $mol_svg_group__sub_bog_atelier_desk_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_desk['over'] >
		,
		ReturnType< $mol_svg_group['sub'] >
	>
	type $mol_svg_path__geometry_bog_atelier_desk_4 = $mol_type_enforce<
		ReturnType< $bog_atelier_desk['line_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__attr_bog_atelier_desk_5 = $mol_type_enforce<
		({ 
			'stroke-width': ReturnType< $bog_atelier_desk['pen_width'] >,
		})  & ReturnType< $mol_svg_path['attr'] >
		,
		ReturnType< $mol_svg_path['attr'] >
	>
	export class $bog_atelier_desk extends $mol_svg_root {
		draw_start( next?: any ): any
		draw_move( next?: any ): any
		draw_end( next?: any ): any
		under( ): readonly(any)[]
		Under( ): $mol_svg_group
		ink( ): readonly(any)[]
		Ink( ): $mol_svg_group
		over( ): readonly(any)[]
		Over( ): $mol_svg_group
		line_path( id: any): string
		view_box( ): string
		lines( next?: readonly(any)[] ): readonly(any)[]
		line_now( next?: readonly(any)[] ): readonly(any)[]
		pen_width( ): number
		enabled( ): boolean
		attr( ): ({ 
			'bog_atelier_desk_enabled': ReturnType< $bog_atelier_desk['enabled'] >,
		})  & ReturnType< $mol_svg_root['attr'] >
		event( ): ({ 
			pointerdown( next?: ReturnType< $bog_atelier_desk['draw_start'] > ): ReturnType< $bog_atelier_desk['draw_start'] >,
			pointermove( next?: ReturnType< $bog_atelier_desk['draw_move'] > ): ReturnType< $bog_atelier_desk['draw_move'] >,
			pointerup( next?: ReturnType< $bog_atelier_desk['draw_end'] > ): ReturnType< $bog_atelier_desk['draw_end'] >,
			pointercancel( next?: ReturnType< $bog_atelier_desk['draw_end'] > ): ReturnType< $bog_atelier_desk['draw_end'] >,
		})  & ReturnType< $mol_svg_root['event'] >
		sub( ): readonly(any)[]
		Line( id: any): $mol_svg_path
	}
	
}

//# sourceMappingURL=desk.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_desk extends $.$bog_atelier_desk {
        ink(): $mol_svg_path[];
        line_path(index: number): string;
        point_of(event: PointerEvent): readonly [number, number] | null;
        pen_id: number;
        draw_start(event?: PointerEvent): null;
        draw_move(event?: PointerEvent): null;
        draw_end(event?: PointerEvent): null;
        stroke(line: readonly number[]): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_svg_text extends $mol_svg {
		pos_x( ): string
		pos_y( ): string
		align( ): string
		align_hor( ): ReturnType< $mol_svg_text['align'] >
		align_vert( ): string
		text( ): string
		dom_name( ): string
		pos( ): readonly(any)[]
		attr( ): ({ 
			'x': ReturnType< $mol_svg_text['pos_x'] >,
			'y': ReturnType< $mol_svg_text['pos_y'] >,
			'text-anchor': ReturnType< $mol_svg_text['align_hor'] >,
			'alignment-baseline': ReturnType< $mol_svg_text['align_vert'] >,
		})  & ReturnType< $mol_svg['attr'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_svg_text extends $.$mol_svg_text {
        pos_x(): any;
        pos_y(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $bog_gamengine_gl_type = 'mat4' | 'mat3' | 'mat2' | 'vec4' | 'vec3' | 'vec2' | 'ivec4' | 'ivec3' | 'ivec2' | 'uvec4' | 'uvec3' | 'uvec2' | 'float' | 'int' | 'uint' | 'sampler2D' | 'sampler2DShadow' | 'sampler2DArray' | 'sampler2DArrayShadow' | 'samplerCube' | 'samplerCubeShadow' | 'sampler3D';
    type $bog_gamengine_gl_type_array = `${$bog_gamengine_gl_type}[${number}]`;
    type $bog_gamengine_gl_face = {
        glob?: Record<string, $bog_gamengine_gl_type | $bog_gamengine_gl_type_array>;
        input?: Record<string, $bog_gamengine_gl_type>;
        pipe?: Record<string, $bog_gamengine_gl_type>;
        output?: Record<string, $bog_gamengine_gl_type>;
    };
    function $bog_gamengine_gl_decl(kind: string, type: string, name: string): string;
    function $bog_gamengine_gl_slots(type: $bog_gamengine_gl_type): 1 | 2 | 3 | 4;
    function $bog_gamengine_gl_source(face: $bog_gamengine_gl_face, vert: string, frag: string): {
        vert: string;
        frag: string;
    };
    function $bog_gamengine_gl_shader(gl: WebGL2RenderingContext, type: GLenum, code: string): WebGLShader;
    class $bog_gamengine_gl_program<Face extends $bog_gamengine_gl_face> extends Object {
        readonly gl: WebGL2RenderingContext;
        readonly native: WebGLProgram;
        uniforms: Map<string, WebGLUniformLocation | null>;
        constructor(gl: WebGL2RenderingContext, face: Face, vert: string, frag: string);
        uniform(name: keyof Face['glob'] & string): WebGLUniformLocation | null;
        attribute(name: keyof Face['input'] & string): number | null;
    }
    class $bog_gamengine_gl_buffer extends Object {
        readonly gl: WebGL2RenderingContext;
        readonly native: WebGLBuffer;
        constructor(gl: WebGL2RenderingContext, location: number, size: number, divisor: number);
        send(data: ArrayBufferView): ArrayBufferView<ArrayBufferLike>;
        reserve(bytes: number): number;
    }
    function $bog_gamengine_gl_texture_array(gl: WebGL2RenderingContext, images: readonly TexImageSource[], size: number, srgb?: boolean): WebGLTexture;
    function $bog_gamengine_gl_texture_array_flat(gl: WebGL2RenderingContext): WebGLTexture;
    class $bog_gamengine_gl_depth_target extends Object {
        readonly gl: WebGL2RenderingContext;
        readonly size: number;
        readonly native: WebGLFramebuffer;
        readonly texture: WebGLTexture;
        constructor(gl: WebGL2RenderingContext, size: number);
        dispose(): this;
    }
    class $bog_gamengine_gl_color_target extends Object {
        readonly gl: WebGL2RenderingContext;
        native: WebGLFramebuffer | null;
        texture: WebGLTexture | null;
        depth: WebGLRenderbuffer | null;
        width: number;
        height: number;
        readonly float: boolean;
        constructor(gl: WebGL2RenderingContext, width: number, height: number);
        attach(width: number, height: number): this;
        resize(width: number, height: number): this;
        dispose(): this;
    }
    function $bog_gamengine_gl_uniform_matrix(gl: WebGL2RenderingContext, location: WebGLUniformLocation | null, data: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_gl_uniform_vector(gl: WebGL2RenderingContext, location: WebGLUniformLocation | null, data: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_gl_uniform_vec4s(gl: WebGL2RenderingContext, location: WebGLUniformLocation | null, data: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_gl_uniform_int(gl: WebGL2RenderingContext, location: WebGLUniformLocation | null, value: number): number;
}

declare namespace $ {
    let $mol_3d_glsl_both: string;
    let $mol_3d_glsl_vert: string;
    let $mol_3d_glsl_frag: string;
}

declare namespace $ {
    class $bog_gamengine_shader extends $mol_object2 {
        programs: WeakMap<WebGL2RenderingContext, $bog_gamengine_gl_program<$bog_gamengine_gl_face>>;
        face(): $bog_gamengine_gl_face;
        vert(): string;
        frag(): string;
        depth(): boolean;
        sources(): {
            vert: string;
            frag: string;
        };
        program(gl: WebGL2RenderingContext): $bog_gamengine_gl_program<ReturnType<this['face']>>;
    }
}

declare namespace $ {
    type $bog_gamengine_shader_post_step = {
        readonly shader: $bog_gamengine_shader_post;
        readonly scale: number;
        readonly from: 'in' | 'prev';
        readonly extra: 'in' | 'prev' | null;
    };
    class $bog_gamengine_shader_post extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly source: "sampler2D";
                readonly texel: "vec2";
            };
            readonly pipe: {
                readonly pipe_uv: "vec2";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        vert(): string;
        frag(): string;
        steps(): readonly $bog_gamengine_shader_post_step[];
    }
}

declare namespace $ {
    class $bog_gamengine_shader_post_bloom_bright extends $bog_gamengine_shader_post {
        frag(): string;
    }
    class $bog_gamengine_shader_post_bloom_blur extends $bog_gamengine_shader_post {
        across(): boolean;
        frag(): string;
    }
    class $bog_gamengine_shader_post_bloom_blur_across extends $bog_gamengine_shader_post_bloom_blur {
        across(): boolean;
    }
    class $bog_gamengine_shader_post_bloom extends $bog_gamengine_shader_post {
        bright: $bog_gamengine_shader_post_bloom_bright;
        blur_along: $bog_gamengine_shader_post_bloom_blur;
        blur_across: $bog_gamengine_shader_post_bloom_blur_across;
        face(): {
            readonly glob: {
                readonly source: "sampler2D";
                readonly texel: "vec2";
                readonly extra: "sampler2D";
            };
            readonly pipe: {
                readonly pipe_uv: "vec2";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        frag(): string;
        steps(): readonly $bog_gamengine_shader_post_step[];
    }
}

declare namespace $ {
    class $bog_gamengine_shader_post_tone extends $bog_gamengine_shader_post {
        frag(): string;
    }
}

declare namespace $ {
    class $bog_gamengine_shader_post_vignette extends $bog_gamengine_shader_post {
        frag(): string;
    }
}

declare namespace $ {
    /** App tree: `plugins / <= Control mol_keyboard_state key <= key_map`, where `key_map()` in app ts returns `this.Key().keys()` */
    class $bog_gamengine_key extends $mol_object2 {
        bind(next?: Record<string, readonly string[]>): Record<string, readonly string[]>;
        states: Map<string, boolean>;
        pressed(name: string, next?: boolean): boolean;
        action(name: string): boolean;
        axis(neg: string, pos: string): number;
        keys(): Record<string, (state?: boolean) => boolean>;
    }
}

declare namespace $ {
    type $bog_gamengine_pad_state = {
        readonly buttons: readonly {
            readonly pressed: boolean;
        }[];
        readonly axes: readonly number[];
    };
    class $bog_gamengine_pad extends $mol_object2 {
        bind(next?: Record<string, readonly string[]>): Record<string, readonly string[]>;
        dead(next?: number): number;
        buttons: Uint8Array<ArrayBuffer>;
        axes: Float32Array<ArrayBuffer>;
        pads(): readonly ($bog_gamengine_pad_state | null)[];
        poll(): void;
        value(name: string): number;
        strength(name: string): number;
        action(name: string): boolean;
        axis(neg: string, pos: string): number;
    }
}

declare namespace $ {
    interface $bog_gamengine_input_screen {
        action(name: string): boolean;
        axis(neg: string, pos: string): number;
        move(dx: number, dy: number): void;
        press(name: string): void;
        release(name: string): void;
    }
}

declare namespace $ {

	type $mol_view__style_bog_gamengine_input_screen_1 = $mol_type_enforce<
		({ 
			'transform': ReturnType< $bog_gamengine_input_screen['knob_shift'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__event_bog_gamengine_input_screen_2 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $bog_gamengine_input_screen['stick_down'] > ): ReturnType< $bog_gamengine_input_screen['stick_down'] >,
			pointermove( next?: ReturnType< $bog_gamengine_input_screen['stick_move'] > ): ReturnType< $bog_gamengine_input_screen['stick_move'] >,
			pointerup( next?: ReturnType< $bog_gamengine_input_screen['stick_up'] > ): ReturnType< $bog_gamengine_input_screen['stick_up'] >,
			pointercancel( next?: ReturnType< $bog_gamengine_input_screen['stick_cancel'] > ): ReturnType< $bog_gamengine_input_screen['stick_cancel'] >,
			pointerleave( next?: ReturnType< $bog_gamengine_input_screen['stick_leave'] > ): ReturnType< $bog_gamengine_input_screen['stick_leave'] >,
		}) 
		,
		ReturnType< $mol_view['event'] >
	>
	type $mol_view__sub_bog_gamengine_input_screen_3 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_gamengine_input_screen_4 = $mol_type_enforce<
		ReturnType< $bog_gamengine_input_screen['buttons'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_button__title_bog_gamengine_input_screen_5 = $mol_type_enforce<
		ReturnType< $bog_gamengine_input_screen['button_title'] >
		,
		ReturnType< $mol_button['title'] >
	>
	type $mol_button__event_bog_gamengine_input_screen_6 = $mol_type_enforce<
		({ 
			pointerdown( next?: ReturnType< $bog_gamengine_input_screen['button_down'] > ): ReturnType< $bog_gamengine_input_screen['button_down'] >,
			pointerup( next?: ReturnType< $bog_gamengine_input_screen['button_up'] > ): ReturnType< $bog_gamengine_input_screen['button_up'] >,
			pointercancel( next?: ReturnType< $bog_gamengine_input_screen['button_cancel'] > ): ReturnType< $bog_gamengine_input_screen['button_cancel'] >,
			pointerleave( next?: ReturnType< $bog_gamengine_input_screen['button_leave'] > ): ReturnType< $bog_gamengine_input_screen['button_leave'] >,
		})  & ReturnType< $mol_button['event'] >
		,
		ReturnType< $mol_button['event'] >
	>
	export class $bog_gamengine_input_screen extends $mol_view {
		stick_down( next?: any ): any
		stick_move( next?: any ): any
		stick_up( next?: any ): any
		stick_cancel( next?: any ): any
		stick_leave( next?: any ): any
		Knob( ): $mol_view
		Stick( ): $mol_view
		buttons( ): readonly(any)[]
		Buttons( ): $mol_view
		button_title( id: any): string
		button_down( id: any, next?: any ): any
		button_up( id: any, next?: any ): any
		button_cancel( id: any, next?: any ): any
		button_leave( id: any, next?: any ): any
		shown( next?: boolean ): boolean
		actions( ): readonly(string)[]
		titles( ): Record<string, any>
		bind( ): Record<string, any>
		dead( ): number
		radius( ): number
		knob_shift( next?: string ): string
		sub( ): readonly(any)[]
		Button( id: any): $mol_button
	}
	
}

//# sourceMappingURL=screen.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_gamengine_input_screen extends $.$bog_gamengine_input_screen {
        stick: Float32Array<ArrayBuffer>;
        held: Map<string, boolean>;
        stick_pointer: number;
        bind(): Record<string, readonly string[]>;
        coarse(): boolean;
        visible(): boolean;
        sub(): readonly any[];
        buttons(): $.$mol_button[];
        button_title(name: string): any;
        value(name: string): number;
        strength(name: string): number;
        action(name: string): boolean;
        axis(neg: string, pos: string): number;
        move(dx: number, dy: number): void;
        press(name: string): void;
        release(name: string): void;
        stick_track(event: PointerEvent): void;
        stick_down(event?: PointerEvent | null): PointerEvent | null;
        stick_move(event?: PointerEvent | null): PointerEvent | null;
        stick_up(event?: PointerEvent | null): PointerEvent | null;
        stick_cancel(event?: PointerEvent | null): PointerEvent | null;
        stick_leave(event?: PointerEvent | null): PointerEvent | null;
        button_down(name: string, event?: PointerEvent | null): PointerEvent | null;
        button_up(name: string, event?: PointerEvent | null): PointerEvent | null;
        button_cancel(name: string, event?: PointerEvent | null): PointerEvent | null;
        button_leave(name: string, event?: PointerEvent | null): PointerEvent | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
    class $bog_gamengine_input extends $mol_object2 {
        key(next?: $bog_gamengine_key | null): $bog_gamengine_key | null;
        pad(next?: $bog_gamengine_pad | null): $bog_gamengine_pad | null;
        screen(next?: $bog_gamengine_input_screen | null): $bog_gamengine_input_screen | null;
        poll(): void;
        action(name: string): boolean;
        axis(neg: string, pos: string): number;
    }
}

declare namespace $ {
    class $bog_gamengine_clock extends $mol_object2 {
        frames: number;
        now_last: number;
        dt_raw: number;
        time_total: number;
        time_frame: number;
        tick_at: number;
        frame(): number;
        dt(): number;
        time(next?: number): number;
        paused(next?: boolean): boolean;
        speed(next?: number): number;
    }
}

declare namespace $ {
    class $mol_3d_mat4 extends Float32Array {
        static identity(): $mol_3d_mat4;
        static translation([x, y, z]: Float32List): $mol_3d_mat4;
        static scaling([x, y, z]: Float32List): $mol_3d_mat4;
        static rotation([x, y, z]: Float32List, angle: number): $mol_3d_mat4;
        static orthographic(left: number, right: number, bottom: number, top: number, near: number, far: number): $mol_3d_mat4;
        static perspective(fov: number, aspect: number, near: number, far: number): $mol_3d_mat4;
        static multiply(head: Float32List, ...tail: Float32List[]): $mol_3d_mat4;
        inversed(): $mol_3d_mat4;
    }
}

declare namespace $ { }

declare namespace $ {
    type $bog_gamengine_prop_kind = 'vec2' | 'vec3' | 'vec4' | 'number' | 'flag' | 'text' | 'frame' | 'euler' | 'list' | 'nodes' | 'node' | 'point';
    type $bog_gamengine_billboard = '' | 'cylinder' | 'sphere';
    type $bog_gamengine_prop = {
        name: string;
        kind: $bog_gamengine_prop_kind;
        fields?: Readonly<Record<string, $bog_gamengine_prop_kind>>;
        klass?: string;
        get: () => unknown;
        set: (next: unknown) => void;
    };
    type $bog_gamengine_part = {
        owner(next?: $bog_gamengine_node | null): $bog_gamengine_node | null;
        props?(): readonly $bog_gamengine_prop[];
    };
    function $bog_gamengine_node_vec(next: ArrayLike<number>): Float32Array<ArrayBufferLike>;
    const $bog_gamengine_node_reach_states: readonly {
        readonly size?: readonly number[];
        readonly scale?: readonly number[];
        readonly rot?: readonly number[];
    }[];
    function $bog_gamengine_node_reach(node: $bog_gamengine_node): number;
    class $bog_gamengine_node extends $mol_object2 {
        name(next?: string): string;
        role(next?: string): string;
        title(): string;
        props(): readonly $bog_gamengine_prop[];
        parts(next?: readonly $bog_gamengine_part[]): readonly $bog_gamengine_part[];
        pos(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        rot(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        scale(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        tint(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        billboard(next?: $bog_gamengine_billboard): string;
        billboard_kind(): $bog_gamengine_billboard;
        shader(next?: $bog_gamengine_shader | null): $bog_gamengine_shader | null;
        parent(next?: $bog_gamengine_node | null): $bog_gamengine_node | null;
        kids(next?: readonly $bog_gamengine_node[]): readonly $bog_gamengine_node[];
        hidden: boolean;
        shown_now: boolean;
        shown(): boolean;
        root(): $bog_gamengine_node;
        is_scene(): boolean;
        is_brain(): boolean;
        scene(): $bog_gamengine_scene | null;
        input(): $bog_gamengine_input | null;
        clock(): $bog_gamengine_clock | null;
        cam_yaw(): number;
        trans(): $mol_3d_mat4;
        world(): $mol_3d_mat4;
        local_box: Float32Array<ArrayBuffer>;
        world_box: Float32Array<ArrayBuffer>;
        box_local(): Float32Array | null;
        aabb(): Float32Array<ArrayBuffer>;
        aabb_empty(): boolean;
        step(dt: number): void;
    }
}

declare namespace $ {
    class $bog_gamengine_light extends $bog_gamengine_node {
        kind(next?: string): string;
        color(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        power(next?: number): number;
        range(next?: number): number;
        angle(next?: number): number;
        props(): readonly $bog_gamengine_prop[];
        dir(): Float32Array<ArrayBufferLike>;
    }
    function $bog_gamengine_light_dir(world: Float32Array, out: Float32Array, offset: number): Float32Array<ArrayBufferLike>;
}

declare namespace $ {
    class $bog_gamengine_shader_sprite extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly proj: "mat4";
                readonly view: "mat4";
                readonly atlas: "sampler2DArray";
            };
            readonly input: {
                readonly vertex: "vec3";
                readonly uv: "vec2";
                readonly inst_trans: "mat4";
                readonly inst_tint: "vec4";
                readonly inst_layer: "float";
                readonly inst_uv: "vec4";
            };
            readonly pipe: {
                readonly pipe_uv: "vec2";
                readonly pipe_layer: "float";
                readonly pipe_tint: "vec4";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        vert(): string;
        frag(): string;
    }
}

declare namespace $ {
    class $bog_gamengine_shader_solid extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly proj: "mat4";
                readonly view: "mat4";
                readonly atlas: "sampler2DArray";
                readonly atlas_data: "sampler2DArray";
                readonly light_count: "int";
                readonly light_pos: "vec4[8]";
                readonly light_dir: "vec4[8]";
                readonly light_color: "vec4[8]";
                readonly ambient: "vec3";
                readonly cam_pos: "vec3";
                readonly fog: "vec2";
                readonly fog_color: "vec3";
                readonly wireframe: "float";
                readonly shadow_mat: "mat4";
                readonly shadow_map: "sampler2DShadow";
                readonly shadow_light: "int";
            };
            readonly input: {
                readonly vertex: "vec3";
                readonly uv: "vec2";
                readonly normal: "vec3";
                readonly inst_trans: "mat4";
                readonly inst_tint: "vec4";
                readonly inst_layer: "float";
                readonly inst_uv: "vec4";
                readonly inst_material: "vec4";
                readonly inst_normal_layer: "float";
            };
            readonly pipe: {
                readonly pipe_uv: "vec2";
                readonly pipe_layer: "float";
                readonly pipe_tint: "vec4";
                readonly pipe_normal: "vec3";
                readonly pipe_pos: "vec3";
                readonly pipe_material: "vec4";
                readonly pipe_normal_layer: "float";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        depth(): boolean;
        vert(): string;
        frag(): string;
    }
}

declare namespace $ { }

declare namespace $ {
    class $bog_gamengine_shader_solid_plain extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly proj: "mat4";
                readonly view: "mat4";
                readonly light_count: "int";
                readonly light_pos: "vec4[8]";
                readonly light_dir: "vec4[8]";
                readonly light_color: "vec4[8]";
                readonly ambient: "vec3";
                readonly cam_pos: "vec3";
                readonly fog: "vec2";
                readonly fog_color: "vec3";
                readonly wireframe: "float";
            };
            readonly input: {
                readonly vertex: "vec3";
                readonly normal: "vec3";
                readonly inst_trans: "mat4";
                readonly inst_tint: "vec4";
                readonly inst_material: "vec4";
            };
            readonly pipe: {
                readonly pipe_tint: "vec4";
                readonly pipe_normal: "vec3";
                readonly pipe_pos: "vec3";
                readonly pipe_material: "vec4";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        depth(): boolean;
        vert(): string;
        frag(): string;
    }
}

declare namespace $ {
    class $mol_3d_shape extends $mol_object {
        geometry(): Float32Array<ArrayBuffer>;
        size(): number;
        skin(): Float32Array<ArrayBuffer>;
    }
    class $mol_3d_shape_triangle extends $mol_3d_shape {
        geometry(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
    }
    class $mol_3d_shape_square extends $mol_3d_shape {
        geometry(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
    }
}

declare namespace $ {
    class $bog_gamengine_shape extends $mol_3d_shape {
        normals(): Float32Array<ArrayBuffer>;
        box(): Float32Array<ArrayBuffer>;
        radius(): number;
        count(): number;
        mode(): 'strip' | 'triangles' | 'lines';
    }
}

declare namespace $ {
    class $bog_gamengine_shape_quad extends $bog_gamengine_shape {
        geometry(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
    }
}

declare namespace $ {
    class $bog_gamengine_shader_flat extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly proj: "mat4";
                readonly view: "mat4";
            };
            readonly input: {
                readonly vertex: "vec3";
                readonly inst_trans: "mat4";
                readonly inst_tint: "vec4";
            };
            readonly pipe: {
                readonly pipe_tint: "vec4";
            };
            readonly output: {
                readonly color: "vec4";
            };
        };
        vert(): string;
        frag(): string;
    }
}

declare namespace $ {
    class $mol_3d_image extends $mol_object {
        uri(): string;
        load(): Promise<HTMLImageElement>;
        data(): HTMLImageElement | ImageData;
    }
}

declare namespace $ {
    /** Starts subtasks concurrently instead of serial. */
    function $mol_wire_race<Tasks extends ((...args: any) => any)[]>(...tasks: Tasks): {
        [index in keyof Tasks]: ReturnType<Tasks[index]>;
    };
}

declare namespace $ {
    type $bog_gamengine_atlas_kind = 'color' | 'data';
    type $bog_gamengine_atlas_source = {
        name: string;
        image: TexImageSource;
    };
    class $bog_gamengine_atlas_image extends $mol_3d_image {
        data(): HTMLImageElement | ImageData;
    }
    function $bog_gamengine_atlas_blank(image: TexImageSource): boolean;
    class $bog_gamengine_atlas extends $mol_object2 {
        uris(next?: readonly string[]): readonly string[];
        size(next?: number): number;
        kind(next?: $bog_gamengine_atlas_kind): $bog_gamengine_atlas_kind;
        data(next?: $bog_gamengine_atlas | null): $bog_gamengine_atlas | null;
        sources(next?: readonly $bog_gamengine_atlas_source[]): readonly $bog_gamengine_atlas_source[];
        origins(): readonly {
            name: string;
            from: string;
        }[];
        names(): Map<string, number>;
        layer(name: string): number;
        static image(uri: string): $bog_gamengine_atlas_image;
        image(uri: string): $bog_gamengine_atlas_image;
        images(): readonly TexImageSource[];
        ready(): boolean;
    }
}

declare namespace $ {
    function $bog_gamengine_cam_frustum_sphere(frustum: Float32Array, x: number, y: number, z: number, radius: number): boolean;
    function $bog_gamengine_cam_frustum_aabb(frustum: Float32Array, aabb: Float32Array, at: number): boolean;
    class $bog_gamengine_cam extends $bog_gamengine_node {
        aspect(next?: number): number;
        view(): $mol_3d_mat4;
        proj(aspect: number): $mol_3d_mat4;
        clip: Float32Array<ArrayBuffer>;
        frustum(aspect: number, out: Float32Array): Float32Array<ArrayBufferLike>;
    }
}

declare namespace $ {
    type $bog_gamengine_batch_node = $bog_gamengine_node & {
        tint?(): Float32Array;
        layer?(): number;
        uv?(): Float32Array;
        material?(): Float32Array;
        normal_layer?(): number;
        radius?(): number;
        shape?(): $bog_gamengine_shape;
        shader?(): $bog_gamengine_shader | null;
    };
    type $bog_gamengine_batch_source_node = $bog_gamengine_batch_node & {
        is_source(): boolean;
        source(): $bog_gamengine_batch_source | null;
    };
    type $bog_gamengine_batch_source = {
        trans: Float32Array;
        count: number;
        aabb?: Float32Array;
        tint?: Float32Array;
        layer?: Float32Array;
        uv?: Float32Array;
    };
    function $bog_gamengine_batch_scale_max(world: Float32Array): number;
    class $bog_gamengine_batch extends $mol_object2 {
        shader(next?: $bog_gamengine_shader): $bog_gamengine_shader | $bog_gamengine_shader_flat;
        shape(next?: $bog_gamengine_shape): $bog_gamengine_shape;
        atlas(next?: $bog_gamengine_atlas | null): $bog_gamengine_atlas | null;
        nodes(next?: readonly $bog_gamengine_batch_node[]): readonly $bog_gamengine_batch_node[];
        source(next?: $bog_gamengine_batch_source | null): $bog_gamengine_batch_source | null;
        skip(next?: number): number;
        instances(next?: number): number;
        cull(next?: boolean): boolean;
        near(next?: number): number;
        far(next?: number): number;
        cap: number;
        count: number;
        version: number;
        trans: Float32Array<ArrayBuffer>;
        tint: Float32Array<ArrayBuffer>;
        layer: Float32Array<ArrayBuffer>;
        uv: Float32Array<ArrayBuffer>;
        material: Float32Array<ArrayBuffer>;
        normal_layer: Float32Array<ArrayBuffer>;
        grow(need: number): void;
        fill_plain(count: number): number;
        fill(frustum?: Float32Array | null, eye?: Float32Array | null): number;
        fill_source(source: $bog_gamengine_batch_source, frustum?: Float32Array | null): number;
    }
}

declare namespace $ {
    type $bog_gamengine_batch_group_node = $bog_gamengine_batch_node & {
        atlas(): $bog_gamengine_atlas | null;
    };
    type $bog_gamengine_batch_group_part = {
        key: string;
        shader: $bog_gamengine_shader;
        shape: $bog_gamengine_shape;
        atlas: $bog_gamengine_atlas | null;
        nodes: $bog_gamengine_batch_group_node[];
    };
    function $bog_gamengine_batch_group_id(item: object | null): string;
    function $bog_gamengine_batch_group(nodes: readonly $bog_gamengine_batch_group_node[], shader: (node: $bog_gamengine_batch_group_node) => $bog_gamengine_shader, shape: (node: $bog_gamengine_batch_group_node) => $bog_gamengine_shape): readonly $bog_gamengine_batch_group_part[];
}

declare namespace $ {
    class $bog_gamengine_phys_body extends $bog_gamengine_node {
        static readonly side_down = 1;
        static readonly side_up = 2;
        static readonly side_left = 4;
        static readonly side_right = 8;
        touched: number;
        on_ground(): boolean;
        on_ceil(): boolean;
        on_wall(): boolean;
        vel(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        size(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        kind(next?: 'aabb' | 'circle'): "circle" | "aabb";
        still(next?: boolean): boolean;
        ghost(next?: boolean): boolean;
        props(): readonly $bog_gamengine_prop[];
        hit(other: $bog_gamengine_phys_body | null, normal?: ArrayLike<number>): void;
    }
}

declare namespace $ {
    type $bog_gamengine_map_plane = 'xy' | 'xz';
    class $bog_gamengine_map extends $mol_object2 {
        map(next?: string): string;
        plane(next?: string): string;
        origin(next?: ArrayLike<number>): Float32Array;
        rows(): readonly string[];
        width(): number;
        height(): number;
        char(x: number, y: number): string;
        spots(char: string): readonly (readonly [number, number])[];
        chars(): ReadonlySet<string>;
        ids(char: string): readonly string[];
        at: Int32Array<ArrayBuffer>;
        xy(id: string, out: Int32Array): Int32Array<ArrayBufferLike>;
        place(cx: number, cy: number, lift: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        pos(x: number, y: number, lift: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        spot_pos(id: string, lift: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        center(lift: number, out: Float32Array): Float32Array<ArrayBufferLike>;
    }
}

declare namespace $ {
    class $bog_gamengine_phys_tile extends $bog_gamengine_map {
        solid(next?: string): string;
        cell(x: number, y: number): boolean;
        cells(out: Uint8Array, width: number, height: number): Uint8Array<ArrayBufferLike>;
        line_free(x0: number, y0: number, x1: number, y1: number, pad: number, per: number, solid: Uint8Array): boolean;
        cell_pos(x: number, y: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        cell_at(wx: number, wv: number, out: Int32Array): Int32Array<ArrayBufferLike>;
        spot: Float32Array<ArrayBuffer>;
        cell_spot(x: number, y: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        solid_at(wx: number, wy: number): boolean;
        ahead(wx: number, wy: number, dx: number, dy: number, dist: number): string;
        edge(wx: number, wy: number, dx: number, dy: number): boolean;
    }
}

declare namespace $ {
    class $bog_gamengine_phys extends $mol_object2 {
        static stat_window: number;
        bodies(next?: readonly $bog_gamengine_phys_body[]): readonly $bog_gamengine_phys_body[];
        tile(next?: $bog_gamengine_phys_tile | null): $bog_gamengine_phys_tile | null;
        gravity(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        pull(): void;
        eps: number;
        normal: Float32Array<ArrayBuffer>;
        times: Float32Array<ArrayBuffer>;
        samples: number;
        step(dt: number): void;
        step_ms(): number;
        step_world(dt: number): void;
        fall(body: $bog_gamengine_phys_body, gx: number, gy: number): void;
        move(body: $bog_gamengine_phys_body, tile: $bog_gamengine_phys_tile | null, dt: number): void;
        col_solid(tile: $bog_gamengine_phys_tile, cx: number, cy0: number, cy1: number): boolean;
        row_solid(tile: $bog_gamengine_phys_tile, cy: number, cx0: number, cx1: number): boolean;
        touch(a: $bog_gamengine_phys_body, b: $bog_gamengine_phys_body): void;
        push(a: $bog_gamengine_phys_body, b: $bog_gamengine_phys_body, px: number, py: number): void;
        shift(body: $bog_gamengine_phys_body, sx: number, sy: number, stop: boolean): void;
    }
}

declare namespace $ {
    type $bog_gamengine_phys3_broad_world = {
        count: number;
        aabb: Float32Array;
        inv_mass: Float32Array;
        flags: Uint8Array;
        shape: Uint8Array;
    };
    class $bog_gamengine_phys3_broad extends $mol_object2 {
        static shape_plane: number;
        static flag_sleep: number;
        static flag_kinematic: number;
        pairs: Uint32Array<ArrayBuffer>;
        pair_count: number;
        order: Uint32Array<ArrayBuffer>;
        order_len: number;
        find(world: $bog_gamengine_phys3_broad_world): number;
        order_sync(count: number): void;
        order_sort(aabb: Float32Array): void;
        sweep(world: $bog_gamengine_phys3_broad_world): void;
        planes(world: $bog_gamengine_phys3_broad_world): void;
        push(i: number, j: number): void;
    }
}

declare namespace $ {
    type $bog_gamengine_phys3_narrow_world = {
        pos: Float32Array;
        rot: Float32Array;
        shape: Uint8Array;
        size: Float32Array;
        flags: Uint8Array;
        hull_off: Uint32Array;
        hull_count: Uint32Array;
        hull: Float32Array;
    };
    class $bog_gamengine_phys3_narrow extends $mol_object2 {
        contact_cap: number;
        contact_count: number;
        contact_a: Uint32Array<ArrayBuffer>;
        contact_b: Uint32Array<ArrayBuffer>;
        contact_point: Float32Array<ArrayBuffer>;
        contact_normal: Float32Array<ArrayBuffer>;
        contact_depth: Float32Array<ArrayBuffer>;
        world: $bog_gamengine_phys3_narrow_world;
        pair_a: number;
        pair_b: number;
        flip: boolean;
        pa: Float32Array<ArrayBuffer>;
        pb: Float32Array<ArrayBuffer>;
        qa: Float32Array<ArrayBuffer>;
        qb: Float32Array<ArrayBuffer>;
        ua: Float32Array<ArrayBuffer>;
        ub: Float32Array<ArrayBuffer>;
        pn: Float32Array<ArrayBuffer>;
        axis: Float32Array<ArrayBuffer>;
        dir: Float32Array<ArrayBuffer>;
        tmp: Float32Array<ArrayBuffer>;
        sup: Float32Array<ArrayBuffer>;
        sup_local: Float32Array<ArrayBuffer>;
        cand_count: number;
        cand_depth: Float32Array<ArrayBuffer>;
        cand_point: Float32Array<ArrayBuffer>;
        poly_count: number;
        poly: Float32Array<ArrayBuffer>;
        poly_next: Float32Array<ArrayBuffer>;
        si: Int32Array<ArrayBuffer>;
        sn: number;
        ev_count: number;
        ev: Float32Array<ArrayBuffer>;
        eva: Float32Array<ArrayBuffer>;
        evb: Float32Array<ArrayBuffer>;
        ef_count: number;
        ef: Int32Array<ArrayBuffer>;
        efn: Float32Array<ArrayBuffer>;
        efd: Float32Array<ArrayBuffer>;
        eh_count: number;
        eh: Int32Array<ArrayBuffer>;
        ec: Float32Array<ArrayBuffer>;
        grow(need: number): void;
        collide(world: $bog_gamengine_phys3_narrow_world, pairs: Uint32Array, pair_count: number): number;
        load(i: number, c: Float32Array, q: Float32Array): void;
        emit(px: number, py: number, pz: number, nx: number, ny: number, nz: number, depth: number): void;
        cand_push(px: number, py: number, pz: number, depth: number): void;
        cand_flush(nx: number, ny: number, nz: number): void;
        rot_apply(out: Float32Array, q: Float32Array, vx: number, vy: number, vz: number): Float32Array<ArrayBufferLike>;
        rot_unapply(out: Float32Array, q: Float32Array, vx: number, vy: number, vz: number): Float32Array<ArrayBufferLike>;
        axes(out: Float32Array, q: Float32Array): Float32Array<ArrayBufferLike>;
        plane_normal(i: number, q: Float32Array, out: Float32Array): Float32Array<ArrayBufferLike>;
        sphere_sphere(): void;
        sphere_pair(ax: number, ay: number, az: number, ra: number, bx: number, by: number, bz: number, rb: number): void;
        sphere_plane(): void;
        sphere_plane_point(cx: number, cy: number, cz: number, r: number, p: Float32Array, n: Float32Array): void;
        box_plane(): void;
        capsule_plane(): void;
        plane_hull(): void;
        sphere_box(): void;
        sphere_capsule(): void;
        capsule_capsule(): void;
        box_box(): void;
        box_box_face(axis: number): void;
        clip(nx: number, ny: number, nz: number, off: number): void;
        box_box_edge(axis: number, over: number): void;
        support(i: number, c: Float32Array, q: Float32Array, dx: number, dy: number, dz: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        mink(dx: number, dy: number, dz: number): number;
        gjk_epa(): void;
        gjk(): boolean;
        simplex(): boolean;
        simplex_line(): boolean;
        simplex_triangle(): boolean;
        simplex_tetra(): boolean;
        simplex_fill(): boolean;
        face_add(i0: number, i1: number, i2: number): void;
        face_remove(i: number): void;
        horizon_edge(a: number, b: number): void;
        epa(): void;
        epa_emit(f: number): void;
    }
}

declare namespace $ {
    type $bog_gamengine_phys3_solve_world = {
        pos: Float32Array;
        rot: Float32Array;
        vel: Float32Array;
        ang: Float32Array;
        inv_mass: Float32Array;
        inv_inertia: Float32Array;
        flags: Uint8Array;
        sleep_timer: Float32Array;
        friction(): number;
        restitution(): number;
        iterations(): number;
    };
    type $bog_gamengine_phys3_solve_narrow = {
        contact_count: number;
        contact_a: Uint32Array;
        contact_b: Uint32Array;
        contact_point: Float32Array;
        contact_normal: Float32Array;
        contact_depth: Float32Array;
    };
    type $bog_gamengine_phys3_solve_joint = {
        iterate(): void;
    };
    class $bog_gamengine_phys3_solve extends $mol_object2 {
        static beta: number;
        static slop: number;
        static bounce_speed: number;
        static warm_dist: number;
        static flag_sleep: number;
        static flag_ghost: number;
        world: $bog_gamengine_phys3_solve_world;
        cap: number;
        count: number;
        body_a: Uint32Array<ArrayBuffer>;
        body_b: Uint32Array<ArrayBuffer>;
        point: Float32Array<ArrayBuffer>;
        normal: Float32Array<ArrayBufferLike>;
        ra: Float32Array<ArrayBuffer>;
        rb: Float32Array<ArrayBuffer>;
        t1: Float32Array<ArrayBuffer>;
        t2: Float32Array<ArrayBuffer>;
        an_a: Float32Array<ArrayBuffer>;
        an_b: Float32Array<ArrayBuffer>;
        at1_a: Float32Array<ArrayBuffer>;
        at1_b: Float32Array<ArrayBuffer>;
        at2_a: Float32Array<ArrayBuffer>;
        at2_b: Float32Array<ArrayBuffer>;
        mass_n: Float32Array<ArrayBuffer>;
        mass_t1: Float32Array<ArrayBuffer>;
        mass_t2: Float32Array<ArrayBuffer>;
        bias: Float32Array<ArrayBuffer>;
        pn: Float32Array<ArrayBuffer>;
        pt1: Float32Array<ArrayBuffer>;
        pt2: Float32Array<ArrayBuffer>;
        pt: Float32Array<ArrayBuffer>;
        live: Uint8Array<ArrayBuffer>;
        prev_count: number;
        prev_a: Uint32Array<ArrayBuffer>;
        prev_b: Uint32Array<ArrayBuffer>;
        prev_point: Float32Array<ArrayBuffer>;
        prev_pn: Float32Array<ArrayBuffer>;
        prev_pt: Float32Array<ArrayBuffer>;
        hash_cap: number;
        hash_head: Int32Array<ArrayBuffer>;
        hash_next: Int32Array<ArrayBuffer>;
        tmp: Float32Array<ArrayBuffer>;
        grow(need: number): void;
        grow_f32(prev: Float32Array, len: number): Float32Array<ArrayBuffer>;
        grow_u32(prev: Uint32Array, len: number): Uint32Array<ArrayBuffer>;
        solve(world: $bog_gamengine_phys3_solve_world, narrow: $bog_gamengine_phys3_solve_narrow, dt: number, joint?: $bog_gamengine_phys3_solve_joint): number;
        hash_of(a: number, b: number): number;
        hash_build(): void;
        prev_find(a: number, b: number, px: number, py: number, pz: number): number;
        inertia_apply(i: number, vx: number, vy: number, vz: number, out: Float32Array, off: number): void;
        axis_mass(k: number, a: number, b: number, ax: number, ay: number, az: number, out_a: Float32Array, out_b: Float32Array): number;
        wake(i: number): void;
        prepare(narrow: $bog_gamengine_phys3_solve_narrow, dt: number): void;
        rel_vel(k: number, a: number, b: number): Float32Array<ArrayBuffer>;
        apply(k: number, a: number, b: number, axis: Float32Array, ang_a: Float32Array, ang_b: Float32Array, lambda: number): void;
        iterate(friction: number): void;
        remember(): void;
    }
}

declare namespace $ {
    function $bog_gamengine_vec_add(out: Float32Array, a: Float32Array, b: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_sub(out: Float32Array, a: Float32Array, b: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_scale(out: Float32Array, a: Float32Array, k: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_len(a: Float32Array): number;
    function $bog_gamengine_vec_norm(out: Float32Array, a: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_dot(a: Float32Array, b: Float32Array): number;
    function $bog_gamengine_vec_cross(out: Float32Array, a: Float32Array, b: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_lerp(out: Float32Array, a: Float32Array, b: Float32Array, t: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_mat4_apply(out: Float32Array, m: Float32List, v: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_mat4_basis(out: Float32Array, m: Float32List, stride: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_identity(out: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_mul(out: Float32Array, a: Float32Array, b: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_from_axis(out: Float32Array, axis: Float32Array, angle: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_from_euler(out: Float32Array, x: number, y: number, z: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_normalize(out: Float32Array, q: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_rotate(out: Float32Array, q: Float32Array, v: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_integrate(out: Float32Array, q: Float32Array, ang: Float32Array, dt: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_to_mat4(out: Float32Array, q: Float32Array, pos: Float32Array, scale: Float32Array): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_vec_quat_to_euler(out: Float32Array, q: Float32Array): Float32Array<ArrayBufferLike>;
}

declare namespace $ {
    type $bog_gamengine_phys3_joint_world = {
        pos: Float32Array;
        rot: Float32Array;
        vel: Float32Array;
        ang: Float32Array;
        inv_mass: Float32Array;
        inv_inertia: Float32Array;
        flags: Uint8Array;
        sleep_timer: Float32Array;
    };
    class $bog_gamengine_phys3_joint extends $mol_object2 {
        static type_point: number;
        static type_hinge: number;
        static type_slider: number;
        static type_spring: number;
        static beta: number;
        static flag_sleep: number;
        static sleep_speed: number;
        world: $bog_gamengine_phys3_joint_world;
        cap: number;
        count: number;
        type: Uint8Array<ArrayBuffer>;
        a: Uint32Array<ArrayBuffer>;
        b: Uint32Array<ArrayBuffer>;
        anchor_a: Float32Array<ArrayBuffer>;
        anchor_b: Float32Array<ArrayBuffer>;
        axis_a: Float32Array<ArrayBuffer>;
        axis_b: Float32Array<ArrayBuffer>;
        ref_a: Float32Array<ArrayBuffer>;
        ref_b: Float32Array<ArrayBuffer>;
        rel: Float32Array<ArrayBuffer>;
        param: Float32Array<ArrayBuffer>;
        imp_lin: Float32Array<ArrayBuffer>;
        imp_ang: Float32Array<ArrayBuffer>;
        lim: Int8Array<ArrayBuffer>;
        live: Uint8Array<ArrayBuffer>;
        ima: Float32Array<ArrayBuffer>;
        imb: Float32Array<ArrayBuffer>;
        ra: Float32Array<ArrayBuffer>;
        rb: Float32Array<ArrayBuffer>;
        iwa: Float32Array<ArrayBuffer>;
        iwb: Float32Array<ArrayBuffer>;
        axis: Float32Array<ArrayBuffer>;
        u: Float32Array<ArrayBuffer>;
        v: Float32Array<ArrayBuffer>;
        kin: Float32Array<ArrayBuffer>;
        mass_u: Float32Array<ArrayBuffer>;
        mass_v: Float32Array<ArrayBuffer>;
        mass_lim: Float32Array<ArrayBuffer>;
        bias_lin: Float32Array<ArrayBuffer>;
        bias_ang: Float32Array<ArrayBuffer>;
        lim_target: Float32Array<ArrayBuffer>;
        tmp: Float32Array<ArrayBuffer>;
        tmp2: Float32Array<ArrayBuffer>;
        tmp3: Float32Array<ArrayBuffer>;
        mat: Float32Array<ArrayBuffer>;
        q1: Float32Array<ArrayBuffer>;
        q2: Float32Array<ArrayBuffer>;
        q3: Float32Array<ArrayBuffer>;
        grow(need: number): void;
        grow_f32(prev: Float32Array, len: number): Float32Array<ArrayBuffer>;
        grow_u32(prev: Uint32Array, len: number): Uint32Array<ArrayBuffer>;
        grow_u8(prev: Uint8Array, len: number): Uint8Array<ArrayBuffer>;
        add(type: number, a: number, b: number, anchor_a: ArrayLike<number>, anchor_b: ArrayLike<number>, axis?: ArrayLike<number>, param?: ArrayLike<number>): number;
        remove(index: number): number;
        body_remove(index: number, last: number): void;
        rotate_inv(out: Float32Array, q: Float32Array, v: Float32Array): Float32Array<ArrayBufferLike>;
        perp(nx: number, ny: number, nz: number, out: Float32Array): Float32Array<ArrayBufferLike>;
        inertia_world(i: number, out: Float32Array, off: number): void;
        invert3(src: Float32Array, soff: number, dst: Float32Array, doff: number): void;
        quad(m: Float32Array, off: number, x: number, y: number, z: number): number;
        mass_lin(k: number, nx: number, ny: number, nz: number): number;
        mass_ang(k: number, nx: number, ny: number, nz: number): number;
        kin_lin(k: number): void;
        kin_skew(r: Float32Array, r3: number, iw: Float32Array, i9: number, m: Float32Array): void;
        kin_ang(k: number): void;
        rel_vel(k: number): Float32Array<ArrayBuffer>;
        rel_ang(k: number): Float32Array<ArrayBuffer>;
        apply_lin(k: number, lx: number, ly: number, lz: number): void;
        apply_ang(k: number, tx: number, ty: number, tz: number): void;
        active(i: number): boolean;
        moving(i: number): boolean;
        wake(i: number): void;
        prepare(world: $bog_gamengine_phys3_joint_world, dt: number): void;
        iterate(): void;
    }
}

declare namespace $ {
    class $bog_gamengine_phys3 extends $mol_object2 {
        static shape_sphere: number;
        static shape_box: number;
        static shape_capsule: number;
        static shape_plane: number;
        static shape_hull: number;
        static flag_sleep: number;
        static flag_ghost: number;
        static flag_kinematic: number;
        static sleep_speed: number;
        static sleep_time: number;
        static stat_window: number;
        cap: number;
        count: number;
        pos: Float32Array<ArrayBuffer>;
        rot: Float32Array<ArrayBuffer>;
        vel: Float32Array<ArrayBuffer>;
        ang: Float32Array<ArrayBuffer>;
        mass: Float32Array<ArrayBuffer>;
        inv_mass: Float32Array<ArrayBuffer>;
        inv_inertia: Float32Array<ArrayBuffer>;
        shape: Uint8Array<ArrayBuffer>;
        size: Float32Array<ArrayBuffer>;
        flags: Uint8Array<ArrayBuffer>;
        trans: Float32Array<ArrayBuffer>;
        aabb: Float32Array<ArrayBuffer>;
        sleep_timer: Float32Array<ArrayBuffer>;
        hull_off: Uint32Array<ArrayBuffer>;
        hull_count: Uint32Array<ArrayBuffer>;
        hull: Float32Array<ArrayBuffer>;
        hull_len: number;
        handle_at: Int32Array<ArrayBuffer>;
        index_at: Int32Array<ArrayBuffer>;
        handle_seq: number;
        free: Int32Array<ArrayBuffer>;
        free_count: number;
        pos_view: Float32Array[];
        rot_view: Float32Array[];
        ang_view: Float32Array[];
        trans_view: Float32Array[];
        tmp_scale: Float32Array<ArrayBuffer>;
        tmp_point: Float32Array<ArrayBuffer>;
        broad: $bog_gamengine_phys3_broad;
        narrow: $bog_gamengine_phys3_narrow;
        solve: $bog_gamengine_phys3_solve;
        joint: $bog_gamengine_phys3_joint;
        constructor();
        gravity(next?: Float32Array): Float32Array<ArrayBufferLike>;
        friction(next?: number): number;
        restitution(next?: number): number;
        iterations(next?: number): number;
        pull(): void;
        grow(need: number): void;
        views(buf: Float32Array, stride: number): Float32Array<ArrayBufferLike>[];
        grow_f32(prev: Float32Array, len: number): Float32Array<ArrayBuffer>;
        add(shape: number, size: Float32Array, mass: number, pos: Float32Array, rot?: Float32Array): number;
        handle_grow(need: number): void;
        handle_new(index: number): number;
        index_of(handle: number): number;
        handle_of(index: number): number;
        pos_of(handle: number): Float32Array<ArrayBufferLike> | null;
        rot_of(handle: number): Float32Array<ArrayBufferLike> | null;
        mass_of(handle: number, next?: number): number;
        flag_set(i: number, flag: number, on: boolean): void;
        ghost_of(handle: number, next?: boolean): boolean;
        kinematic_of(handle: number, next?: boolean): boolean;
        move(handle: number, pos: ArrayLike<number>, rot?: ArrayLike<number>): boolean;
        mass_set(i: number, mass: number): void;
        remove(handle: number): boolean;
        drop(index: number): number;
        swap(index: number, last: number): void;
        hull_points(index: number, points: Float32Array): void;
        scale_of(i: number): Float32Array<ArrayBuffer>;
        trans_write(i: number): void;
        timestep: number;
        max_steps: number;
        pending: number;
        steps_done: number;
        times: Float32Array<ArrayBuffer>;
        samples: number;
        step(dt: number): void;
        step_ms(): number;
        step_world(dt: number): void;
        step_time(dt: number): void;
        substep(dt: number): void;
        bounds(): void;
        bounds_of(i: number): void;
    }
}

declare namespace $ {
    class $bog_gamengine_scene extends $bog_gamengine_node {
        clock(next?: $bog_gamengine_clock): $bog_gamengine_clock;
        is_scene(): boolean;
        auto_nodes(next?: readonly $bog_gamengine_node[]): readonly $bog_gamengine_node[];
        nodes(): readonly $bog_gamengine_node[];
        by_role(role: string): readonly $bog_gamengine_node[];
        by_role_one(role: string): $bog_gamengine_node;
        lights(): readonly $bog_gamengine_light[];
        Shader_sprite(next?: $bog_gamengine_shader): $bog_gamengine_shader | $bog_gamengine_shader_sprite;
        Shader_solid(next?: $bog_gamengine_shader): $bog_gamengine_shader | $bog_gamengine_shader_solid;
        Shader_plain(next?: $bog_gamengine_shader): $bog_gamengine_shader | $bog_gamengine_shader_solid_plain;
        Shape_quad(next?: $bog_gamengine_shape): $bog_gamengine_shape;
        Batch(key: string): $bog_gamengine_batch;
        node_source(node: $bog_gamengine_node): $bog_gamengine_batch_source | null;
        node_drawn(node: $bog_gamengine_node): boolean;
        node_shader(node: $bog_gamengine_batch_group_node): $bog_gamengine_shader | $bog_gamengine_shader_sprite | $bog_gamengine_shader_solid | $bog_gamengine_shader_solid_plain;
        node_shape(node: $bog_gamengine_batch_group_node): $bog_gamengine_shape;
        auto_batches(): readonly $bog_gamengine_batch[];
        batches(next?: readonly $bog_gamengine_batch[]): readonly $bog_gamengine_batch[];
        phys(next?: $bog_gamengine_phys | null): $bog_gamengine_phys | null;
        phys3(next?: $bog_gamengine_phys3 | null): $bog_gamengine_phys3 | null;
        input(next?: $bog_gamengine_input | null): $bog_gamengine_input | null;
        cam(next?: $bog_gamengine_cam | null): $bog_gamengine_cam | null;
        aspect(next?: number): number;
        frame_done: number;
        frustum: Float32Array<ArrayBuffer>;
        eye: Float32Array<ArrayBuffer>;
        snap: Float32Array<ArrayBuffer>;
        snap_count: number;
        snap_frame: number;
        kin(): Int32Array<ArrayBuffer>;
        shown_fill(nodes: readonly $bog_gamengine_node[], owner: Int32Array): void;
        snapshot(): Float32Array;
        snapshot_count(): number;
        snapshot_version(): number;
        snap_fill(nodes: readonly $bog_gamengine_node[]): void;
        step(): number;
    }
}

declare namespace $ {
    type $bog_gamengine_shape_gltf_doc = {
        meshes?: readonly {
            primitives?: readonly {
                attributes: Record<string, number>;
                indices?: number;
            }[];
        }[];
        accessors?: readonly {
            bufferView?: number;
            byteOffset?: number;
            componentType: number;
            count: number;
            type: string;
        }[];
        bufferViews?: readonly {
            buffer: number;
            byteOffset?: number;
            byteLength: number;
            byteStride?: number;
        }[];
        nodes?: readonly {
            name?: string;
            children?: readonly number[];
            translation?: readonly number[];
            rotation?: readonly number[];
            scale?: readonly number[];
        }[];
        skins?: readonly {
            joints: readonly number[];
            inverseBindMatrices?: number;
        }[];
        animations?: readonly {
            name?: string;
            channels: readonly {
                sampler: number;
                target: {
                    node?: number;
                    path: string;
                };
            }[];
            samplers: readonly {
                input: number;
                output: number;
                interpolation?: string;
            }[];
        }[];
    };
    type $bog_gamengine_shape_gltf_skeleton = {
        count: number;
        names: readonly string[];
        parents: Int32Array;
        order: Int32Array;
        base: Float32Array;
        binds: Float32Array;
    };
    type $bog_gamengine_shape_gltf_path = 'translation' | 'rotation' | 'scale';
    type $bog_gamengine_shape_gltf_channel = {
        joint: number;
        path: $bog_gamengine_shape_gltf_path;
        step: boolean;
        times: Float32Array;
        values: Float32Array;
    };
    type $bog_gamengine_shape_gltf_clip = {
        name: string;
        duration: number;
        channels: readonly $bog_gamengine_shape_gltf_channel[];
    };
    class $bog_gamengine_shape_gltf extends $bog_gamengine_shape {
        data(next?: ArrayBuffer | null): ArrayBuffer | null;
        chunks(): {
            json: $bog_gamengine_shape_gltf_doc;
            bin: ArrayBuffer | null;
        };
        json(next?: $bog_gamengine_shape_gltf_doc): $bog_gamengine_shape_gltf_doc;
        bin(next?: ArrayBuffer): ArrayBuffer;
        accessor(index: number): Float32Array<ArrayBuffer>;
        arrays(): {
            geometry: Float32Array<ArrayBuffer>;
            normals: Float32Array<ArrayBuffer>;
            skin: Float32Array<ArrayBuffer>;
            joints: Float32Array<ArrayBuffer>;
            weights: Float32Array<ArrayBuffer>;
        };
        geometry(): Float32Array<ArrayBuffer>;
        normals(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
        joints(): Float32Array<ArrayBuffer>;
        weights(): Float32Array<ArrayBuffer>;
        skeleton(): $bog_gamengine_shape_gltf_skeleton | null;
        clips(): Map<string, $bog_gamengine_shape_gltf_clip>;
        mode(): "triangles";
    }
}

declare namespace $ {
    class $bog_gamengine_watch extends $mol_object2 {
        seen: unknown[];
        at: number;
        same: boolean;
        open(): this;
        of<Value>(value: Value): Value;
        fresh(): boolean;
    }
}

declare namespace $ {
    const $bog_gamengine_skin_max = 64;
    const $bog_gamengine_skin_empty: Float32Array<ArrayBuffer>;
    function $bog_gamengine_skin_mat_trs(out: Float32Array, at: number, trs: Float32Array, from: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_skin_mat_mul(out: Float32Array, at: number, left: Float32Array, left_at: number, right: Float32Array, right_at: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_skin_quat_mix(out: Float32Array, at: number, left: Float32Array, left_at: number, right: Float32Array, right_at: number, weight: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_skin_sample(channel: $bog_gamengine_shape_gltf_channel, time: number, out: Float32Array, at: number): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_skin_bones(batch: {
        nodes(): readonly unknown[];
    }): Float32Array<ArrayBuffer> | null;
    function $bog_gamengine_skin_shape_joints(shape: unknown): Float32Array<ArrayBufferLike>;
    function $bog_gamengine_skin_shape_weights(shape: unknown): Float32Array<ArrayBufferLike>;
    class $bog_gamengine_skin extends $mol_object2 {
        shape(next?: $bog_gamengine_shape_gltf | null): $bog_gamengine_shape_gltf | null;
        clip(next?: string): string;
        mix(next?: string): string;
        weight(next?: number): number;
        time(next?: number): number;
        loop(next?: boolean): boolean;
        speed(next?: number): number;
        blend(clip: string, weight: number): number;
        duration(): number;
        version: number;
        bones: Float32Array<ArrayBuffer>;
        locals: Float32Array<ArrayBuffer>;
        worlds: Float32Array<ArrayBuffer>;
        trs_main: Float32Array<ArrayBuffer>;
        trs_mix: Float32Array<ArrayBuffer>;
        watch: $bog_gamengine_watch;
        prepare(): Float32Array<ArrayBuffer>;
        apply(clip: $bog_gamengine_shape_gltf_clip | undefined, time: number, trs: Float32Array, count: number, base: Float32Array): Float32Array<ArrayBufferLike>;
        pose(): Float32Array<ArrayBuffer>;
        step(dt: number): void;
    }
}

declare namespace $ {
    class $bog_gamengine_skin_gl_data extends Object {
        readonly gl: WebGL2RenderingContext;
        readonly width: number;
        readonly height: number;
        readonly native: WebGLTexture;
        constructor(gl: WebGL2RenderingContext, width: number, height: number);
        send(floats: Float32Array): Float32Array<ArrayBufferLike>;
        dispose(): this;
    }
    function $bog_gamengine_skin_gl_bones(gl: WebGL2RenderingContext): $bog_gamengine_skin_gl_data;
}

declare namespace $ {
    class $bog_gamengine_shader_depth extends $bog_gamengine_shader {
        face(): {
            readonly glob: {
                readonly shadow_mat: "mat4";
            };
            readonly input: {
                readonly vertex: "vec3";
                readonly uv: "vec2";
                readonly normal: "vec3";
                readonly inst_trans: "mat4";
                readonly inst_tint: "vec4";
                readonly inst_layer: "float";
                readonly inst_uv: "vec4";
                readonly inst_material: "vec4";
                readonly inst_normal_layer: "float";
            };
        };
        vert(): string;
        frag(): string;
    }
}

declare namespace $ {

	export class $bog_gamengine_draw extends $mol_view {
		width( ): number
		height( ): number
		dom_name( ): string
		field( ): ({ 
			'width': ReturnType< $bog_gamengine_draw['width'] >,
			'height': ReturnType< $bog_gamengine_draw['height'] >,
		})  & ReturnType< $mol_view['field'] >
		dpr( ): number
		scene( ): $bog_gamengine_scene
		cam( ): $bog_gamengine_cam
		light_dir( ): Float32Array
		clear( next?: Float32Array ): Float32Array
		fog( next?: Float32Array ): Float32Array
		fog_color( next?: Float32Array ): Float32Array
		ambient( ): number
		wireframe( next?: boolean ): boolean
		shadows( next?: boolean ): boolean
		shadow_size( next?: number ): number
		shadow_range( next?: number ): number
		post( next?: boolean ): boolean
		Tone( ): $bog_gamengine_shader_post_tone
		passes( ): readonly(any)[]
		stat( ): string
		peak( ): number
		report( ): ({ 
			'tick': number,
			'fill': number,
			'shadow': number,
			'main': number,
			'post': number,
			'batches': number,
			'instances': number,
			'draws': number,
			'triangles': number,
			'bytes': number,
		}) 
	}
	
}

//# sourceMappingURL=draw.view.tree.d.ts.map
declare namespace $.$$ {
    type $bog_gamengine_draw_face = {
        glob: {
            proj: 'mat4';
            view: 'mat4';
            atlas: 'sampler2DArray';
            atlas_data: 'sampler2DArray';
            light_count: 'int';
            light_pos: 'vec4[8]';
            light_dir: 'vec4[8]';
            light_color: 'vec4[8]';
            ambient: 'vec3';
            cam_pos: 'vec3';
            wireframe: 'float';
            fog: 'vec2';
            fog_color: 'vec3';
            shadow_mat: 'mat4';
            shadow_map: 'sampler2DShadow';
            shadow_light: 'int';
            bones: 'sampler2D';
        };
        input: {
            vertex: 'vec3';
            uv: 'vec2';
            normal: 'vec3';
            inst_trans: 'mat4';
            inst_tint: 'vec4';
            inst_layer: 'float';
            inst_uv: 'vec4';
            inst_material: 'vec4';
            inst_normal_layer: 'float';
            joints: 'vec4';
            weights: 'vec4';
        };
    };
    export type $bog_gamengine_draw_step = {
        readonly shader: $bog_gamengine_shader_post;
        readonly from: string;
        readonly extra: string | null;
        readonly out: string | null;
    };
    export class $bog_gamengine_draw_slot extends Object {
        batch: $bog_gamengine_batch;
        program: $bog_gamengine_gl_program<$bog_gamengine_draw_face>;
        proj: WebGLUniformLocation | null;
        view: WebGLUniformLocation | null;
        light_count: WebGLUniformLocation | null;
        light_pos: WebGLUniformLocation | null;
        light_dir: WebGLUniformLocation | null;
        light_color: WebGLUniformLocation | null;
        ambient: WebGLUniformLocation | null;
        cam_pos: WebGLUniformLocation | null;
        fog: WebGLUniformLocation | null;
        fog_color: WebGLUniformLocation | null;
        wireframe: WebGLUniformLocation | null;
        shadow_mat: WebGLUniformLocation | null;
        shadow_map: WebGLUniformLocation | null;
        shadow_light: WebGLUniformLocation | null;
        bones: WebGLUniformLocation | null;
        bones_tex: $bog_gamengine_skin_gl_data | null;
        depth: boolean;
        ready: boolean;
        vao: WebGLVertexArrayObject;
        vertex: $bog_gamengine_gl_buffer;
        live: boolean;
        trans: $bog_gamengine_gl_buffer;
        tint: $bog_gamengine_gl_buffer;
        layer: $bog_gamengine_gl_buffer | null;
        uv: $bog_gamengine_gl_buffer | null;
        material: $bog_gamengine_gl_buffer | null;
        normal_layer: $bog_gamengine_gl_buffer | null;
        buffers: $bog_gamengine_gl_buffer[];
        atlas: $bog_gamengine_atlas | null;
        sampler: WebGLUniformLocation | null;
        tex: $bog_gamengine_draw_tex | null;
        sampler_data: WebGLUniformLocation | null;
        tex_data: $bog_gamengine_draw_tex | null;
        prim: GLenum;
        wire: GLenum | null;
        size: number;
        cap: number;
        tris: number;
        stride: number;
        bytes_shape: number;
        bytes: number;
        dispose(gl: WebGL2RenderingContext): this;
    }
    export class $bog_gamengine_draw_tex extends Object {
        atlas: $bog_gamengine_atlas;
        native: WebGLTexture | null;
        dispose(gl: WebGL2RenderingContext): this;
    }
    export function $bog_gamengine_draw_shadow_mat(dir: Float32Array, at: number, center: Float32Array, range: number, out: Float32Array): Float32Array<ArrayBufferLike>;
    export class $bog_gamengine_draw extends $.$bog_gamengine_draw {
        slots_all: WeakMap<$bog_gamengine_batch, $bog_gamengine_draw_slot>;
        slots_last: readonly $bog_gamengine_draw_slot[];
        textures_all: WeakMap<$bog_gamengine_atlas, $bog_gamengine_draw_tex>;
        textures_last: readonly $bog_gamengine_draw_tex[];
        ambient_vec: Float32Array<ArrayBuffer>;
        cam_pos_vec: Float32Array<ArrayBuffer>;
        fog_vec: Float32Array<ArrayBuffer>;
        fog_color_vec: Float32Array<ArrayBuffer>;
        lights_pos: Float32Array<ArrayBuffer>;
        lights_dir: Float32Array<ArrayBuffer>;
        lights_color: Float32Array<ArrayBuffer>;
        lights_count: number;
        wire_off: Float32Array<ArrayBuffer>;
        wire_on: Float32Array<ArrayBuffer>;
        shadow_mat_buf: Float32Array<ArrayBuffer>;
        shadow_last: $bog_gamengine_gl_depth_target | null;
        sun_at: number;
        shadow_at: number;
        gaps: Float32Array<ArrayBuffer>;
        ticks: Float32Array<ArrayBuffer>;
        steps_ms: Float32Array<ArrayBuffer>;
        fills_ms: Float32Array<ArrayBuffer>;
        shadows_ms: Float32Array<ArrayBuffer>;
        mains_ms: Float32Array<ArrayBuffer>;
        posts_ms: Float32Array<ArrayBuffer>;
        batches_ring: Float32Array<ArrayBuffer>;
        instances_ring: Float32Array<ArrayBuffer>;
        draws_ring: Float32Array<ArrayBuffer>;
        triangles_ring: Float32Array<ArrayBuffer>;
        bytes_ring: Float32Array<ArrayBuffer>;
        count_batches: number;
        count_instances: number;
        count_draws: number;
        count_triangles: number;
        count_bytes: number;
        texel_vec: Float32Array<ArrayBuffer>;
        post_last: Map<string, $bog_gamengine_gl_color_target>;
        blank_data_last: WebGLTexture | null;
        post_vao_last: WebGLVertexArrayObject | null;
        samples: number;
        paint_at: number;
        context(): WebGL2RenderingContext;
        dpr(): number;
        width(): number;
        height(): number;
        viewport(): readonly [0, 0, number, number];
        scissor(): readonly [0, 0, number, number];
        render(): void;
        light_dir(next?: Float32Array): Float32Array<ArrayBufferLike>;
        clear(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        fog(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        fog_color(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        proj(): $mol_3d_mat4;
        slots(): readonly $bog_gamengine_draw_slot[];
        slot_drop(slot: $bog_gamengine_draw_slot): $bog_gamengine_draw_slot;
        tex_drop(tex: $bog_gamengine_draw_tex): $bog_gamengine_draw_tex;
        shadow_shader(): $bog_gamengine_shader_depth;
        shadow_target(): $bog_gamengine_gl_depth_target;
        post_plan(): readonly $bog_gamengine_draw_step[];
        post_targets(): readonly string[];
        post_vao(): WebGLVertexArrayObject;
        post_drop(): this;
        destructor(): void;
        slot(batch: $bog_gamengine_batch): $bog_gamengine_draw_slot | null;
        shape_ready(shape: $bog_gamengine_shape): boolean;
        tex(atlas: $bog_gamengine_atlas): $bog_gamengine_draw_tex;
        tex_fill(gl: WebGL2RenderingContext, textures: $bog_gamengine_draw_tex[], tex: $bog_gamengine_draw_tex | null): $bog_gamengine_draw_tex | null;
        blank_data(): WebGLTexture;
        textures(): readonly $bog_gamengine_draw_tex[];
        lights_fill(): number;
        step(): number;
        paint(): void;
        post_run(gl: WebGL2RenderingContext, plan: readonly $bog_gamengine_draw_step[]): number;
        slot_send(gl: WebGL2RenderingContext, slot: $bog_gamengine_draw_slot): boolean;
        count_fill(slots: readonly $bog_gamengine_draw_slot[]): number;
        shadow_pass(gl: WebGL2RenderingContext, slots: readonly $bog_gamengine_draw_slot[]): $bog_gamengine_gl_depth_target;
        paint_slot(gl: WebGL2RenderingContext, slot: $bog_gamengine_draw_slot, proj: Float32Array, view: Float32Array, wireframe: boolean): void;
        measure(at_start: number, at_step: number, at_prep: number, at_fill: number, at_shadow: number, at_main: number, at_post: number): void;
        mean(ring: Float32Array, size: number): number;
        report(): {
            tick: number;
            fill: number;
            shadow: number;
            main: number;
            post: number;
            batches: number;
            instances: number;
            draws: number;
            triangles: number;
            bytes: number;
        };
        peak(): number;
        stat(): string;
    }
    export {};
}

declare namespace $.$$ {
}

declare namespace $ {
    class $bog_gamengine_shape_plane extends $bog_gamengine_shape {
        tile(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        geometry(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
        normals(): Float32Array<ArrayBuffer>;
    }
}

declare namespace $ {
    class $bog_gamengine_cam_deep extends $bog_gamengine_cam {
        fov(next?: number): number;
        near(next?: number): number;
        far(next?: number): number;
        follow(next?: $bog_gamengine_node | null): $bog_gamengine_node | null;
        lift(next?: number): number;
        step(dt: number): void;
        props(): readonly $bog_gamengine_prop[];
        proj(aspect: number): $mol_3d_mat4;
    }
}

declare namespace $ {
    class $bog_gamengine_shape_box extends $bog_gamengine_shape {
        geometry(): Float32Array<ArrayBuffer>;
        skin(): Float32Array<ArrayBuffer>;
        normals(): Float32Array<ArrayBuffer>;
        count(): number;
    }
}

declare namespace $ {
    type $bog_gamengine_mesh_lod = {
        dist: number;
        shape: $bog_gamengine_shape;
    };
    class $bog_gamengine_mesh extends $bog_gamengine_node {
        lods(next?: readonly $bog_gamengine_mesh_lod[]): readonly $bog_gamengine_mesh_lod[];
        radius(): number;
        shape(next?: $bog_gamengine_shape): $bog_gamengine_shape;
        atlas(next?: $bog_gamengine_atlas | null): $bog_gamengine_atlas | null;
        frame(next?: string): string;
        size(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        material(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        normal_frame(next?: string): string;
        props(): readonly $bog_gamengine_prop[];
        layer(): number;
        normal_layer(): number;
        uv(): Float32Array<ArrayBuffer>;
        box_local(): Float32Array<ArrayBuffer> | null;
        trans(): $mol_3d_mat4;
    }
}

declare namespace $ {
    class $bog_gamengine_sprite extends $bog_gamengine_node {
        atlas(next?: $bog_gamengine_atlas | null): $bog_gamengine_atlas | null;
        frame(next?: string): string;
        clip(next?: string): string;
        fps(next?: number): number;
        clock(next?: $bog_gamengine_clock | null): $bog_gamengine_clock | null;
        clips(next?: Record<string, readonly string[]>): Record<string, readonly string[]>;
        flip_x(next?: boolean): boolean;
        size(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        props(): readonly $bog_gamengine_prop[];
        radius(): number;
        frame_now(): string;
        layer(): number;
        uv(): Float32Array<ArrayBuffer>;
        box_local(): Float32Array<ArrayBuffer>;
        trans(): $mol_3d_mat4;
    }
}

declare namespace $ {
    class $bog_gamengine_particle_pool extends $mol_object2 {
        cap(next?: number): number;
        count: number;
        pos: Float32Array<ArrayBuffer>;
        vel: Float32Array<ArrayBuffer>;
        age: Float32Array<ArrayBuffer>;
        life: Float32Array<ArrayBuffer>;
        size: Float32Array<ArrayBuffer>;
        seed: Float32Array<ArrayBuffer>;
        trans: Float32Array<ArrayBuffer>;
        tint: Float32Array<ArrayBuffer>;
        layer: Float32Array<ArrayBuffer>;
        uv: Float32Array<ArrayBuffer>;
        aabb: Float32Array<ArrayBuffer>;
        fit(): number;
        kill(index: number): void;
    }
    class $bog_gamengine_particle extends $bog_gamengine_node {
        pool(next?: $bog_gamengine_particle_pool): $bog_gamengine_particle_pool;
        atlas(next?: $bog_gamengine_atlas | null): $bog_gamengine_atlas | null;
        is_source(): boolean;
        source(): $bog_gamengine_batch_source;
        rate(next?: number): number;
        life(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        speed(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        spread(next?: number): number;
        dir(next?: ArrayLike<number> | null): Float32Array<ArrayBufferLike> | null;
        gravity(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        size(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        color(next?: ArrayLike<number>): Float32Array<ArrayBufferLike>;
        frame(next?: string): string;
        frames(next?: readonly string[]): readonly string[];
        world_space(next?: boolean): boolean;
        seed(next?: number): number;
        props(): readonly $bog_gamengine_prop[];
        layers(): Float32Array<ArrayBuffer>;
        rand_state: number;
        rand_seed: number;
        accum: number;
        origin: Float32Array<ArrayBuffer>;
        axis: Float32Array<ArrayBuffer>;
        side: Float32Array<ArrayBuffer>;
        up: Float32Array<ArrayBuffer>;
        basis: Float32Array<ArrayBuffer>;
        local: Float32Array<ArrayBuffer>;
        rand(): number;
        frame_of(world: Float32Array): void;
        spawn(n: number, at?: Float32Array | null): number;
        burst(n: number, at?: Float32Array | null): number;
        integrate(dt: number): void;
        emit(): void;
        step(dt: number): void;
    }
    function $bog_gamengine_particle_mat_mul(out: Float32Array, at: number, a: Float32Array, b: Float32Array): Float32Array<ArrayBufferLike>;
}

declare namespace $ {
    type $bog_atelier_lexicon_kind = 'sigil' | 'sign';
    type $bog_atelier_lexicon_canon = 'manga' | 'fan';
    type $bog_atelier_lexicon_element = 'fire' | 'water' | 'air' | 'earth' | 'light';
    type $bog_atelier_lexicon_entry = {
        id: string;
        kind: $bog_atelier_lexicon_kind;
        title: string;
        note: string;
        canon: $bog_atelier_lexicon_canon;
        strokes: readonly $bog_atelier_ink_line[];
        element?: $bog_atelier_lexicon_element;
    };
    const $bog_atelier_lexicon_list: readonly $bog_atelier_lexicon_entry[];
    function $bog_atelier_lexicon_entry(id: string): $bog_atelier_lexicon_entry | null;
    function $bog_atelier_lexicon_of(kind: $bog_atelier_lexicon_kind): $bog_atelier_lexicon_entry[];
    function $bog_atelier_lexicon_path(entry: $bog_atelier_lexicon_entry): string;
}

declare namespace $ {
    type $bog_atelier_read_cloud = readonly number[];
    type $bog_atelier_read_template = {
        id: string;
        cloud: $bog_atelier_read_cloud;
    };
    function $bog_atelier_read_cloud(lines: readonly $bog_atelier_ink_line[], count?: number): $bog_atelier_read_cloud;
    function $bog_atelier_read_normal(points: readonly number[]): number[];
    function $bog_atelier_read_cost(a: $bog_atelier_read_cloud, b: $bog_atelier_read_cloud, start: number): number;
    function $bog_atelier_read_distance(a: $bog_atelier_read_cloud, b: $bog_atelier_read_cloud): number;
    function $bog_atelier_read_rank(cloud: $bog_atelier_read_cloud, templates: readonly $bog_atelier_read_template[]): {
        id: string;
        distance: number;
    }[];
}

declare namespace $ {
    type $bog_atelier_glyph_mark = {
        kind: $bog_atelier_lexicon_kind;
        id: string | null;
        lines: readonly number[];
        x: number;
        y: number;
        angle: number;
        size: number;
        inverted: boolean;
        distance: number;
        rank: readonly {
            id: string;
            distance: number;
        }[];
    };
    type $bog_atelier_glyph_ring = {
        x: number;
        y: number;
        r: number;
        wobble: number;
        gap: number;
        gap_at: number;
        covered: number;
    };
    type $bog_atelier_glyph_reading = {
        ring: $bog_atelier_glyph_ring | null;
        ring_lines: readonly number[];
        closed: boolean;
        sigil: $bog_atelier_glyph_mark | null;
        signs: readonly $bog_atelier_glyph_mark[];
        stray: readonly $bog_atelier_glyph_mark[];
    };
    const $bog_atelier_glyph_band = 0.13;
    const $bog_atelier_glyph_core = 0.42;
    const $bog_atelier_glyph_accept = 0.09;
    const $bog_atelier_glyph_margin = 1.15;
    const $bog_atelier_glyph_flip = 1.25;
    const $bog_atelier_glyph_closure: number;
    function $bog_atelier_glyph_templates(kind: $bog_atelier_lexicon_kind): readonly $bog_atelier_read_template[];
    function $bog_atelier_glyph_ring_find(lines: readonly $bog_atelier_ink_line[]): {
        ring: $bog_atelier_glyph_ring;
        parts: number[];
    } | null;
    function $bog_atelier_glyph_groups(lines: readonly $bog_atelier_ink_line[], indexes: readonly number[], pad: number): number[][];
    function $bog_atelier_glyph_local(line: $bog_atelier_ink_line, ring: $bog_atelier_glyph_ring): number[];
    function $bog_atelier_glyph_mark_read(lines: readonly $bog_atelier_ink_line[], group: readonly number[], ring: $bog_atelier_glyph_ring): $bog_atelier_glyph_mark;
    const $bog_atelier_glyph_sigil_size = 0.52;
    const $bog_atelier_glyph_sign_size = 0.26;
    const $bog_atelier_glyph_sign_orbit = 0.72;
    function $bog_atelier_glyph_sigil(id: string, size?: number): number[][];
    function $bog_atelier_glyph_sign(id: string, angle: number, orbit?: number, size?: number, inverted?: boolean): number[][];
    function $bog_atelier_glyph_circle(gap?: number, gap_at?: number, r?: number): number[];
    function $bog_atelier_glyph_read(lines: readonly $bog_atelier_ink_line[]): $bog_atelier_glyph_reading;
}

declare namespace $ {
    type $bog_atelier_spell_form = 'still' | 'jet' | 'ball' | 'fan' | 'bolt' | 'vortex' | 'dust' | 'mend';
    type $bog_atelier_spell = {
        element: $bog_atelier_lexicon_element | null;
        sigil: string | null;
        form: $bog_atelier_spell_form;
        power: number;
        neat: number;
        life: number;
        lift: number;
        tilt_x: number;
        tilt_y: number;
        spread: number;
        focus: number;
        hover: number;
        misfire: boolean;
        counts: Readonly<Record<string, number>>;
        flipped: Readonly<Record<string, number>>;
    };
    function $bog_atelier_spell_empty(): $bog_atelier_spell;
    const $bog_atelier_spell_leaners: readonly string[];
    function $bog_atelier_spell_of(reading: $bog_atelier_glyph_reading, sheet?: number): $bog_atelier_spell;
}

declare namespace $ {
    function $bog_atelier_spell_story(spell: $bog_atelier_spell): string[];
}

declare namespace $ {
    class $bog_atelier_voice_bed extends $mol_object2 {
        stop: () => void;
        destructor(): void;
    }
    class $bog_atelier_voice extends $mol_object2 {
        static enabled(next?: boolean): boolean;
        static volume(): number;
        static context: AudioContext | null;
        static audio(): AudioContext | null;
        static noise(ctx: AudioContext): AudioBuffer;
        static chime(element: string | null, misfire: boolean): void;
        static bed(element: string | null, misfire: boolean, power: number): $bog_atelier_voice_bed;
    }
}

declare namespace $ {
    const $bog_atelier_cast_art_span = 1.25;
    function $bog_atelier_cast_art_paper(lines: readonly $bog_atelier_ink_line[], size?: number): HTMLCanvasElement;
    function $bog_atelier_cast_art_glow(lines: readonly $bog_atelier_ink_line[], size?: number): HTMLCanvasElement;
    function $bog_atelier_cast_art_spark(size?: number): HTMLCanvasElement;
    function $bog_atelier_cast_art_mote(size?: number): HTMLCanvasElement;
}

declare namespace $ {
    class $bog_atelier_cast_conductor extends $bog_gamengine_node {
        key(): number;
        flow(): $bog_gamengine_particle | null;
        core(): $bog_gamengine_particle | null;
        glow(): $bog_gamengine_node | null;
        lamp(): $bog_gamengine_light | null;
        form(): string;
        life(): number;
        flow_rate(): number;
        core_rate(): number;
        glow_color(): ArrayLike<number>;
        lamp_color(): ArrayLike<number>;
        lamp_power(): number;
        neat(): number;
        spent(next?: boolean): boolean;
        last: number;
        time: number;
        shake: number;
        owed: number;
        volley: number;
        at: Float32Array<ArrayBuffer>;
        shade: Float32Array<ArrayBuffer>;
        charge(): number;
        fade(): number;
        restart(): void;
        inflow(flow: $bog_gamengine_particle, count: number, twist: number, lift: number): void;
        floor(flow: $bog_gamengine_particle): void;
        step(dt: number): void;
    }
}

declare namespace $ {

	type $bog_gamengine_draw__scene_bog_atelier_cast_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Scene'] >
		,
		ReturnType< $bog_gamengine_draw['scene'] >
	>
	type $bog_gamengine_draw__cam_bog_atelier_cast_2 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Eye'] >
		,
		ReturnType< $bog_gamengine_draw['cam'] >
	>
	type $bog_gamengine_draw__clear_bog_atelier_cast_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['clear'] >
		,
		ReturnType< $bog_gamengine_draw['clear'] >
	>
	type $bog_gamengine_draw__ambient_bog_atelier_cast_4 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_draw['ambient'] >
	>
	type $bog_gamengine_draw__shadows_bog_atelier_cast_5 = $mol_type_enforce<
		boolean
		,
		ReturnType< $bog_gamengine_draw['shadows'] >
	>
	type $bog_gamengine_draw__passes_bog_atelier_cast_6 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_gamengine_draw['passes'] >
	>
	type __bog_atelier_cast_7 = $mol_type_enforce<
		Parameters< $bog_atelier_cast['spent'] >[0]
		,
		Parameters< ReturnType< $bog_atelier_cast['Conductor'] >['spent'] >[0]
	>
	type $bog_gamengine_scene__clock_bog_atelier_cast_8 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Clock'] >
		,
		ReturnType< $bog_gamengine_scene['clock'] >
	>
	type $bog_gamengine_scene__kids_bog_atelier_cast_9 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['nodes'] >
		,
		ReturnType< $bog_gamengine_scene['kids'] >
	>
	type $bog_gamengine_scene__cam_bog_atelier_cast_10 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Eye'] >
		,
		ReturnType< $bog_gamengine_scene['cam'] >
	>
	type $bog_gamengine_cam_deep__pos_bog_atelier_cast_11 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['eye_pos'] >
		,
		ReturnType< $bog_gamengine_cam_deep['pos'] >
	>
	type $bog_gamengine_cam_deep__rot_bog_atelier_cast_12 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['eye_rot'] >
		,
		ReturnType< $bog_gamengine_cam_deep['rot'] >
	>
	type $bog_gamengine_cam_deep__fov_bog_atelier_cast_13 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_cam_deep['fov'] >
	>
	type $bog_gamengine_cam_deep__far_bog_atelier_cast_14 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_cam_deep['far'] >
	>
	type $bog_gamengine_atlas__size_bog_atelier_cast_15 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_atlas['size'] >
	>
	type $bog_gamengine_atlas__sources_bog_atelier_cast_16 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['art'] >
		,
		ReturnType< $bog_gamengine_atlas['sources'] >
	>
	type $bog_gamengine_atlas__size_bog_atelier_cast_17 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_atlas['size'] >
	>
	type $bog_gamengine_atlas__sources_bog_atelier_cast_18 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['dust'] >
		,
		ReturnType< $bog_gamengine_atlas['sources'] >
	>
	type $bog_gamengine_mesh__shape_bog_atelier_cast_19 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Plane'] >
		,
		ReturnType< $bog_gamengine_mesh['shape'] >
	>
	type $bog_gamengine_mesh__atlas_bog_atelier_cast_20 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Art'] >
		,
		ReturnType< $bog_gamengine_mesh['atlas'] >
	>
	type $bog_gamengine_mesh__frame_bog_atelier_cast_21 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_mesh['frame'] >
	>
	type $bog_gamengine_mesh__size_bog_atelier_cast_22 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['paper_size'] >
		,
		ReturnType< $bog_gamengine_mesh['size'] >
	>
	type $bog_gamengine_sprite__atlas_bog_atelier_cast_23 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Art'] >
		,
		ReturnType< $bog_gamengine_sprite['atlas'] >
	>
	type $bog_gamengine_sprite__frame_bog_atelier_cast_24 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_sprite['frame'] >
	>
	type $bog_gamengine_sprite__size_bog_atelier_cast_25 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['glow_size'] >
		,
		ReturnType< $bog_gamengine_sprite['size'] >
	>
	type $bog_gamengine_sprite__pos_bog_atelier_cast_26 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['glow_pos'] >
		,
		ReturnType< $bog_gamengine_sprite['pos'] >
	>
	type $bog_gamengine_sprite__rot_bog_atelier_cast_27 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flat_rot'] >
		,
		ReturnType< $bog_gamengine_sprite['rot'] >
	>
	type $bog_gamengine_light__kind_bog_atelier_cast_28 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_light['kind'] >
	>
	type $bog_gamengine_light__range_bog_atelier_cast_29 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_light['range'] >
	>
	type $bog_gamengine_light__pos_bog_atelier_cast_30 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['lamp_pos'] >
		,
		ReturnType< $bog_gamengine_light['pos'] >
	>
	type $bog_gamengine_light__kind_bog_atelier_cast_31 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_light['kind'] >
	>
	type $bog_gamengine_light__power_bog_atelier_cast_32 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_light['power'] >
	>
	type $bog_gamengine_light__rot_bog_atelier_cast_33 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['sun_rot'] >
		,
		ReturnType< $bog_gamengine_light['rot'] >
	>
	type $bog_gamengine_particle_pool__cap_bog_atelier_cast_34 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_particle_pool['cap'] >
	>
	type $bog_gamengine_particle__pool_bog_atelier_cast_35 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Flow_pool'] >
		,
		ReturnType< $bog_gamengine_particle['pool'] >
	>
	type $bog_gamengine_particle__atlas_bog_atelier_cast_36 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Dust'] >
		,
		ReturnType< $bog_gamengine_particle['atlas'] >
	>
	type $bog_gamengine_particle__billboard_bog_atelier_cast_37 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_particle['billboard'] >
	>
	type $bog_gamengine_particle__frame_bog_atelier_cast_38 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_frame'] >
		,
		ReturnType< $bog_gamengine_particle['frame'] >
	>
	type $bog_gamengine_particle__pos_bog_atelier_cast_39 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_pos'] >
		,
		ReturnType< $bog_gamengine_particle['pos'] >
	>
	type $bog_gamengine_particle__dir_bog_atelier_cast_40 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_dir'] >
		,
		ReturnType< $bog_gamengine_particle['dir'] >
	>
	type $bog_gamengine_particle__life_bog_atelier_cast_41 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_life'] >
		,
		ReturnType< $bog_gamengine_particle['life'] >
	>
	type $bog_gamengine_particle__speed_bog_atelier_cast_42 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_speed'] >
		,
		ReturnType< $bog_gamengine_particle['speed'] >
	>
	type $bog_gamengine_particle__spread_bog_atelier_cast_43 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_spread'] >
		,
		ReturnType< $bog_gamengine_particle['spread'] >
	>
	type $bog_gamengine_particle__gravity_bog_atelier_cast_44 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_gravity'] >
		,
		ReturnType< $bog_gamengine_particle['gravity'] >
	>
	type $bog_gamengine_particle__size_bog_atelier_cast_45 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_size'] >
		,
		ReturnType< $bog_gamengine_particle['size'] >
	>
	type $bog_gamengine_particle__color_bog_atelier_cast_46 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_color'] >
		,
		ReturnType< $bog_gamengine_particle['color'] >
	>
	type $bog_gamengine_particle_pool__cap_bog_atelier_cast_47 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_particle_pool['cap'] >
	>
	type $bog_gamengine_particle__pool_bog_atelier_cast_48 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Core_pool'] >
		,
		ReturnType< $bog_gamengine_particle['pool'] >
	>
	type $bog_gamengine_particle__atlas_bog_atelier_cast_49 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Dust'] >
		,
		ReturnType< $bog_gamengine_particle['atlas'] >
	>
	type $bog_gamengine_particle__frame_bog_atelier_cast_50 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_particle['frame'] >
	>
	type $bog_gamengine_particle__billboard_bog_atelier_cast_51 = $mol_type_enforce<
		string
		,
		ReturnType< $bog_gamengine_particle['billboard'] >
	>
	type $bog_gamengine_particle__spread_bog_atelier_cast_52 = $mol_type_enforce<
		number
		,
		ReturnType< $bog_gamengine_particle['spread'] >
	>
	type $bog_gamengine_particle__pos_bog_atelier_cast_53 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_pos'] >
		,
		ReturnType< $bog_gamengine_particle['pos'] >
	>
	type $bog_gamengine_particle__life_bog_atelier_cast_54 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_life'] >
		,
		ReturnType< $bog_gamengine_particle['life'] >
	>
	type $bog_gamengine_particle__speed_bog_atelier_cast_55 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_speed'] >
		,
		ReturnType< $bog_gamengine_particle['speed'] >
	>
	type $bog_gamengine_particle__size_bog_atelier_cast_56 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_size'] >
		,
		ReturnType< $bog_gamengine_particle['size'] >
	>
	type $bog_gamengine_particle__color_bog_atelier_cast_57 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_color'] >
		,
		ReturnType< $bog_gamengine_particle['color'] >
	>
	type $bog_atelier_cast_conductor__key_bog_atelier_cast_58 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['cast_key'] >
		,
		ReturnType< $bog_atelier_cast_conductor['key'] >
	>
	type $bog_atelier_cast_conductor__flow_bog_atelier_cast_59 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Flow'] >
		,
		ReturnType< $bog_atelier_cast_conductor['flow'] >
	>
	type $bog_atelier_cast_conductor__core_bog_atelier_cast_60 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Core'] >
		,
		ReturnType< $bog_atelier_cast_conductor['core'] >
	>
	type $bog_atelier_cast_conductor__glow_bog_atelier_cast_61 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Glow'] >
		,
		ReturnType< $bog_atelier_cast_conductor['glow'] >
	>
	type $bog_atelier_cast_conductor__lamp_bog_atelier_cast_62 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['Lamp'] >
		,
		ReturnType< $bog_atelier_cast_conductor['lamp'] >
	>
	type $bog_atelier_cast_conductor__flow_rate_bog_atelier_cast_63 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['flow_rate'] >
		,
		ReturnType< $bog_atelier_cast_conductor['flow_rate'] >
	>
	type $bog_atelier_cast_conductor__core_rate_bog_atelier_cast_64 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['core_rate'] >
		,
		ReturnType< $bog_atelier_cast_conductor['core_rate'] >
	>
	type $bog_atelier_cast_conductor__glow_color_bog_atelier_cast_65 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['glow_color'] >
		,
		ReturnType< $bog_atelier_cast_conductor['glow_color'] >
	>
	type $bog_atelier_cast_conductor__lamp_color_bog_atelier_cast_66 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['lamp_color'] >
		,
		ReturnType< $bog_atelier_cast_conductor['lamp_color'] >
	>
	type $bog_atelier_cast_conductor__lamp_power_bog_atelier_cast_67 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['lamp_power'] >
		,
		ReturnType< $bog_atelier_cast_conductor['lamp_power'] >
	>
	type $bog_atelier_cast_conductor__neat_bog_atelier_cast_68 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['neat'] >
		,
		ReturnType< $bog_atelier_cast_conductor['neat'] >
	>
	type $bog_atelier_cast_conductor__form_bog_atelier_cast_69 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['form'] >
		,
		ReturnType< $bog_atelier_cast_conductor['form'] >
	>
	type $bog_atelier_cast_conductor__life_bog_atelier_cast_70 = $mol_type_enforce<
		ReturnType< $bog_atelier_cast['life'] >
		,
		ReturnType< $bog_atelier_cast_conductor['life'] >
	>
	export class $bog_atelier_cast extends $mol_view {
		clear( ): Float32Array
		Bloom( ): $bog_gamengine_shader_post_bloom
		Tone( ): $bog_gamengine_shader_post_tone
		Vignette( ): $bog_gamengine_shader_post_vignette
		Draw( ): $bog_gamengine_draw
		nodes( ): readonly(any)[]
		eye_pos( ): Float32Array
		eye_rot( ): Float32Array
		art( ): readonly(any)[]
		dust( ): readonly(any)[]
		Plane( ): $bog_gamengine_shape_plane
		paper_size( ): Float32Array
		glow_size( ): Float32Array
		glow_pos( ): Float32Array
		flat_rot( ): Float32Array
		lamp_pos( ): Float32Array
		sun_rot( ): Float32Array
		flow_frame( ): string
		flow_pos( ): Float32Array
		flow_dir( ): Float32Array
		flow_life( ): Float32Array
		flow_speed( ): Float32Array
		flow_spread( ): number
		flow_gravity( ): Float32Array
		flow_size( ): Float32Array
		flow_color( ): Float32Array
		core_pos( ): Float32Array
		core_life( ): Float32Array
		core_speed( ): Float32Array
		core_size( ): Float32Array
		core_color( ): Float32Array
		flow_rate( ): number
		core_rate( ): number
		glow_color( ): Float32Array
		lamp_color( ): Float32Array
		lamp_power( ): number
		neat( ): number
		form( ): string
		life( ): number
		spent( next?: ReturnType< ReturnType< $bog_atelier_cast['Conductor'] >['spent'] > ): ReturnType< ReturnType< $bog_atelier_cast['Conductor'] >['spent'] >
		lines( ): readonly(any)[]
		spell( ): any
		cast_key( ): number
		sub( ): readonly(any)[]
		Clock( ): $bog_gamengine_clock
		Scene( ): $bog_gamengine_scene
		Eye( ): $bog_gamengine_cam_deep
		Art( ): $bog_gamengine_atlas
		Dust( ): $bog_gamengine_atlas
		Paper( ): $bog_gamengine_mesh
		Glow( ): $bog_gamengine_sprite
		Lamp( ): $bog_gamengine_light
		Sun( ): $bog_gamengine_light
		Flow_pool( ): $bog_gamengine_particle_pool
		Flow( ): $bog_gamengine_particle
		Core_pool( ): $bog_gamengine_particle_pool
		Core( ): $bog_gamengine_particle
		Conductor( ): $bog_atelier_cast_conductor
	}
	
}

//# sourceMappingURL=cast.view.tree.d.ts.map
declare namespace $.$$ {
    type look = {
        frame: string;
        from: readonly number[];
        to: readonly number[];
        glow: readonly number[];
        lamp: readonly number[];
        lamp_power: number;
        speed: readonly number[];
        life: readonly number[];
        size: readonly number[];
        gravity: number;
        spread: number;
        rate: number;
        core: number;
    };
    export class $bog_atelier_cast extends $.$bog_atelier_cast {
        spell(): $bog_atelier_spell;
        look(): look;
        sound(): $bog_atelier_voice_bed;
        hush(): null;
        auto(): void;
        nodes(): ($bog_gamengine_mesh | $bog_gamengine_sprite | $bog_gamengine_light | $bog_gamengine_particle | $bog_atelier_cast_conductor)[];
        art(): {
            name: string;
            image: HTMLCanvasElement;
        }[];
        dust(): {
            name: string;
            image: HTMLCanvasElement;
        }[];
        clear(): Float32Array<ArrayBuffer>;
        eye_pos(): Float32Array<ArrayBuffer>;
        eye_rot(): Float32Array<ArrayBuffer>;
        paper_size(): Float32Array<ArrayBuffer>;
        glow_size(): Float32Array<ArrayBuffer>;
        glow_pos(): Float32Array<ArrayBuffer>;
        flat_rot(): Float32Array<ArrayBuffer>;
        sun_rot(): Float32Array<ArrayBuffer>;
        tune(): {
            form: $bog_atelier_spell_form;
            dir: number[];
            spread: number;
            speed: number;
            height: number;
            gravity: number;
            life: number;
            rate: number;
            core: number;
        };
        lamp_pos(): Float32Array<ArrayBuffer>;
        flow_pos(): Float32Array<ArrayBuffer>;
        core_pos(): Float32Array<ArrayBuffer>;
        flow_dir(): Float32Array<ArrayBuffer>;
        flow_frame(): string;
        flow_life(): Float32Array<ArrayBuffer>;
        flow_speed(): Float32Array<ArrayBuffer>;
        flow_spread(): number;
        flow_gravity(): Float32Array<ArrayBuffer>;
        flow_size(): Float32Array<ArrayBuffer>;
        flow_color(): Float32Array<ArrayBuffer>;
        flow_rate(): number;
        core_rate(): number;
        form(): $bog_atelier_spell_form;
        life(): number;
        core_life(): Float32Array<ArrayBuffer>;
        core_speed(): Float32Array<ArrayBuffer>;
        core_size(): Float32Array<ArrayBuffer>;
        core_color(): Float32Array<ArrayBuffer>;
        glow_color(): Float32Array<ArrayBuffer>;
        lamp_color(): Float32Array<ArrayBuffer>;
        lamp_power(): number;
        neat(): number;
    }
    export {};
}

declare namespace $ {

	type $mol_svg_path__geometry_bog_atelier_stage_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['base_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_path__geometry_bog_atelier_stage_2 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['guide_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $bog_atelier_desk__lines_bog_atelier_stage_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['lines'] >
		,
		ReturnType< $bog_atelier_desk['lines'] >
	>
	type $bog_atelier_desk__enabled_bog_atelier_stage_4 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['drawing'] >
		,
		ReturnType< $bog_atelier_desk['enabled'] >
	>
	type $bog_atelier_desk__under_bog_atelier_stage_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $bog_atelier_desk['under'] >
	>
	type $bog_atelier_desk__over_bog_atelier_stage_6 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['marks'] >
		,
		ReturnType< $bog_atelier_desk['over'] >
	>
	type $mol_svg_path__geometry_bog_atelier_stage_7 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['gap_path'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	type $mol_svg_text__pos_x_bog_atelier_stage_8 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['mark_x'] >
		,
		ReturnType< $mol_svg_text['pos_x'] >
	>
	type $mol_svg_text__pos_y_bog_atelier_stage_9 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['mark_y'] >
		,
		ReturnType< $mol_svg_text['pos_y'] >
	>
	type $mol_svg_text__text_bog_atelier_stage_10 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['mark_text'] >
		,
		ReturnType< $mol_svg_text['text'] >
	>
	type $mol_svg_text__attr_bog_atelier_stage_11 = $mol_type_enforce<
		({ 
			'bog_atelier_stage_known': ReturnType< $bog_atelier_stage['mark_known'] >,
			'font-size': ReturnType< $bog_atelier_stage['mark_font'] >,
		})  & ReturnType< $mol_svg_text['attr'] >
		,
		ReturnType< $mol_svg_text['attr'] >
	>
	type $bog_atelier_cast__lines_bog_atelier_stage_12 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['cast_lines'] >
		,
		ReturnType< $bog_atelier_cast['lines'] >
	>
	type $bog_atelier_cast__spell_bog_atelier_stage_13 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['spell'] >
		,
		ReturnType< $bog_atelier_cast['spell'] >
	>
	type $bog_atelier_cast__cast_key_bog_atelier_stage_14 = $mol_type_enforce<
		ReturnType< $bog_atelier_stage['cast_key'] >
		,
		ReturnType< $bog_atelier_cast['cast_key'] >
	>
	export class $bog_atelier_stage extends $mol_view {
		layers( ): readonly(any)[]
		drawing( ): boolean
		base_path( ): string
		Base( ): $mol_svg_path
		guide_path( ): string
		Guide( ): $mol_svg_path
		marks( ): readonly(any)[]
		gap_path( ): string
		mark_x( id: any): string
		mark_y( id: any): string
		mark_text( id: any): string
		mark_known( id: any): boolean
		mark_font( id: any): number
		cast_lines( ): readonly(any)[]
		spell( ): any
		lines( next?: readonly(any)[] ): readonly(any)[]
		base( ): readonly(any)[]
		guide( ): readonly(any)[]
		cast_key( ): number
		casting( ): boolean
		reading( ): any
		sub( ): ReturnType< $bog_atelier_stage['layers'] >
		Desk( ): $bog_atelier_desk
		Gap( ): $mol_svg_path
		Mark( id: any): $mol_svg_text
		Cast( ): $bog_atelier_cast
	}
	
}

//# sourceMappingURL=stage.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_stage extends $.$bog_atelier_stage {
        all_lines(): readonly $bog_atelier_ink_line[];
        reading(): $bog_atelier_glyph_reading;
        spell(): $bog_atelier_spell;
        closed(): boolean;
        layers(): $.$bog_atelier_cast[] | $.$bog_atelier_desk[];
        drawing(): boolean;
        cast_lines(): number[][];
        base_path(): string;
        guide_path(): string;
        gap_path(): string;
        mark_list(): $bog_atelier_glyph_mark[];
        marks(): ($mol_svg_path | $.$mol_svg_text)[];
        mark(index: number): $bog_atelier_glyph_mark;
        mark_spot(index: number): readonly [number, number];
        mark_font(index: number): number;
        mark_x(index: number): string;
        mark_y(index: number): string;
        mark_known(index: number): boolean;
        mark_text(index: number): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_paragraph extends $mol_view {
		line_height( ): number
		letter_width( ): number
		width_limit( ): number
		row_width( ): number
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=paragraph.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        width_limit(): number;
        minimal_width(): number;
        row_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_support_css_overflow_anchor(this: $): boolean;
}

declare namespace $ {

	type $mol_view__style_mol_list_1 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_before'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	type $mol_view__style_mol_list_2 = $mol_type_enforce<
		({ 
			'paddingTop': ReturnType< $mol_list['gap_after'] >,
		}) 
		,
		ReturnType< $mol_view['style'] >
	>
	export class $mol_list extends $mol_view {
		gap_before( ): number
		Gap_before( ): $mol_view
		Empty( ): $mol_view
		gap_after( ): number
		Gap_after( ): $mol_view
		rows( ): readonly($mol_view)[]
		render_visible_only( ): boolean
		render_over( ): number
		sub( ): ReturnType< $mol_list['rows'] >
		item_height_min( id: any): number
		item_width_min( id: any): number
		view_window_shift( next?: number ): number
		view_window( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * The list of rows with lazy/virtual rendering support based on `minimal_height` of rows.
     * `mol_list` should contain only components that inherits `mol_view`. You should not place raw strings or numbers in list.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_list_demo
     */
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        _view_window_last: number[];
        view_window(next?: [number, number]): [number, number];
        item_height_min(index: number): number;
        row_width_min(index: number): number;
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
        minimal_width(): number;
        force_render(path: Set<$mol_view>): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_svg_path__geometry_bog_atelier_icon_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_icon['geometry'] >
		,
		ReturnType< $mol_svg_path['geometry'] >
	>
	export class $bog_atelier_icon extends $mol_svg_root {
		geometry( ): string
		Path( ): $mol_svg_path
		view_box( ): string
		entry_id( ): string
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=icon.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_icon extends $.$bog_atelier_icon {
        geometry(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_button_major extends $mol_button_minor {
		theme( ): string
	}
	
}

//# sourceMappingURL=major.view.tree.d.ts.map
declare var $node: any;

declare namespace $ {
    type $mol_blob = Blob;
    let $mol_blob: {
        prototype: Blob;
        new (blobParts?: readonly BlobPart[], options?: BlobPropertyBag): Blob;
    };
}

declare namespace $ {

	export class $mol_icon_clipboard extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=clipboard.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_clipboard_outline extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=outline.view.tree.d.ts.map
declare namespace $ {
    function $mol_html_encode(text: string): string;
}

declare namespace $ {

	type $mol_blob__mol_button_copy_1 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	type $mol_blob__mol_button_copy_2 = $mol_type_enforce<
		[ readonly(BlobPart)[], ({ 
			'type': string,
		})  ]
		,
		ConstructorParameters< typeof $mol_blob >
	>
	export class $mol_button_copy extends $mol_button_minor {
		text( ): ReturnType< $mol_button_copy['title'] >
		text_blob( next?: $mol_blob ): $mol_blob
		html( ): string
		html_blob( next?: $mol_blob ): $mol_blob
		Icon( ): $mol_icon_clipboard_outline
		title( ): string
		blobs( ): readonly($mol_blob)[]
		data( ): Record<string, any>
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=copy.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Button copy text() value to clipboard
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_button_demo
     */
    class $mol_button_copy extends $.$mol_button_copy {
        data(): {
            [k: string]: Blob;
        };
        html(): string;
        attachments(): ClipboardItem[];
        click(event?: Event): void;
    }
}

declare namespace $ {
    function $bog_atelier_share_pack(lines: readonly $bog_atelier_ink_line[]): string;
    function $bog_atelier_share_unpack(text: string): readonly $bog_atelier_ink_line[];
    function $bog_atelier_share_thin(line: $bog_atelier_ink_line, gap?: number): number[];
    function $bog_atelier_share_open(lines: readonly $bog_atelier_ink_line[], ring: readonly number[], cx: number, cy: number, at?: number, width?: number): readonly $bog_atelier_ink_line[];
}

declare namespace $ {

	type $bog_atelier_stage__lines_bog_atelier_workshop_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['lines'] >
		,
		ReturnType< $bog_atelier_stage['lines'] >
	>
	type $bog_atelier_stage__guide_bog_atelier_workshop_2 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['guide'] >
		,
		ReturnType< $bog_atelier_stage['guide'] >
	>
	type $bog_atelier_stage__cast_key_bog_atelier_workshop_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['cast_key'] >
		,
		ReturnType< $bog_atelier_stage['cast_key'] >
	>
	type $mol_paragraph__title_bog_atelier_workshop_4 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['status'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows_bog_atelier_workshop_5 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['story_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_atelier_workshop_6 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['tools'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_atelier_workshop_7 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_bog_atelier_workshop_8 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['sigil_stamps'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_atelier_workshop_9 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_bog_atelier_workshop_10 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['sign_stamps'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_atelier_workshop_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $bog_atelier_icon__entry_id_bog_atelier_workshop_12 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_id'] >
		,
		ReturnType< $bog_atelier_icon['entry_id'] >
	>
	type $bog_atelier_icon__entry_id_bog_atelier_workshop_13 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_id'] >
		,
		ReturnType< $bog_atelier_icon['entry_id'] >
	>
	type $mol_button_minor__title_bog_atelier_workshop_14 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_bog_atelier_workshop_15 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['undo'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled_bog_atelier_workshop_16 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['can_undo'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__title_bog_atelier_workshop_17 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_bog_atelier_workshop_18 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['clear'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled_bog_atelier_workshop_19 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['can_undo'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_major__title_bog_atelier_workshop_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_bog_atelier_workshop_21 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['break'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_button_copy__title_bog_atelier_workshop_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['title'] >
	>
	type $mol_button_copy__hint_bog_atelier_workshop_23 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_bog_atelier_workshop_24 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['share_link'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	type $mol_button_minor__title_bog_atelier_workshop_25 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_bog_atelier_workshop_26 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_ring'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_paragraph__title_bog_atelier_workshop_27 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['story_line'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_minor__hint_bog_atelier_workshop_28 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_title'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_bog_atelier_workshop_29 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_sigil'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_atelier_workshop_30 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	type $mol_button_minor__hint_bog_atelier_workshop_31 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_title'] >
		,
		ReturnType< $mol_button_minor['hint'] >
	>
	type $mol_button_minor__click_bog_atelier_workshop_32 = $mol_type_enforce<
		ReturnType< $bog_atelier_workshop['stamp_sign'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__sub_bog_atelier_workshop_33 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $bog_atelier_workshop extends $mol_view {
		lines( next?: readonly(any)[] ): readonly(any)[]
		guide( ): readonly(any)[]
		cast_key( ): number
		Stage( ): $bog_atelier_stage
		status( ): string
		Status( ): $mol_paragraph
		story_rows( ): readonly(any)[]
		Story( ): $mol_list
		tools( ): readonly(any)[]
		Tools( ): $mol_view
		Sigils_head( ): $mol_paragraph
		sigil_stamps( ): readonly(any)[]
		Sigils( ): $mol_view
		Signs_head( ): $mol_paragraph
		sign_stamps( ): readonly(any)[]
		Signs( ): $mol_view
		Side( ): $mol_list
		undo( next?: any ): any
		can_undo( ): boolean
		clear( next?: any ): any
		break( next?: any ): any
		share_link( ): string
		stamp_ring( next?: any ): any
		story_line( id: any): string
		stamp_title( id: any): string
		stamp_sigil( id: any, next?: any ): any
		stamp_id( id: any): string
		Sigil_icon( id: any): $bog_atelier_icon
		stamp_sign( id: any, next?: any ): any
		Sign_icon( id: any): $bog_atelier_icon
		sub( ): readonly(any)[]
		status_empty( ): string
		status_open( ): string
		status_cast( ): string
		Undo( ): $mol_button_minor
		Clear( ): $mol_button_minor
		Break( ): $mol_button_major
		Share( ): $mol_button_copy
		Ring( ): $mol_button_minor
		Story_line( id: any): $mol_paragraph
		Sigil_stamp( id: any): $mol_button_minor
		Sign_stamp( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=workshop.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_workshop extends $.$bog_atelier_workshop {
        lines(next?: readonly $bog_atelier_ink_line[]): readonly $bog_atelier_ink_line[];
        auto(): void;
        guide(): number[][];
        share_link(): string;
        reading(): $bog_atelier_glyph_reading;
        closed(): boolean;
        cast_key(): number;
        can_undo(): boolean;
        undo(): void;
        clear(): void;
        break(): void;
        tools(): ($mol_button_minor | $.$mol_button_copy)[];
        status(): string;
        story(): string[];
        story_rows(): $.$mol_paragraph[];
        story_line(index: number): string;
        frame(): {
            x: number;
            y: number;
            r: number;
        };
        place(lines: readonly $bog_atelier_ink_line[]): number[][];
        stamp_ring(): void;
        sigil_stamps(): $mol_button_minor[];
        sign_stamps(): $mol_button_minor[];
        stamp_id(id: string): string;
        stamp_title(id: string): string;
        stamp_sigil(id: string): void;
        free_angle(): number;
        stamp_sign(id: string): void;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_stack extends $mol_view {
	}
	
}

//# sourceMappingURL=stack.view.tree.d.ts.map
declare namespace $ {
    /**
     * Return `unknown` when `A` and `B` are the same type. `never` otherwise.
     *
     * 	$mol_type_equals< unknown , any > & number // true
     * 	$mol_type_equals< never , never > & number // false
     */
    type $mol_type_equals<A, B> = (<X>() => X extends A ? 1 : 2) extends (<X>() => X extends B ? 1 : 2) ? true : false;
}

declare namespace $ {
    /**
     * Reqursive converts intersection of records to record of intersections
     *
     * 	// { a : { x : 1 , y : 2 } }
     * 	$mol_type_merge< { a : { x : 1 } }&{ a : { y : 2 } } >
     */
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? $mol_type_merge_object<Intersection> extends Intersection ? true extends $mol_type_equals<{
        [Key in keyof Intersection]: Intersection[Key];
    }, Intersection> ? Intersection : {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection : Intersection;
    /**
     * Flat converts intersection of records to record of intersections
     *
     * 	// { a: 1, b: 2 }
     * 	$mol_type_merge< { a: 1 } & { b: 2 } >
     */
    type $mol_type_merge_object<Intersection> = {
        [Key in keyof Intersection]: Intersection[Key];
    };
}

declare namespace $ {
    /**
     * Converts union of types to intersection of same types
     *
     * 	$mol_type_intersect< number | string > // number & string
     */
    type $mol_type_intersect<Union> = (Union extends any ? (_: Union) => void : never) extends ((_: infer Intersection) => void) ? Intersection : never;
}

declare namespace $ {
    type $mol_unicode_category = [$mol_unicode_category_binary] | ['General_Category', $mol_char_category_general] | ['Script', $mol_unicode_category_script] | ['Script_Extensions', $mol_unicode_category_script];
    type $mol_unicode_category_binary = 'ASCII' | 'ASCII_Hex_Digit' | 'Alphabetic' | 'Any' | 'Assigned' | 'Bidi_Control' | 'Bidi_Mirrored' | 'Case_Ignorable' | 'Cased' | 'Changes_When_Casefolded' | 'Changes_When_Casemapped' | 'Changes_When_Lowercased' | 'Changes_When_NFKC_Casefolded' | 'Changes_When_Titlecased' | 'Changes_When_Uppercased' | 'Dash' | 'Default_Ignorable_Code_Point' | 'Deprecated' | 'Diacritic' | 'Emoji' | 'Emoji_Component' | 'Emoji_Modifier' | 'Emoji_Modifier_Base' | 'Emoji_Presentation' | 'Extended_Pictographic' | 'Extender' | 'Grapheme_Base' | 'Grapheme_Extend' | 'Hex_Digit' | 'IDS_Binary_Operator' | 'IDS_Trinary_Operator' | 'ID_Continue' | 'ID_Start' | 'Ideographic' | 'Join_Control' | 'Logical_Order_Exception' | 'Lowercase' | 'Math' | 'Noncharacter_Code_Point' | 'Pattern_Syntax' | 'Pattern_White_Space' | 'Quotation_Mark' | 'Radical' | 'Regional_Indicator' | 'Sentence_Terminal' | 'Soft_Dotted' | 'Terminal_Punctuation' | 'Unified_Ideograph' | 'Uppercase' | 'Variation_Selector' | 'White_Space' | 'XID_Continue' | 'XID_Start';
    type $mol_char_category_general = 'Cased_Letter' | 'Close_Punctuation' | 'Connector_Punctuation' | 'Control' | 'Currency_Symbol' | 'Dash_Punctuation' | 'Decimal_Number' | 'Enclosing_Mark' | 'Final_Punctuation' | 'Format' | 'Initial_Punctuation' | 'Letter' | 'Letter_Number' | 'Line_Separator' | 'Lowercase_Letter' | 'Mark' | 'Math_Symbol' | 'Modifier_Letter' | 'Modifier_Symbol' | 'Nonspacing_Mark' | 'Number' | 'Open_Punctuation' | 'Other' | 'Other_Letter' | 'Other_Number' | 'Other_Punctuation' | 'Other_Symbol' | 'Paragraph_Separator' | 'Private_Use' | 'Punctuation' | 'Separator' | 'Space_Separator' | 'Spacing_Mark' | 'Surrogate' | 'Symbol' | 'Titlecase_Letter' | 'Unassigned' | 'Uppercase_Letter';
    type $mol_unicode_category_script = 'Adlam' | 'Ahom' | 'Anatolian_Hieroglyphs' | 'Arabic' | 'Armenian' | 'Avestan' | 'Balinese' | 'Bamum' | 'Bassa_Vah' | 'Batak' | 'Bengali' | 'Bhaiksuki' | 'Bopomofo' | 'Brahmi' | 'Braille' | 'Buginese' | 'Buhid' | 'Canadian_Aboriginal' | 'Carian' | 'Caucasian_Albanian' | 'Chakma' | 'Cham' | 'Chorasmian' | 'Cherokee' | 'Common' | 'Coptic' | 'Cuneiform' | 'Cypriot' | 'Cyrillic' | 'Deseret' | 'Devanagari' | 'Dives_Akuru' | 'Dogra' | 'Duployan' | 'Egyptian_Hieroglyphs' | 'Elbasan' | 'Elymaic' | 'Ethiopic' | 'Georgian' | 'Glagolitic' | 'Gothic' | 'Grantha' | 'Greek' | 'Gujarati' | 'Gunjala_Gondi' | 'Gurmukhi' | 'Han' | 'Hangul' | 'Hanifi_Rohingya' | 'Hanunoo' | 'Hatran' | 'Hebrew' | 'Hiragana' | 'Imperial_Aramaic' | 'Inherited' | 'Inscriptional_Pahlavi' | 'Inscriptional_Parthian' | 'Javanese' | 'Kaithi' | 'Kannada' | 'Katakana' | 'Kayah_Li' | 'Kharoshthi' | 'Khitan_Small_Script' | 'Khmer' | 'Khojki' | 'Khudawadi' | 'Lao' | 'Latin' | 'Lepcha' | 'Limbu' | 'Linear_A' | 'Linear_B' | 'Lisu' | 'Lycian' | 'Lydian' | 'Mahajani' | 'Makasar' | 'Malayalam' | 'Mandaic' | 'Manichaean' | 'Marchen' | 'Medefaidrin' | 'Masaram_Gondi' | 'Meetei_Mayek' | 'Mende_Kikakui' | 'Meroitic_Cursive' | 'Meroitic_Hieroglyphs' | 'Miao' | 'Modi' | 'Mongolian' | 'Mro' | 'Multani' | 'Myanmar' | 'Nabataean' | 'Nandinagari' | 'New_Tai_Lue' | 'Newa' | 'Nko' | 'Nushu' | 'Nyiakeng_Puachue_Hmong' | 'Ogham' | 'Ol_Chiki' | 'Old_Hungarian' | 'Old_Italic' | 'Old_North_Arabian' | 'Old_Permic' | 'Old_Persian' | 'Old_Sogdian' | 'Old_South_Arabian' | 'Old_Turkic' | 'Oriya' | 'Osage' | 'Osmanya' | 'Pahawh_Hmong' | 'Palmyrene' | 'Pau_Cin_Hau' | 'Phags_Pa' | 'Phoenician' | 'Psalter_Pahlavi' | 'Rejang' | 'Runic' | 'Samaritan' | 'Saurashtra' | 'Sharada' | 'Shavian' | 'Siddham' | 'SignWriting' | 'Sinhala' | 'Sogdian' | 'Sora_Sompeng' | 'Soyombo' | 'Sundanese' | 'Syloti_Nagri' | 'Syriac' | 'Tagalog' | 'Tagbanwa' | 'Tai_Le' | 'Tai_Tham' | 'Tai_Viet' | 'Takri' | 'Tamil' | 'Tangut' | 'Telugu' | 'Thaana' | 'Thai' | 'Tibetan' | 'Tifinagh' | 'Tirhuta' | 'Ugaritic' | 'Vai' | 'Wancho' | 'Warang_Citi' | 'Yezidi' | 'Yi' | 'Zanabazar_Square';
}

interface String {
    match<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.match]>;
    matchAll<RE extends RegExp>(regexp: RE): ReturnType<RE[typeof Symbol.matchAll]>;
}
declare namespace $ {
    type Groups_to_params<T> = {
        [P in keyof T]?: T[P] | boolean | undefined;
    };
    export type $mol_regexp_source = number | string | RegExp | {
        [key in string]: $mol_regexp_source;
    } | readonly [$mol_regexp_source, ...$mol_regexp_source[]];
    export type $mol_regexp_groups<Source extends $mol_regexp_source> = Source extends number ? {} : Source extends string ? {} : Source extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{
        [key in Extract<keyof Source, number>]: $mol_regexp_groups<Source[key]>;
    }[Extract<keyof Source, number>]>> : Source extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> ? {} : NonNullable<NonNullable<ReturnType<Source['exec']>>['groups']> : Source extends {
        readonly [key in string]: $mol_regexp_source;
    } ? $mol_type_merge<$mol_type_intersect<{
        [key in keyof Source]: $mol_type_merge<$mol_type_override<{
            readonly [k in Extract<keyof Source, string>]: string;
        }, {
            readonly [k in key]: Source[key] extends string ? Source[key] : string;
        }> & $mol_regexp_groups<Source[key]>>;
    }[keyof Source]>> : never;
    /** Type safe reguar expression builder */
    export class $mol_regexp<Groups extends Record<string, string>> extends RegExp {
        readonly groups: (Extract<keyof Groups, string>)[];
        /** Prefer to use $mol_regexp.from */
        constructor(source: string, flags?: string, groups?: (Extract<keyof Groups, string>)[]);
        [Symbol.matchAll](str: string): RegExpStringIterator<RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }>>;
        /** Parses input and returns found capture groups or null */
        [Symbol.match](str: string): null | RegExpMatchArray;
        /** Splits string by regexp edges */
        [Symbol.split](str: string): string[];
        test(str: string): boolean;
        exec(str: string): RegExpExecArray & $mol_type_override<RegExpExecArray, {
            groups?: {
                [key in keyof Groups]: string;
            };
        }> | null;
        generate(params: Groups_to_params<Groups>): string | null;
        get native(): RegExp;
        /** Makes regexp that greedy repeats this pattern with delimiter */
        static separated<Chunk extends $mol_regexp_source, Sep extends $mol_regexp_source>(chunk: Chunk, sep: Sep): $mol_regexp<[$mol_regexp<[[Chunk], Sep] extends infer T ? T extends [[Chunk], Sep] ? T extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key in Extract<keyof T, number>]: $mol_regexp_groups<T[key]>; }[Extract<keyof T, number>]>> : T extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T["exec"]>>["groups"]> : T extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_1 in keyof T]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T, string>]: string; }, key_1> & { readonly [k_1 in key_1]: T[key_1] extends string ? T[key_1] : string; } & $mol_regexp_groups<T[key_1]>>; }[keyof T]>> : never : never : never>, Chunk] extends infer T_1 ? T_1 extends [$mol_regexp<[[Chunk], Sep] extends infer T_2 ? T_2 extends [[Chunk], Sep] ? T_2 extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key_4 in Extract<keyof T_2, number>]: $mol_regexp_groups<T_2[key_4]>; }[Extract<keyof T_2, number>]>> : T_2 extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T_2["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T_2["exec"]>>["groups"]> : T_2 extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_5 in keyof T_2]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T_2, string>]: string; }, key_5> & { readonly [k_1 in key_5]: T_2[key_5] extends string ? T_2[key_5] : string; } & $mol_regexp_groups<T_2[key_5]>>; }[keyof T_2]>> : never : never : never>, Chunk] ? T_1 extends $mol_regexp_source[] ? $mol_type_merge<$mol_type_intersect<{ [key_2 in Extract<keyof T_1, number>]: $mol_regexp_groups<T_1[key_2]>; }[Extract<keyof T_1, number>]>> : T_1 extends RegExp ? Record<string, string> extends NonNullable<NonNullable<ReturnType<T_1["exec"]>>["groups"]> ? {} : NonNullable<NonNullable<ReturnType<T_1["exec"]>>["groups"]> : T_1 extends {
            readonly [x: string]: $mol_regexp_source;
        } ? $mol_type_merge<$mol_type_intersect<{ [key_3 in keyof T_1]: $mol_type_merge<Omit<{ readonly [k in Extract<keyof T_1, string>]: string; }, key_3> & { readonly [k_1 in key_3]: T_1[key_3] extends string ? T_1[key_3] : string; } & $mol_regexp_groups<T_1[key_3]>>; }[keyof T_1]>> : never : never : never>;
        /** Makes regexp that non-greedy repeats this pattern from min to max count */
        static repeat<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        /** Makes regexp that greedy repeats this pattern from min to max count */
        static repeat_greedy<Source extends $mol_regexp_source>(source: Source, min?: number, max?: number): $mol_regexp<$mol_regexp_groups<Source>>;
        /** Makes regexp that match any of options */
        static vary<Sources extends readonly $mol_regexp_source[]>(sources: Sources, flags?: string): $mol_regexp<$mol_regexp_groups<Sources[number]>>;
        /** Makes regexp that allow absent of this pattern */
        static optional<Source extends $mol_regexp_source>(source: Source): $mol_regexp<$mol_regexp_groups<Source>>;
        /** Makes regexp that look ahead for pattern */
        static force_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        /** Makes regexp that look ahead for pattern */
        static forbid_after(source: $mol_regexp_source): $mol_regexp<Record<string, string>>;
        /** Converts some js values to regexp */
        static from<Source extends $mol_regexp_source>(source: Source, { ignoreCase, multiline }?: Partial<Pick<RegExp, 'ignoreCase' | 'multiline'>>): $mol_regexp<$mol_regexp_groups<Source>>;
        /** Makes regexp which includes only unicode category */
        static unicode_only(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        /** Makes regexp which excludes unicode category */
        static unicode_except(...category: $mol_unicode_category): $mol_regexp<Record<string, string>>;
        static char_range(from: number, to: number): $mol_regexp<{}>;
        static char_only(...allowed: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static char_except(...forbidden: readonly [$mol_regexp_source, ...$mol_regexp_source[]]): $mol_regexp<{}>;
        static decimal_only: $mol_regexp<{}>;
        static decimal_except: $mol_regexp<{}>;
        static latin_only: $mol_regexp<{}>;
        static latin_except: $mol_regexp<{}>;
        static space_only: $mol_regexp<{}>;
        static space_except: $mol_regexp<{}>;
        static word_break_only: $mol_regexp<{}>;
        static word_break_except: $mol_regexp<{}>;
        static tab: $mol_regexp<{}>;
        static slash_back: $mol_regexp<{}>;
        static nul: $mol_regexp<{}>;
        static char_any: $mol_regexp<{}>;
        static begin: $mol_regexp<{}>;
        static end: $mol_regexp<{}>;
        static or: $mol_regexp<{}>;
        static line_end: $mol_regexp<{
            readonly win_end: string;
            readonly mac_end: string;
        }>;
    }
    export {};
}

declare namespace $ {

	type $mol_paragraph__sub_mol_dimmer_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_paragraph__sub_mol_dimmer_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	export class $mol_dimmer extends $mol_paragraph {
		parts( ): readonly($mol_view_content)[]
		string( id: any): string
		haystack( ): string
		needle( ): string
		sub( ): ReturnType< $mol_dimmer['parts'] >
		Low( id: any): $mol_paragraph
		High( id: any): $mol_paragraph
	}
	
}

//# sourceMappingURL=dimmer.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Output text with dimmed mismatched substrings.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_dimmer_demo
     */
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_text_code_token extends $mol_dimmer {
		type( ): string
		attr( ): ({ 
			'mol_text_code_token_type': ReturnType< $mol_text_code_token['type'] >,
		})  & ReturnType< $mol_dimmer['attr'] >
	}
	
	export class $mol_text_code_token_link extends $mol_text_code_token {
		uri( ): string
		dom_name( ): string
		type( ): string
		attr( ): ({ 
			'href': ReturnType< $mol_text_code_token_link['uri'] >,
			'target': string,
		})  & ReturnType< $mol_text_code_token['attr'] >
	}
	
}

//# sourceMappingURL=token.view.tree.d.ts.map
declare namespace $.$$ {
}

declare namespace $ {
    /** Creates lexer by dictionary of lexems. Lexem that started first wins. Then lexem that declared earlier wins. Use regexp capture to take parts of token. */
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    } = {}> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: Array<{
            regExp: RegExp;
            name: string;
            size: number;
        }>;
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        spoiler: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        grid: RegExp;
        cut: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code: RegExp;
        insert: RegExp;
        delete: RegExp;
        embed: RegExp;
        link: RegExp;
        'image-link': RegExp;
        'text-link': RegExp;
        'text-link-http': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-indent': RegExp;
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-sexpr': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-word': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {

	type $mol_view__sub_mol_text_code_line_1 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_text_code_token__type_mol_text_code_line_2 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_type'] >
		,
		ReturnType< $mol_text_code_token['type'] >
	>
	type $mol_text_code_token__haystack_mol_text_code_line_3 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token['haystack'] >
	>
	type $mol_text_code_token__needle_mol_text_code_line_4 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token['needle'] >
	>
	type $mol_text_code_token_link__haystack_mol_text_code_line_5 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_text'] >
		,
		ReturnType< $mol_text_code_token_link['haystack'] >
	>
	type $mol_text_code_token_link__needle_mol_text_code_line_6 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['highlight'] >
		,
		ReturnType< $mol_text_code_token_link['needle'] >
	>
	type $mol_text_code_token_link__uri_mol_text_code_line_7 = $mol_type_enforce<
		ReturnType< $mol_text_code_line['token_uri'] >
		,
		ReturnType< $mol_text_code_token_link['uri'] >
	>
	export class $mol_text_code_line extends $mol_paragraph {
		numb( ): number
		token_type( id: any): string
		token_text( id: any): string
		highlight( ): string
		token_uri( id: any): string
		text( ): string
		minimal_height( ): number
		numb_showed( ): boolean
		syntax( ): any
		uri_resolve( id: any): string
		Numb( ): $mol_view
		Token( id: any): $mol_text_code_token
		Token_link( id: any): $mol_text_code_token_link
		find_pos( id: any): any
	}
	
}

//# sourceMappingURL=line.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_text_code_line extends $.$mol_text_code_line {
        maximal_width(): number;
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        tokens(path: number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        sub(): (string | $mol_view)[];
        row_content(path: number[]): string[] | $mol_text_code_token[];
        Token(path: number[]): $mol_text_code_token;
        token_type(path: number[]): string;
        token_content(path: number[]): (string | $mol_text_code_token)[];
        token_text(path: number[]): string;
        token_uri(path: number[]): string;
        view_find(check: (path: $mol_view, text?: string) => boolean, path?: $mol_view[]): Generator<$mol_view[]>;
        find_pos(offset: number): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
        find_token_pos([offset, ...path]: number[]): {
            token: $mol_text_code_token;
            offset: number;
        } | null;
    }
}

declare namespace $.$$ {
}

declare namespace $ {

	type $mol_text_code_line__numb_showed_mol_text_code_1 = $mol_type_enforce<
		ReturnType< $mol_text_code['sidebar_showed'] >
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__numb_mol_text_code_2 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_numb'] >
		,
		ReturnType< $mol_text_code_line['numb'] >
	>
	type $mol_text_code_line__theme_mol_text_code_3 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_theme'] >
		,
		ReturnType< $mol_text_code_line['theme'] >
	>
	type $mol_text_code_line__text_mol_text_code_4 = $mol_type_enforce<
		ReturnType< $mol_text_code['row_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__syntax_mol_text_code_5 = $mol_type_enforce<
		ReturnType< $mol_text_code['syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_code_6 = $mol_type_enforce<
		ReturnType< $mol_text_code['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__highlight_mol_text_code_7 = $mol_type_enforce<
		ReturnType< $mol_text_code['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_list__render_visible_only_mol_text_code_8 = $mol_type_enforce<
		ReturnType< $mol_text_code['render_visible_only'] >
		,
		ReturnType< $mol_list['render_visible_only'] >
	>
	type $mol_list__rows_mol_text_code_9 = $mol_type_enforce<
		ReturnType< $mol_text_code['rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_button_copy__hint_mol_text_code_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_copy['hint'] >
	>
	type $mol_button_copy__text_mol_text_code_11 = $mol_type_enforce<
		ReturnType< $mol_text_code['text_export'] >
		,
		ReturnType< $mol_button_copy['text'] >
	>
	export class $mol_text_code extends $mol_stack {
		sidebar_showed( ): boolean
		render_visible_only( ): boolean
		row_numb( id: any): number
		row_theme( id: any): string
		row_text( id: any): string
		syntax( ): any
		uri_resolve( id: any): string
		highlight( ): string
		Row( id: any): $mol_text_code_line
		rows( ): readonly(any)[]
		Rows( ): $mol_list
		text_export( ): string
		Copy( ): $mol_button_copy
		attr( ): ({ 
			'mol_text_code_sidebar_showed': ReturnType< $mol_text_code['sidebar_showed'] >,
		})  & ReturnType< $mol_stack['attr'] >
		text( ): string
		text_lines( ): readonly(string)[]
		find_pos( id: any): any
		uri_base( ): string
		row_themes( ): readonly(string)[]
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=code.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Code visualizer.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_code_demo
     */
    class $mol_text_code extends $.$mol_text_code {
        render_visible_only(): boolean;
        text_lines(): readonly string[];
        rows(): $.$mol_text_code_line[];
        row_text(index: number): string;
        row_numb(index: number): number;
        find_pos(offset: number): any;
        sub(): ($.$mol_list | $.$mol_button_copy)[];
        syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        uri_base(): string;
        uri_resolve(uri: string): string;
        text_export(): string;
        row_theme(row: number): string;
    }
}

declare namespace $.$$ {
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_float extends $mol_view {
		style( ): ({ 
			'minHeight': string,
		})  & ReturnType< $mol_view['style'] >
	}
	
}

//# sourceMappingURL=float.view.tree.d.ts.map
declare namespace $ {

	export class $mol_icon_chevron extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=chevron.view.tree.d.ts.map
declare namespace $ {

	export class $mol_check_expand extends $mol_check {
		level_style( ): string
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		Icon( ): $mol_icon_chevron
		level( ): number
		style( ): ({ 
			'paddingLeft': ReturnType< $mol_check_expand['level_style'] >,
		})  & ReturnType< $mol_check['style'] >
		checked( next?: ReturnType< $mol_check_expand['expanded'] > ): ReturnType< $mol_check_expand['expanded'] >
		enabled( ): ReturnType< $mol_check_expand['expandable'] >
	}
	
}

//# sourceMappingURL=expand.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Expander for trees, lists, etc
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_check_expand_demo
     */
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_grid_table__sub_mol_grid_1 = $mol_type_enforce<
		ReturnType< $mol_grid['rows'] >
		,
		ReturnType< $mol_grid_table['sub'] >
	>
	type $mol_dimmer__needle_mol_grid_2 = $mol_type_enforce<
		ReturnType< $mol_grid['needle'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_grid_3 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_value'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_grid_row__cells_mol_grid_4 = $mol_type_enforce<
		ReturnType< $mol_grid['head_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_row__minimal_height_mol_grid_5 = $mol_type_enforce<
		ReturnType< $mol_grid['row_height'] >
		,
		ReturnType< $mol_grid_row['minimal_height'] >
	>
	type $mol_grid_row__minimal_width_mol_grid_6 = $mol_type_enforce<
		ReturnType< $mol_grid['minimal_width'] >
		,
		ReturnType< $mol_grid_row['minimal_width'] >
	>
	type $mol_grid_row__cells_mol_grid_7 = $mol_type_enforce<
		ReturnType< $mol_grid['cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_grid_cell__sub_mol_grid_8 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_text'] >
		,
		ReturnType< $mol_grid_cell['sub'] >
	>
	type $mol_grid_number__sub_mol_grid_9 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content_number'] >
		,
		ReturnType< $mol_grid_number['sub'] >
	>
	type $mol_float__dom_name_mol_grid_10 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_float['dom_name'] >
	>
	type $mol_float__sub_mol_grid_11 = $mol_type_enforce<
		ReturnType< $mol_grid['col_head_content'] >
		,
		ReturnType< $mol_float['sub'] >
	>
	type $mol_check_expand__level_mol_grid_12 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_level'] >
		,
		ReturnType< $mol_check_expand['level'] >
	>
	type $mol_check_expand__label_mol_grid_13 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_content'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_check_expand__expanded_mol_grid_14 = $mol_type_enforce<
		ReturnType< $mol_grid['cell_expanded'] >
		,
		ReturnType< $mol_check_expand['expanded'] >
	>
	export class $mol_grid extends $mol_view {
		rows( ): readonly($mol_view)[]
		Table( ): $mol_grid_table
		head_cells( ): readonly($mol_view)[]
		cells( id: any): readonly($mol_view)[]
		cell_content( id: any): readonly($mol_view_content)[]
		cell_content_text( id: any): ReturnType< $mol_grid['cell_content'] >
		cell_content_number( id: any): ReturnType< $mol_grid['cell_content'] >
		col_head_content( id: any): readonly($mol_view_content)[]
		cell_level( id: any): number
		cell_expanded( id: any, next?: boolean ): boolean
		needle( ): string
		cell_value( id: any): string
		Cell_dimmer( id: any): $mol_dimmer
		row_height( ): number
		row_ids( ): readonly(string[])[]
		row_id( id: any): any
		col_ids( ): readonly(any)[]
		records( ): Record<string, any>
		record( id: any): any
		hierarchy( ): any
		hierarchy_col( ): string
		minimal_width( ): number
		sub( ): readonly(any)[]
		Head( ): $mol_grid_row
		Row( id: any): $mol_grid_row
		Cell( id: any): $mol_view
		cell( id: any): any
		Cell_text( id: any): $mol_grid_cell
		Cell_number( id: any): $mol_grid_number
		Col_head( id: any): $mol_float
		Cell_branch( id: any): $mol_check_expand
		Cell_content( id: any): readonly(any)[]
	}
	
	export class $mol_grid_table extends $mol_list {
	}
	
	export class $mol_grid_row extends $mol_view {
		cells( ): readonly($mol_view)[]
		sub( ): ReturnType< $mol_grid_row['cells'] >
	}
	
	export class $mol_grid_cell extends $mol_view {
		minimal_height( ): number
	}
	
	export class $mol_grid_number extends $mol_grid_cell {
	}
	
}

//# sourceMappingURL=grid.view.tree.d.ts.map
declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        cell_content_text(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_image extends $mol_view {
		uri( ): string
		title( ): string
		loading( ): string
		decoding( ): string
		cors( ): any
		natural_width( ): number
		natural_height( ): number
		load( next?: any ): any
		dom_name( ): string
		attr( ): Record<string, any> & ReturnType< $mol_view['attr'] >
		event( ): Record<string, any>
		minimal_width( ): number
		minimal_height( ): number
	}
	
}

//# sourceMappingURL=image.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_image extends $.$mol_image {
        natural_width(next?: null): number;
        natural_height(next?: null): number;
        load(): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__uri_mol_link_iconed_1 = $mol_type_enforce<
		ReturnType< $mol_link_iconed['icon'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_image__title_mol_link_iconed_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_image['title'] >
	>
	export class $mol_link_iconed extends $mol_link {
		icon( ): string
		Icon( ): $mol_image
		title( ): ReturnType< $mol_link_iconed['uri'] >
		sub( ): readonly(any)[]
		content( ): readonly(any)[]
		host( ): string
	}
	
}

//# sourceMappingURL=iconed.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): readonly any[];
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_wait_timeout_async(this: $, timeout: number): Promise<void>;
    function $mol_wait_timeout(this: $, timeout: number): void;
}

declare namespace $ {

	type $mol_link__uri_mol_embed_native_1 = $mol_type_enforce<
		ReturnType< $mol_embed_native['uri'] >
		,
		ReturnType< $mol_link['uri'] >
	>
	type $mol_link__sub_mol_embed_native_2 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_embed_native extends $mol_scroll {
		uri( next?: string ): string
		title( ): string
		Fallback( ): $mol_link
		uri_change( next?: any ): any
		dom_name( ): string
		window( ): any
		attr( ): ({ 
			'src': ReturnType< $mol_embed_native['uri'] >,
		})  & ReturnType< $mol_scroll['attr'] >
		sub( ): readonly(any)[]
		message( ): ({ 
			hashchange( next?: ReturnType< $mol_embed_native['uri_change'] > ): ReturnType< $mol_embed_native['uri_change'] >,
		}) 
	}
	
}

//# sourceMappingURL=native.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_native extends $.$mol_embed_native {
        window(): Window;
        load(frame: HTMLIFrameElement): Promise<Window>;
        uri_resource(): string;
        message_listener(): $mol_dom_listener;
        sub_visible(): readonly $mol_view_content[];
        message_receive(event?: MessageEvent<[string, string]>): void;
        uri_change(event: MessageEvent<[string, string]>): void;
        auto(): (Window | $mol_dom_listener)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_icon_youtube extends $mol_icon {
		path( ): string
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $ {

	export class $mol_frame extends $mol_embed_native {
		allow( ): string
		html( ): any
		attr( ): ({ 
			'tabindex': ReturnType< $mol_frame['tabindex'] >,
			'allow': ReturnType< $mol_frame['allow'] >,
			'src': ReturnType< $mol_frame['uri'] >,
			'srcdoc': ReturnType< $mol_frame['html'] >,
		}) 
		fullscreen( ): boolean
		accelerometer( ): boolean
		autoplay( ): boolean
		encription( ): boolean
		gyroscope( ): boolean
		pip( ): boolean
		clipboard_read( ): boolean
		clipboard_write( ): boolean
	}
	
}

//# sourceMappingURL=frame.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_frame_demo
     */
    class $mol_frame extends $.$mol_frame {
        window(): any;
        allow(): string;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_image__title_mol_embed_service_1 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_service_2 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_preview'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_frame__title_mol_embed_service_3 = $mol_type_enforce<
		ReturnType< $mol_embed_service['title'] >
		,
		ReturnType< $mol_frame['title'] >
	>
	type $mol_frame__uri_mol_embed_service_4 = $mol_type_enforce<
		ReturnType< $mol_embed_service['video_embed'] >
		,
		ReturnType< $mol_frame['uri'] >
	>
	export class $mol_embed_service extends $mol_check {
		active( next?: boolean ): boolean
		title( ): string
		video_preview( ): string
		Image( ): $mol_image
		Hint( ): $mol_icon_youtube
		video_embed( ): string
		Frame( ): $mol_frame
		uri( ): string
		video_id( ): string
		checked( next?: ReturnType< $mol_embed_service['active'] > ): ReturnType< $mol_embed_service['active'] >
		sub( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=service.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_service extends $.$mol_embed_service {
        sub(): $.$mol_frame[] | ($.$mol_image | $mol_icon_youtube)[];
    }
}

declare namespace $ {
}

declare namespace $ {

	export class $mol_embed_youtube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=youtube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_youtube extends $.$mol_embed_youtube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	export class $mol_embed_rutube extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=rutube.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_rutube extends $.$mol_embed_rutube {
        video_embed(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	export class $mol_embed_vklive extends $mol_embed_service {
	}
	
}

//# sourceMappingURL=vklive.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_vklive extends $.$mol_embed_vklive {
        video_embed(): string;
        channel_id(): string;
        video_id(): string;
        video_preview(): string;
    }
}

declare namespace $ {

	type $mol_image__title_mol_embed_any_1 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_image['title'] >
	>
	type $mol_image__uri_mol_embed_any_2 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_image['uri'] >
	>
	type $mol_embed_native__title_mol_embed_any_3 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_native['title'] >
	>
	type $mol_embed_native__uri_mol_embed_any_4 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_native['uri'] >
	>
	type $mol_embed_youtube__title_mol_embed_any_5 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_youtube['title'] >
	>
	type $mol_embed_youtube__uri_mol_embed_any_6 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_youtube['uri'] >
	>
	type $mol_embed_rutube__title_mol_embed_any_7 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_rutube['title'] >
	>
	type $mol_embed_rutube__uri_mol_embed_any_8 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_rutube['uri'] >
	>
	type $mol_embed_vklive__title_mol_embed_any_9 = $mol_type_enforce<
		ReturnType< $mol_embed_any['title'] >
		,
		ReturnType< $mol_embed_vklive['title'] >
	>
	type $mol_embed_vklive__uri_mol_embed_any_10 = $mol_type_enforce<
		ReturnType< $mol_embed_any['uri'] >
		,
		ReturnType< $mol_embed_vklive['uri'] >
	>
	export class $mol_embed_any extends $mol_view {
		title( ): string
		uri( ): string
		Image( ): $mol_image
		Object( ): $mol_embed_native
		Youtube( ): $mol_embed_youtube
		Rutube( ): $mol_embed_rutube
		Vklive( ): $mol_embed_vklive
	}
	
}

//# sourceMappingURL=any.view.tree.d.ts.map
declare namespace $.$$ {
    class $mol_embed_any extends $.$mol_embed_any {
        type(): "object" | "image" | "youtube" | "rutube" | "vklive";
        sub(): $.$mol_image[] | $.$mol_embed_youtube[] | $.$mol_embed_native[];
    }
}

declare namespace $ {

	type $mol_check_expand__checked_mol_expander_1 = $mol_type_enforce<
		ReturnType< $mol_expander['expanded'] >
		,
		ReturnType< $mol_check_expand['checked'] >
	>
	type $mol_check_expand__expandable_mol_expander_2 = $mol_type_enforce<
		ReturnType< $mol_expander['expandable'] >
		,
		ReturnType< $mol_check_expand['expandable'] >
	>
	type $mol_check_expand__label_mol_expander_3 = $mol_type_enforce<
		ReturnType< $mol_expander['label'] >
		,
		ReturnType< $mol_check_expand['label'] >
	>
	type $mol_view__sub_mol_expander_4 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_mol_expander_5 = $mol_type_enforce<
		ReturnType< $mol_expander['content'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	export class $mol_expander extends $mol_list {
		expanded( next?: boolean ): boolean
		expandable( ): boolean
		label( ): readonly(any)[]
		Trigger( ): $mol_check_expand
		Tools( ): any
		Label( ): $mol_view
		content( ): readonly(any)[]
		Content( ): $mol_list
		rows( ): readonly(any)[]
	}
	
}

//# sourceMappingURL=expander.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Component which expands any content on title click.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_expander_demo
     */
    class $mol_expander extends $.$mol_expander {
        rows(): $mol_view[];
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text__text_mol_text_1 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_label'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_2 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_3 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__code_sidebar_showed_mol_text_4 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text['code_sidebar_showed'] >
	>
	type $mol_text__text_mol_text_5 = $mol_type_enforce<
		ReturnType< $mol_text['spoiler_content'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_6 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_7 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__code_sidebar_showed_mol_text_8 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text['code_sidebar_showed'] >
	>
	type $mol_paragraph__sub_mol_text_9 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_paragraph['sub'] >
	>
	type $mol_text__text_mol_text_10 = $mol_type_enforce<
		ReturnType< $mol_text['quote_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__auto_scroll_mol_text_11 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__highlight_mol_text_12 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_13 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__code_sidebar_showed_mol_text_14 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text['code_sidebar_showed'] >
	>
	type $mol_text_list__type_mol_text_15 = $mol_type_enforce<
		ReturnType< $mol_text['list_type'] >
		,
		ReturnType< $mol_text_list['type'] >
	>
	type $mol_text_list__text_mol_text_16 = $mol_type_enforce<
		ReturnType< $mol_text['list_text'] >
		,
		ReturnType< $mol_text_list['text'] >
	>
	type $mol_text_list__highlight_mol_text_17 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_list['highlight'] >
	>
	type $mol_text_list__uri_resolve_mol_text_18 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_list['uri_resolve'] >
	>
	type $mol_text_list__code_sidebar_showed_mol_text_19 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text_list['code_sidebar_showed'] >
	>
	type $mol_text_header__minimal_height_mol_text_20 = $mol_type_enforce<
		number
		,
		ReturnType< $mol_text_header['minimal_height'] >
	>
	type $mol_text_header__level_mol_text_21 = $mol_type_enforce<
		ReturnType< $mol_text['header_level'] >
		,
		ReturnType< $mol_text_header['level'] >
	>
	type $mol_text_header__content_mol_text_22 = $mol_type_enforce<
		ReturnType< $mol_text['block_content'] >
		,
		ReturnType< $mol_text_header['content'] >
	>
	type $mol_text_header__arg_mol_text_23 = $mol_type_enforce<
		ReturnType< $mol_text['header_arg'] >
		,
		ReturnType< $mol_text_header['arg'] >
	>
	type $mol_text_code__text_mol_text_24 = $mol_type_enforce<
		ReturnType< $mol_text['pre_text'] >
		,
		ReturnType< $mol_text_code['text'] >
	>
	type $mol_text_code__row_themes_mol_text_25 = $mol_type_enforce<
		ReturnType< $mol_text['pre_themes'] >
		,
		ReturnType< $mol_text_code['row_themes'] >
	>
	type $mol_text_code__highlight_mol_text_26 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code['highlight'] >
	>
	type $mol_text_code__uri_resolve_mol_text_27 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code['uri_resolve'] >
	>
	type $mol_text_code__sidebar_showed_mol_text_28 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text_code['sidebar_showed'] >
	>
	type $mol_view__dom_name_mol_text_29 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_view['dom_name'] >
	>
	type $mol_grid__head_cells_mol_text_30 = $mol_type_enforce<
		ReturnType< $mol_text['table_head_cells'] >
		,
		ReturnType< $mol_grid['head_cells'] >
	>
	type $mol_grid__rows_mol_text_31 = $mol_type_enforce<
		ReturnType< $mol_text['table_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_32 = $mol_type_enforce<
		ReturnType< $mol_text['table_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_33 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__text_mol_text_34 = $mol_type_enforce<
		ReturnType< $mol_text['table_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_35 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_36 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__code_sidebar_showed_mol_text_37 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text['code_sidebar_showed'] >
	>
	type $mol_grid__rows_mol_text_38 = $mol_type_enforce<
		ReturnType< $mol_text['grid_rows'] >
		,
		ReturnType< $mol_grid['rows'] >
	>
	type $mol_grid_row__cells_mol_text_39 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cells'] >
		,
		ReturnType< $mol_grid_row['cells'] >
	>
	type $mol_text__auto_scroll_mol_text_40 = $mol_type_enforce<
		any
		,
		ReturnType< $mol_text['auto_scroll'] >
	>
	type $mol_text__text_mol_text_41 = $mol_type_enforce<
		ReturnType< $mol_text['grid_cell_text'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_text__highlight_mol_text_42 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text['highlight'] >
	>
	type $mol_text__uri_resolve_mol_text_43 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text['uri_resolve'] >
	>
	type $mol_text__code_sidebar_showed_mol_text_44 = $mol_type_enforce<
		ReturnType< $mol_text['code_sidebar_showed'] >
		,
		ReturnType< $mol_text['code_sidebar_showed'] >
	>
	type $mol_dimmer__dom_name_mol_text_45 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_dimmer['dom_name'] >
	>
	type $mol_dimmer__needle_mol_text_46 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_dimmer['needle'] >
	>
	type $mol_dimmer__haystack_mol_text_47 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_dimmer['haystack'] >
	>
	type $mol_text_span__dom_name_mol_text_48 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_text_span['dom_name'] >
	>
	type $mol_text_span__type_mol_text_49 = $mol_type_enforce<
		ReturnType< $mol_text['line_type'] >
		,
		ReturnType< $mol_text_span['type'] >
	>
	type $mol_text_span__sub_mol_text_50 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_text_span['sub'] >
	>
	type $mol_text_code_line__numb_showed_mol_text_51 = $mol_type_enforce<
		boolean
		,
		ReturnType< $mol_text_code_line['numb_showed'] >
	>
	type $mol_text_code_line__highlight_mol_text_52 = $mol_type_enforce<
		ReturnType< $mol_text['highlight'] >
		,
		ReturnType< $mol_text_code_line['highlight'] >
	>
	type $mol_text_code_line__text_mol_text_53 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_text_code_line['text'] >
	>
	type $mol_text_code_line__uri_resolve_mol_text_54 = $mol_type_enforce<
		ReturnType< $mol_text['uri_resolve'] >
		,
		ReturnType< $mol_text_code_line['uri_resolve'] >
	>
	type $mol_text_code_line__syntax_mol_text_55 = $mol_type_enforce<
		ReturnType< $mol_text['code_syntax'] >
		,
		ReturnType< $mol_text_code_line['syntax'] >
	>
	type $mol_link_iconed__uri_mol_text_56 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_57 = $mol_type_enforce<
		ReturnType< $mol_text['line_content'] >
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_link_iconed__uri_mol_text_58 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_link_iconed['uri'] >
	>
	type $mol_link_iconed__content_mol_text_59 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_link_iconed['content'] >
	>
	type $mol_embed_any__uri_mol_text_60 = $mol_type_enforce<
		ReturnType< $mol_text['link_uri'] >
		,
		ReturnType< $mol_embed_any['uri'] >
	>
	type $mol_embed_any__title_mol_text_61 = $mol_type_enforce<
		ReturnType< $mol_text['line_text'] >
		,
		ReturnType< $mol_embed_any['title'] >
	>
	type $mol_expander__label_mol_text_62 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['label'] >
	>
	type $mol_expander__content_mol_text_63 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_expander['content'] >
	>
	export class $mol_text extends $mol_list {
		auto_scroll( ): any
		block_content( id: any): readonly(any)[]
		quote_text( id: any): string
		highlight( ): string
		uri_resolve( id: any): string
		code_sidebar_showed( ): boolean
		list_type( id: any): string
		list_text( id: any): string
		header_level( id: any): number
		header_arg( id: any): Record<string, any>
		pre_text( id: any): string
		pre_themes( id: any): readonly(string)[]
		table_head_cells( id: any): readonly(any)[]
		table_rows( id: any): readonly(any)[]
		table_cells( id: any): readonly(any)[]
		table_cell_text( id: any): string
		grid_rows( id: any): readonly(any)[]
		grid_cells( id: any): readonly(any)[]
		grid_cell_text( id: any): string
		line_text( id: any): string
		line_type( id: any): string
		line_content( id: any): readonly(any)[]
		code_syntax( ): any
		link_uri( id: any): string
		link_host( id: any): string
		spoiler_label( id: any): string
		Spoiler_label( id: any): $mol_text
		spoiler_content( id: any): string
		Spoiler_content( id: any): $mol_text
		uri_base( ): string
		text( ): string
		param( ): string
		flow_tokens( ): readonly(any)[]
		block_text( id: any): string
		auto( ): readonly(any)[]
		Paragraph( id: any): $mol_paragraph
		Quote( id: any): $mol_text
		List( id: any): $mol_text_list
		item_index( id: any): number
		Header( id: any): $mol_text_header
		Pre( id: any): $mol_text_code
		Cut( id: any): $mol_view
		Table( id: any): $mol_grid
		Table_row( id: any): $mol_grid_row
		Table_cell( id: any): $mol_text
		Grid( id: any): $mol_grid
		Grid_row( id: any): $mol_grid_row
		Grid_cell( id: any): $mol_text
		String( id: any): $mol_dimmer
		Span( id: any): $mol_text_span
		Code_line( id: any): $mol_text_code_line
		Link( id: any): $mol_link_iconed
		Link_http( id: any): $mol_link_iconed
		Embed( id: any): $mol_embed_any
		Spoiler( id: any): $mol_expander
	}
	
	type $mol_link__arg_mol_text_header_1 = $mol_type_enforce<
		ReturnType< $mol_text_header['arg'] >
		,
		ReturnType< $mol_link['arg'] >
	>
	type $mol_link__hint_mol_text_header_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link['hint'] >
	>
	type $mol_link__sub_mol_text_header_3 = $mol_type_enforce<
		ReturnType< $mol_text_header['content'] >
		,
		ReturnType< $mol_link['sub'] >
	>
	export class $mol_text_header extends $mol_paragraph {
		arg( ): Record<string, any>
		content( ): readonly(any)[]
		Link( ): $mol_link
		level( ): number
		sub( ): readonly(any)[]
	}
	
	export class $mol_text_span extends $mol_paragraph {
		type( ): string
		dom_name( ): string
		attr( ): ({ 
			'mol_text_type': ReturnType< $mol_text_span['type'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=text.view.tree.d.ts.map
declare namespace $.$$ {
    /**
     * Markdown visualizer.
     * @see https://mol.hyoo.ru/#!section=demos/demo=mol_text_demo
     */
    class $mol_text extends $.$mol_text {
        flow_tokens(): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        block_type(index: number): string;
        rows(): ($mol_view | $.$mol_paragraph | $.$mol_text_code | $.$mol_grid)[];
        param(): string;
        header_level(index: number): number;
        header_arg(index: number): {
            [x: string]: string;
        };
        list_type(index: number): string;
        item_index(index: number): number;
        pre_text(index: number): string;
        pre_themes(index: number): string[];
        quote_text(index: number): string;
        list_text(index: number): string;
        cell_content(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $.$mol_text[];
        table_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        table_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        grid_content(indexBlock: number): string[][];
        grid_rows(blockId: number): $mol_grid_row[];
        grid_cells(id: {
            block: number;
            row: number;
        }): $.$mol_text[];
        grid_cell_text(id: {
            block: number;
            row: number;
            cell: number;
        }): string;
        uri_base(): string;
        uri_base_abs(): URL;
        uri_resolve(uri: string): string;
        code_syntax(): $mol_syntax2<{
            'code-indent': RegExp;
            'code-docs': RegExp;
            'code-comment-block': RegExp;
            'code-link': RegExp;
            'code-comment-inline': RegExp;
            'code-string': RegExp;
            'code-number': RegExp;
            'code-call': RegExp;
            'code-sexpr': RegExp;
            'code-field': RegExp;
            'code-keyword': RegExp;
            'code-global': RegExp;
            'code-word': RegExp;
            'code-decorator': RegExp;
            'code-tag': RegExp;
            'code-punctuation': RegExp;
        }>;
        block_text(index: number): string;
        block_content(index: number): ($.$mol_dimmer | $.$mol_text_code_line | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        line_tokens(path: readonly number[]): Readonly<{
            name: string;
            found: string;
            chunks: string[];
        }[]>;
        line_token(path: readonly number[]): {
            name: string;
            found: string;
            chunks: string[];
        };
        line_type(path: readonly number[]): string;
        line_text(path: readonly number[]): string;
        line_content(path: readonly number[]): ($.$mol_dimmer | $.$mol_text_code_line | $.$mol_link_iconed | $.$mol_embed_any | $mol_text_span)[];
        link_uri(path: readonly number[]): string;
        link_host(path: readonly number[]): string;
        auto_scroll(): void;
        spoiler_rows(index: number): string[];
        spoiler_label(index: number): string;
        spoiler_content(index: number): string;
    }
    class $mol_text_header extends $.$mol_text_header {
        dom_name(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
}

declare namespace $ {

	type $mol_text_list_item__index_mol_text_list_1 = $mol_type_enforce<
		ReturnType< $mol_text_list['item_index'] >
		,
		ReturnType< $mol_text_list_item['index'] >
	>
	type $mol_text_list_item__sub_mol_text_list_2 = $mol_type_enforce<
		ReturnType< $mol_text_list['block_content'] >
		,
		ReturnType< $mol_text_list_item['sub'] >
	>
	export class $mol_text_list extends $mol_text {
		type( ): string
		auto_scroll( ): any
		attr( ): ({ 
			'mol_text_list_type': ReturnType< $mol_text_list['type'] >,
		})  & ReturnType< $mol_text['attr'] >
		Paragraph( id: any): $mol_text_list_item
	}
	
	export class $mol_text_list_item extends $mol_paragraph {
		index( ): number
		attr( ): ({ 
			'mol_text_list_item_index': ReturnType< $mol_text_list_item['index'] >,
		})  & ReturnType< $mol_paragraph['attr'] >
	}
	
}

//# sourceMappingURL=list.view.tree.d.ts.map
declare namespace $ {

	type $mol_text__text_bog_atelier_grimoire_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['intro'] >
		,
		ReturnType< $mol_text['text'] >
	>
	type $mol_paragraph__title_bog_atelier_grimoire_2 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows_bog_atelier_grimoire_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['sigil_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__title_bog_atelier_grimoire_4 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows_bog_atelier_grimoire_5 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['sign_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $bog_atelier_icon__entry_id_bog_atelier_grimoire_6 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['entry_id'] >
		,
		ReturnType< $bog_atelier_icon['entry_id'] >
	>
	type $mol_paragraph__title_bog_atelier_grimoire_7 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['entry_title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_bog_atelier_grimoire_8 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['entry_canon'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_bog_atelier_grimoire_9 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_atelier_grimoire_10 = $mol_type_enforce<
		ReturnType< $bog_atelier_grimoire['entry_note'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_list__rows_bog_atelier_grimoire_11 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_atelier_grimoire_12 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	export class $bog_atelier_grimoire extends $mol_list {
		intro( ): string
		Intro( ): $mol_text
		Sigils_title( ): $mol_paragraph
		sigil_rows( ): readonly(any)[]
		Sigils( ): $mol_list
		Signs_title( ): $mol_paragraph
		sign_rows( ): readonly(any)[]
		Signs( ): $mol_list
		entry_id( id: any): string
		Icon( id: any): $bog_atelier_icon
		entry_title( id: any): string
		Title( id: any): $mol_paragraph
		entry_canon( id: any): string
		Canon( id: any): $mol_paragraph
		Name( id: any): $mol_view
		entry_note( id: any): string
		Note( id: any): $mol_paragraph
		Text( id: any): $mol_list
		rows( ): readonly(any)[]
		Entry( id: any): $mol_view
		canon_manga( ): string
		canon_fan( ): string
	}
	
}

//# sourceMappingURL=grimoire.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_grimoire extends $.$bog_atelier_grimoire {
        sigil_rows(): $mol_view[];
        sign_rows(): $mol_view[];
        entry(id: string): $bog_atelier_lexicon_entry;
        entry_id(id: string): string;
        entry_title(id: string): string;
        entry_note(id: string): string;
        entry_canon(id: string): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    type $bog_atelier_course_sign = readonly [id: string, angle: number, size?: number, inverted?: boolean];
    type $bog_atelier_course_lesson = {
        id: string;
        title: string;
        source: string;
        text: string;
        sigil: string;
        signs: readonly $bog_atelier_course_sign[];
        gap_at: number;
        shaky?: number;
    };
    const $bog_atelier_course_lessons: readonly $bog_atelier_course_lesson[];
    const $bog_atelier_course_scale = 0.95;
    const $bog_atelier_course_gap: number;
    function $bog_atelier_course_base(lesson: $bog_atelier_course_lesson): number[][];
    function $bog_atelier_course_guide(lesson: $bog_atelier_course_lesson): number[][];
}

declare namespace $ {

	type $mol_list__rows_bog_atelier_course_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['menu_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_paragraph__title_bog_atelier_course_2 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['number'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_bog_atelier_course_3 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['lesson_title'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_bog_atelier_course_4 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['lesson_source'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_view__sub_bog_atelier_course_5 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_atelier_course_6 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['lesson_text'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $bog_atelier_stage__base_bog_atelier_course_7 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['base'] >
		,
		ReturnType< $bog_atelier_stage['base'] >
	>
	type $bog_atelier_stage__guide_bog_atelier_course_8 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['guide'] >
		,
		ReturnType< $bog_atelier_stage['guide'] >
	>
	type $bog_atelier_stage__lines_bog_atelier_course_9 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['lines'] >
		,
		ReturnType< $bog_atelier_stage['lines'] >
	>
	type $bog_atelier_stage__cast_key_bog_atelier_course_10 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['cast_key'] >
		,
		ReturnType< $bog_atelier_stage['cast_key'] >
	>
	type $mol_list__rows_bog_atelier_course_11 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['result_rows'] >
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_atelier_course_12 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['actions'] >
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_list__rows_bog_atelier_course_13 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_list['rows'] >
	>
	type $mol_view__sub_bog_atelier_course_14 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_view__sub_bog_atelier_course_15 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_view['sub'] >
	>
	type $mol_paragraph__title_bog_atelier_course_16 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_paragraph__title_bog_atelier_course_17 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['result_line'] >
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_minor__title_bog_atelier_course_18 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_minor['title'] >
	>
	type $mol_button_minor__click_bog_atelier_course_19 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['again'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_major__title_bog_atelier_course_20 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_button_major['title'] >
	>
	type $mol_button_major__click_bog_atelier_course_21 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['next'] >
		,
		ReturnType< $mol_button_major['click'] >
	>
	type $mol_paragraph__title_bog_atelier_course_22 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_paragraph['title'] >
	>
	type $mol_button_minor__click_bog_atelier_course_23 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['pick'] >
		,
		ReturnType< $mol_button_minor['click'] >
	>
	type $mol_button_minor__enabled_bog_atelier_course_24 = $mol_type_enforce<
		ReturnType< $bog_atelier_course['item_open'] >
		,
		ReturnType< $mol_button_minor['enabled'] >
	>
	type $mol_button_minor__attr_bog_atelier_course_25 = $mol_type_enforce<
		({ 
			'bog_atelier_course_item_done': ReturnType< $bog_atelier_course['item_done'] >,
			'bog_atelier_course_item_current': ReturnType< $bog_atelier_course['item_current'] >,
		})  & ReturnType< $mol_button_minor['attr'] >
		,
		ReturnType< $mol_button_minor['attr'] >
	>
	type $mol_button_minor__sub_bog_atelier_course_26 = $mol_type_enforce<
		readonly(any)[]
		,
		ReturnType< $mol_button_minor['sub'] >
	>
	export class $bog_atelier_course extends $mol_view {
		menu_rows( ): readonly(any)[]
		Menu( ): $mol_list
		number( ): string
		Number( ): $mol_paragraph
		lesson_title( ): string
		Title( ): $mol_paragraph
		lesson_source( ): string
		Source( ): $mol_paragraph
		Head( ): $mol_view
		lesson_text( ): string
		Text( ): $mol_paragraph
		base( ): readonly(any)[]
		guide( ): readonly(any)[]
		lines( next?: readonly(any)[] ): readonly(any)[]
		cast_key( ): number
		Stage( ): $bog_atelier_stage
		result_rows( ): readonly(any)[]
		Result( ): $mol_list
		actions( ): readonly(any)[]
		Actions( ): $mol_view
		Lesson( ): $mol_list
		result_line( id: any): string
		again( next?: any ): any
		next( next?: any ): any
		pick( id: any, next?: any ): any
		item_open( id: any): boolean
		item_done( id: any): boolean
		item_current( id: any): boolean
		item_mark( id: any): string
		Item_mark( id: any): $mol_view
		item_title( id: any): string
		Item_title( id: any): $mol_view
		sub( ): readonly(any)[]
		Hint( ): $mol_paragraph
		Result_line( id: any): $mol_paragraph
		Again( ): $mol_button_minor
		Next( ): $mol_button_major
		Finish( ): $mol_paragraph
		Item( id: any): $mol_button_minor
	}
	
}

//# sourceMappingURL=course.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_course extends $.$bog_atelier_course {
        lessons(): readonly $bog_atelier_course_lesson[];
        done(next?: readonly string[]): readonly string[];
        first_open(): number;
        current_id(next?: string): string;
        current_index(): number;
        lesson(): $bog_atelier_course_lesson;
        lines_of(id: string, next?: readonly $bog_atelier_ink_line[]): readonly $bog_atelier_ink_line[];
        lines(next?: readonly $bog_atelier_ink_line[]): readonly $bog_atelier_ink_line[];
        base(): number[][];
        guide(): number[][];
        reading(): $bog_atelier_glyph_reading;
        closed(): boolean;
        cast_key(): number;
        auto(): void;
        number(): string;
        lesson_title(): string;
        lesson_source(): string;
        lesson_text(): string;
        result(): string[];
        result_rows(): $.$mol_paragraph[];
        result_line(index: number): string;
        actions(): ($mol_button_minor | $.$mol_paragraph)[];
        again(): void;
        next(): void;
        menu_rows(): $mol_button_minor[];
        item_open(id: string): boolean;
        item_done(id: string): boolean;
        item_current(id: string): boolean;
        item_mark(id: string): string;
        item_title(id: string): string;
        pick(id: string): void;
    }
}

declare namespace $ {
}

declare namespace $ {

	type $mol_switch__value_bog_atelier_app_1 = $mol_type_enforce<
		ReturnType< $bog_atelier_app['screen'] >
		,
		ReturnType< $mol_switch['value'] >
	>
	type $mol_switch__options_bog_atelier_app_2 = $mol_type_enforce<
		({ 
			'course': string,
			'sheet': string,
			'book': string,
		}) 
		,
		ReturnType< $mol_switch['options'] >
	>
	type $mol_check_icon__hint_bog_atelier_app_3 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_check_icon['hint'] >
	>
	type $mol_check_icon__checked_bog_atelier_app_4 = $mol_type_enforce<
		ReturnType< $bog_atelier_app['sound'] >
		,
		ReturnType< $mol_check_icon['checked'] >
	>
	type $mol_check_icon__Icon_bog_atelier_app_5 = $mol_type_enforce<
		ReturnType< $bog_atelier_app['Sound_icon'] >
		,
		ReturnType< $mol_check_icon['Icon'] >
	>
	type $mol_link_source__uri_bog_atelier_app_6 = $mol_type_enforce<
		string
		,
		ReturnType< $mol_link_source['uri'] >
	>
	export class $bog_atelier_app extends $mol_page {
		Theme( ): $mol_theme_auto
		screen( next?: string ): string
		Nav( ): $mol_switch
		sound( next?: boolean ): boolean
		Sound_icon( ): $mol_icon_volume_high
		Sound( ): $mol_check_icon
		Lights( ): $mol_lights_toggle
		Source( ): $mol_link_source
		screen_body( ): readonly(any)[]
		title( ): string
		plugins( ): readonly(any)[]
		head( ): readonly(any)[]
		tools( ): readonly(any)[]
		body( ): ReturnType< $bog_atelier_app['screen_body'] >
		Sheet( ): $bog_atelier_workshop
		Book( ): $bog_atelier_grimoire
		Course( ): $bog_atelier_course
	}
	
}

//# sourceMappingURL=app.view.tree.d.ts.map
declare namespace $.$$ {
    class $bog_atelier_app extends $.$bog_atelier_app {
        screen(next?: string): string;
        sound(next?: boolean): boolean;
        screen_body(): $.$bog_atelier_workshop[] | $.$bog_atelier_grimoire[] | $.$bog_atelier_course[];
    }
}

declare namespace $ {
}

export = $;
//# sourceMappingURL=web.d.ts.map
