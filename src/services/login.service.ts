import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public isLogin: boolean = !!localStorage.getItem("isLogin");

  public login() {
    this.isLogin = true
    localStorage.setItem("isLogin", String(this.isLogin))
  }

  public logout() {
    this.isLogin = false
    localStorage.removeItem("isLogin")
  }
}
