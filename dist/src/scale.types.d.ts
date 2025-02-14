import { type ScaleRange } from './state';
import type { Point, Scale } from 'chart.js';
import type { LimitOptions } from './options';
export type ZoomFunction = (scale: Scale, zoom: number, center: Point, limits: LimitOptions) => boolean;
export type ZoomRectFunction = (scale: Scale, from: number, to: number, limits: LimitOptions) => boolean;
export type PanFunction = (scale: Scale, delta: number, limits: LimitOptions) => boolean;
export declare function zoomDelta(val: number | undefined, min: number | undefined, range: number, newRange: number): ScaleRange;
export declare function updateRange(scale: Scale, { min, max }: ScaleRange, limits?: LimitOptions, zoom?: boolean | 'pan'): boolean;
export declare const zoomFunctions: Record<string, ZoomFunction>;
export declare const zoomRectFunctions: Record<string, ZoomRectFunction>;
export declare const panFunctions: Record<string, PanFunction>;
//# sourceMappingURL=scale.types.d.ts.map