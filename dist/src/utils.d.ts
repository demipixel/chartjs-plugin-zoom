import type { Chart, Point, Scale } from 'chart.js';
import type { DragOptions, ModeOption, ModifierKey, PanOptions } from './options';
export declare const getModifierKey: (opts?: DragOptions | PanOptions) => ModifierKey | undefined;
export declare const keyPressed: (key: ModifierKey | undefined, event: TouchEvent | MouseEvent | PointerEvent) => boolean | undefined;
export declare const keyNotPressed: (key: ModifierKey | undefined, event: TouchEvent | MouseEvent | PointerEvent) => boolean | undefined;
export declare function directionEnabled(mode: ModeOption | undefined, dir: 'x' | 'y', chart: Chart): boolean;
export declare function debounce(fn: () => void, delay: number | undefined): () => number | undefined;
/**
 * Evaluate the chart's mode, scaleMode, and overScaleMode properties to
 * determine which axes are eligible for scaling.
 * options.overScaleMode can be a function if user want zoom only one scale of many for example.
 */
export declare function getEnabledScalesByPoint(options: PanOptions | undefined, point: Point, chart: Chart): Scale[];
//# sourceMappingURL=utils.d.ts.map