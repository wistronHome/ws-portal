///<reference path="ws-charts/ws-histogram.component.ts"/>
import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {WsDiscountingComponent, WsHistogramComponent} from './ws-charts';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ],
    declarations: [
        WsHistogramComponent,
        WsDiscountingComponent
    ],
    providers: [],
    exports: [
        WsHistogramComponent,
        WsDiscountingComponent
    ],
    entryComponents: []
})

export class SharesModule { }
