import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NotifyComponent } from './notify/notify.component';
import { Client1Component } from './client1/client1.component';
import { routes } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NotifyComponent,
    Client1Component
  ],
  imports:  [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
