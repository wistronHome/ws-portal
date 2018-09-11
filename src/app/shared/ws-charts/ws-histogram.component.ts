import {AfterViewInit, Component, Input} from '@angular/core';
import * as G2 from '@antv/g2/src';
@Component({
    selector: 'ws-histogram',
    templateUrl: './ws-histogram.component.html',
    styleUrls: []
})

export class WsHistogramComponent implements AfterViewInit {
    @Input() data;
    @Input() title: string;
    constructor() {}
    ngAfterViewInit () {
        const chart = new G2.Chart({
            container: 'chart',
            width: 380,
            height: 240,
        });
        // Step 2: 载入数据源
        chart.source(this.data);
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval().position('genre*sold').color('genre')
        // Step 4: 渲染图表
        chart.render();
    }
}
