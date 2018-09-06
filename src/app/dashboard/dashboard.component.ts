/**
 * Created by guanyj on  2018/9/4
 */

import {AfterViewInit, Component, OnInit} from "@angular/core";
import G2 from '@antv/g2'
import {NavigationService} from "ws-common";

@Component({
    selector: 'ws-portal-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit, AfterViewInit {
    data = [
        { genre: 'Sports', sold: 275 },
        { genre: 'Strategy', sold: 115 },
        { genre: 'Action', sold: 120 },
        { genre: 'Shooter', sold: 350 },
        { genre: 'Other', sold: 150 }
    ];

    constructor(
        private $navigationService: NavigationService
    ) {

    }

    ngOnInit() {

    }

    ngAfterViewInit() {
        const chart = new G2.Chart({
            container: 'chart',
            width: 380,
            height: 240
        });
        // Step 2: 载入数据源
        chart.source(this.data);
        // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
        chart.interval().position('genre*sold').color('genre')
        // Step 4: 渲染图表
        chart.render();
    }

    locationToUser() {
        this.$navigationService.navigate('user/user-manage', 'user', {id: 12345, name: 'guanyj'});
    }
}
