import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import {WsHistogramComponent} from './ws-charts';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
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
