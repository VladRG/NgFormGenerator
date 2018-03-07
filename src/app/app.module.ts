import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { VgFormGeneratorModule } from './vg-form-generator';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    VgFormGeneratorModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
