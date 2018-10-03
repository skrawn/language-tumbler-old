import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TranslateOptionComponent } from './translate-option/translate-option.component';
import { GoogleTranslateService } from './google-translate.service';

@NgModule({
  declarations: [
    AppComponent,
    TranslateOptionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    GoogleTranslateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
