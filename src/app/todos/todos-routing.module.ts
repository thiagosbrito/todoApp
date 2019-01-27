import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListViewComponent } from './views';

const routes: Routes = [{
  path: '',
  redirectTo: 'list',
  pathMatch: 'full'
}, {
    path: 'list',
    component: ListViewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
