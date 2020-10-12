import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientAddComponentComponent } from './components/client-add-component/client-add-component.component';
import { ClientListComponentComponent } from './components/client-list-component/client-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientAddComponentComponent,
    ClientListComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
