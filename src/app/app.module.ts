import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TestComponent} from './test/test.component';
import {DialogComponent} from './dialog/dialog.component';
import {MaterialModule} from "./material/material.module";
import {ToastrModule} from "ngx-toastr";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AloComponent } from './alo/alo.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    DialogComponent,
    AloComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ToastrModule.forRoot(),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
