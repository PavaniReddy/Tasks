import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActiveUsersComponent } from './active-users.component';

const routes: Routes = [
  {path: "actv", component:ActiveUsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActiveUsersRoutingModule { }
