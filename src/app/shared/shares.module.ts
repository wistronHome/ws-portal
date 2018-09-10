import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {WsHistogramComponent} from './ws-charts';
import {NgZorroAntdModule} from 'ng-zorro-antd';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        NgZorroAntdModule
    ],
    declarations: [
        WsHistogramComponent
    ],
    providers: [],
    exports: [
        WsHistogramComponent
    ],
    entryComponents: []
})

export class SharesModule { }
