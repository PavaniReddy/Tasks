import { Component, OnInit } from '@angular/core';
import { userslist } from '../userslist/userslist';

@Component({
  selector: 'app-delete-users',
  templateUrl: './delete-users.component.html',
  styleUrls: ['./delete-users.component.css']
})
export class DeleteUsersComponent implements OnInit {

  userList: any
  constructor(private list:userslist) { }
  show: boolean = false;
  ngOnInit(): void {
    this.userList=this.list.getUsers()
  }

}
