import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ServiceInterceptor} from './service/service.Interceptor';
import {APP_ROUTES} from './app.routing';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    PageNotFoundComponent
  ],
  imports: [
    APP_ROUTES,
    HttpClientModule,
    BrowserModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServiceInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
