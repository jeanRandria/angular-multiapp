import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// List of providers
const providers = [];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class App1Module { }

@NgModule({})
export class App1SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: App1Module,
      providers
    };
  }
}