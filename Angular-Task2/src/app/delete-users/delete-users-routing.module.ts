import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteUsersComponent } from './delete-users.component';

const routes: Routes = [
  {path:"dusers", component:DeleteUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeleteUsersRoutingModule { }
