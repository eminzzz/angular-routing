import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public email: string = "test@test.test";
  public password: string = "test";

  public onSubmit(): void {
    if ((this.email && this.password) && (this.email === "test@test.test" && this.password === "test")) {
      this._loginService.login();
      this._router.navigate([""]).then()
    }
  }

  constructor(private _loginService: LoginService, private _router: Router) {
  }

  ngOnInit(): void {
  }

}
