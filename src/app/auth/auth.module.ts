import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from "@angular/router";
import {SignUpComponent} from './sign-up/sign-up.component';
import {AuthComponent} from './auth.component';
import {FormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: "",
    component: AuthComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
    ],
  }
]

@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModule {
}
