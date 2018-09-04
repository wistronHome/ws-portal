/**
 * Created by guanyj on  2018/9/4
 */
import {Routes} from "@angular/router";
import {AuthorityGuardService} from "ws-common";

export const ROUTER_CONFIG: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/dashboard'},
    {path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule', canActivate: [AuthorityGuardService]},
    {path: 'login', loadChildren: './login/login.module#LoginModule'}
];
