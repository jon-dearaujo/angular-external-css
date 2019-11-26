import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { MyCoolComponent } from './my-cool.component';

@NgModule({
  declarations: [
    AppComponent, MyCoolComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private http: HttpClient) {}

  ngDoBootstrap(app: ApplicationRef) {
  app.bootstrap(AppComponent);
  }
}
