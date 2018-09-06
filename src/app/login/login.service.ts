/**
 * Created by guanyj on  2018/9/5
 */
import {Injectable} from "@angular/core";
import {AuthorityService, SystemConfigService} from "ws-common";

@Injectable()
export class LoginService {

    constructor(
        private $systemConfigService: SystemConfigService,
        private $authorityService: AuthorityService,
    ) {

    }

    login(userName: string, password: string) {
        return new Promise((resolve, reject) => {
            if (userName === 'admin' && password === 'admin') {
                this.$systemConfigService.setSystemConfig({
                    language: 'zh_CN',
                    permissions: [100000, 100001, 100003, 100004, 100006, 100008, 100009, 100010]
                });
                this.$authorityService.setCurrentUser({
                    id: '56781376472189347',
                    userName: userName
                });
                resolve();
            } else {
                reject();
            }
        });
    }
}
