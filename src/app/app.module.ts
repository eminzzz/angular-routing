import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Routing } from '../routing';
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
