import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../../services/login.service";
import {Router} from "@angular/router";
import {AuthGuard} from "../../../services/auth.guard";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(public loginService: LoginService, private _router: Router, public authGuard: AuthGuard) {
  }

  public logout() {
    this.loginService.logout()
    this._router.navigate([""]).then();
  }

  ngOnInit(): void {

  }

}
