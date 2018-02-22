import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoComponent } from './todo.component';
import { TODO_ROUTES } from './todo.routing';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './todo.service';

@NgModule({
  imports: [
    TODO_ROUTES,
    CommonModule,
    HttpClientModule
  ],
  providers: [TodoService],
  declarations: [TodoComponent]
})
export class TodoModule { }
