import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { ListViewComponent } from './views/list-view/list-view.component';

@NgModule({
  declarations: [ListViewComponent],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
