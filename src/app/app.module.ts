import { BrowserModule } from '@angular/platform-browser';
import { NgModule, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form/input-form.component';
import { ThesaurusService } from './thesaurus.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ThesaurusService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
