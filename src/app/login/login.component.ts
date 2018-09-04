/**
 * Created by guanyj on  2018/9/4
 */

import {Component, OnInit} from "@angular/core";
import {AuthorityService} from "ws-common";
import {NzNotificationService} from "ng-zorro-antd";

@Component({
    selector: 'ws-portal-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
    userName: string = 'admin';
    password: string = '';

    constructor(
        private $authorityService: AuthorityService,
        private $notifyService: NzNotificationService
    ) {}

    ngOnInit(): void {
        if (this.$authorityService.getCurrentUser()) {
            window.location.href = '/';
        }
    }

    login() {
        if (this.userName === 'admin' && this.password === 'admin') {
            this.$authorityService.setCurrentUser({id: '123', userName: this.userName});
            this.$notifyService.success('登陆成功', '即将跳转至首页');
            window.location.href = '/';
        } else {
            this.$notifyService.error('登陆失败', '用户名或者密码错误');
        }
    }

}
