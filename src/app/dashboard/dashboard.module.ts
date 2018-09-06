/**
 * Created by guanyj on  2018/9/4
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard.component';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './dashboard.routes';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SharesModule} from '../shared/shares.module';

@NgModule({
    imports: [
        CommonModule,
        NgZorroAntdModule,
        SharesModule,
        RouterModule.forChild(ROUTER_CONFIG)
    ],
    declarations: [
        DashboardComponent
    ],
})

export class DashboardModule { }
