import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoComponent } from './components/todo/todo.component';
import { importType } from '@angular/compiler/src/output/output_ast';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
