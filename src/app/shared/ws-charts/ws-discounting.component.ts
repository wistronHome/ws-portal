import {AfterViewInit, Component, Input} from '@angular/core';
import * as G2 from '@antv/g2/src';

@Component({
    selector: 'ws-discounting',
    templateUrl: './ws-discounting.component.html',
    styleUrls: []
})

export class WsDiscountingComponent implements AfterViewInit {
    @Input() data;
    @Input() title: string;
    constructor() {}
    ngAfterViewInit() {
        const chart = new G2.Chart({
            container: 'discounting',
            width: 800,
            height: 240
        });

        const defs = {
            'month': {
                type: 'cat',
                alias: '月份', // 别名，如果没有别名显示成字段名 month
                values: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月' ]
            },
            'tem': {
                alias: '温度'
            }
        };

        chart.source(this.data, defs);

        chart.tooltip({
            showTitle: false // 默认标题不显示
        });
        chart.line().position('month*tem').tooltip('month*tem');
        chart.render();
    }
}
