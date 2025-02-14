import type { Chart, ChartEvent } from 'chart.js';
import type { ZoomPluginOptions } from './options';
declare const _default: {
    id: string;
    version: string;
    defaults: ZoomPluginOptions;
    start(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    beforeEvent(chart: Chart, { event }: {
        event: ChartEvent;
        replay: boolean;
        cancelable: true;
        inChartArea: boolean;
    }): boolean | void;
    beforeUpdate(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    beforeDatasetsDraw(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    afterDatasetsDraw(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    beforeDraw(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    afterDraw(chart: Chart, _args: unknown, options: ZoomPluginOptions): void;
    stop(chart: Chart): void;
    panFunctions: Record<string, import("./scale.types").PanFunction>;
    zoomFunctions: Record<string, import("./scale.types").ZoomFunction>;
    zoomRectFunctions: Record<string, import("./scale.types").ZoomRectFunction>;
};
export default _default;
//# sourceMappingURL=plugin.d.ts.map