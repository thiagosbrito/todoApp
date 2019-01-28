import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from './../core/core.module';
import { TodosRoutingModule } from './todos-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ListViewComponent } from './views/list-view/list-view.component';

import { MainComponent } from './views/main/main.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { AngularFireDatabase } from '@angular/fire/database';

@NgModule({
  declarations: [ListViewComponent, MainComponent, TodoListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TodosRoutingModule,
    CoreModule
  ],
  providers: [AngularFireDatabase]
})
export class TodosModule { }
