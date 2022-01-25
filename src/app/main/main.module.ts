import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HeaderComponent} from './header/header.component';
import {RouterModule, Routes} from "@angular/router";
import {MainComponent} from "./main.component";
import {FooterComponent} from './footer/footer.component';
import {CardsComponent} from './cards/cards.component';
import {HelpComponent} from './help/help.component';
import { HomeComponent } from './home/home.component'
import {AuthGuard} from "../../services/auth.guard";

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "",
        component: HomeComponent,
      },
      {
        path: "cards",
        canActivate: [
          AuthGuard
        ],
        runGuardsAndResolvers: "always",
        component: CardsComponent
      },
      {
        path: "help",
        component: HelpComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    CardsComponent,
    HelpComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainModule {
}
