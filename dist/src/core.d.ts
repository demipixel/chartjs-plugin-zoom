import { type ScaleRange, type State } from './state.js';
import type { Chart, Point, Scale, UpdateMode } from 'chart.js';
import type { ZoomTrigger } from './options.js';
import type { ZoomAmount } from './types.js';
export declare function zoom(chart: Chart, amount: ZoomAmount, transition?: UpdateMode, trigger?: ZoomTrigger): void;
export declare function zoomRect(chart: Chart, p0: Point, p1: Point, transition?: UpdateMode, trigger?: ZoomTrigger): void;
export declare function zoomScale(chart: Chart, scaleId: string, range: ScaleRange, transition?: UpdateMode, trigger?: ZoomTrigger): void;
export declare function resetZoom(chart: Chart, transition?: UpdateMode): void;
export declare function getZoomLevel(chart: Chart): number;
type PanAmount = number | Partial<Point>;
export declare function pan(chart: Chart, delta: PanAmount, enabledScales?: Scale[], transition?: UpdateMode): void;
export declare function getInitialScaleBounds(chart: Chart): Record<string, {
    min?: number | undefined;
    max?: number | undefined;
}>;
export declare function getZoomedScaleBounds(chart: Chart): Record<string, {
    min?: number | undefined;
    max?: number | undefined;
}>;
export declare function isZoomedOrPanned(chart: Chart): boolean;
export declare function isZoomingOrPanningState(state: State): boolean;
export declare function isZoomingOrPanning(chart: Chart): boolean;
export {};
//# sourceMappingURL=core.d.ts.map