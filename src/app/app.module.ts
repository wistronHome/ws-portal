import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from "@angular/router";
import {ROUTER_CONFIG} from "./app.routes";
import {WsCommonModule} from "ws-common";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgZorroAntdModule,
        WsCommonModule,
        RouterModule.forRoot(ROUTER_CONFIG)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {

    }
}
