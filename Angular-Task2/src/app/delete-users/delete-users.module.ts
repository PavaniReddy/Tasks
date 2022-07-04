import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeleteUsersRoutingModule } from './delete-users-routing.module';
import { DeleteUsersComponent } from './delete-users.component';


@NgModule({
  declarations: [
    DeleteUsersComponent
  ],
  imports: [
    CommonModule,
    DeleteUsersRoutingModule
  ]
})
export class DeleteUsersModule { }
