import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'act', loadChildren:()=>import('./active-users/active-users.module').then(mod => mod.ActiveUsersModule)},
  {path:'duser', loadChildren:()=>import('./delete-users/delete-users.module').then(mod => mod.DeleteUsersModule)},
  {path:'manage', loadChildren:()=>import('./manage-users/manage-users.module').then(mod => mod.ManageUsersModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
