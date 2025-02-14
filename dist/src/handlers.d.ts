import type { Chart } from 'chart.js';
import type { ModeOption, ZoomPluginOptions } from './options';
export declare function mouseMove(chart: Chart, event: MouseEvent): void;
export declare function mouseDown(chart: Chart, event: MouseEvent): void;
export declare function computeDragRect(chart: Chart, mode: ModeOption | undefined, pointEvents: {
    dragStart: MouseEvent;
    dragEnd: MouseEvent;
}, maintainAspectRatio: boolean | undefined): {
    width: number;
    height: number;
    zoomX: number;
    zoomY: number;
    top: number;
    left: number;
    right: number;
    bottom: number;
};
export declare function mouseUp(chart: Chart, event: MouseEvent): void;
export declare function wheel(chart: Chart, event: WheelEvent & {
    target?: HTMLCanvasElement;
}): void;
export declare function addListeners(chart: Chart, options: ZoomPluginOptions): void;
export declare function removeListeners(chart: Chart): void;
//# sourceMappingURL=handlers.d.ts.map