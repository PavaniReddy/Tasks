import { Component, OnInit } from '@angular/core';
import { userslist } from '../userslist/userslist';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.css']
})
export class ManageUsersComponent implements OnInit {

  userList: any
  constructor(private list: userslist) { }

  ngOnInit(): void {
    this.userList = this.list.getUsers()
  }

  selectedUser: any;
  onSelect(user: any): void {
    this.selectedUser = user;
  }

}
