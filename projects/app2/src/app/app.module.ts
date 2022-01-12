import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { View1Component } from './view1/view1.component';
import { View2Component } from './view2/view2.component';

// List of providers
const providers: never[] = [];

@NgModule({
  declarations: [AppComponent, View1Component, View2Component, NavComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers,
  bootstrap: [AppComponent],
})
export class AppModule {}

@NgModule({})
export class App2SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AppModule,
      providers,
    };
  }
}
