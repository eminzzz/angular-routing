import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotfoundComponent} from "./app/components/notfound/notfound.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./app/main/main.module").then((m) => m.MainModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./app/auth/auth.module").then((m) => m.AuthModule)
  },
  {
    path: "**",
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class Routing {
}
