import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {NgZorroAntdModule} from 'ng-zorro-antd';
import {RouterModule} from '@angular/router';
import {ROUTER_CONFIG} from './app.routes';
import {I18nService, WsCommonModule} from 'ws-common';
import {SharesModule} from './shared/shares.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        NgZorroAntdModule,
        WsCommonModule,
        RouterModule.forRoot(ROUTER_CONFIG),
        //  引入公共模块
        SharesModule
    ],
    providers: [
        {provide: I18nService}
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor() {

    }
}
