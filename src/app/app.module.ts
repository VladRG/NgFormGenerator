import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { VgFormGeneratorModule } from './vg-form-generator';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VgFormGeneratorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
