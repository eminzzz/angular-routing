import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public loginService: LoginService) {
  }

  canActivate() {
    return this.loginService.isLogin;
  }
}
