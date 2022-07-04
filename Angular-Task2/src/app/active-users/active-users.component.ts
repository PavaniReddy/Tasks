import { Component, OnInit } from '@angular/core';
import { userslist } from 'src/app/userslist/userslist';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  userList: any

  constructor(private list:userslist) { }
  show: boolean = false;
  ngOnInit(): void {
    this.userList = this.list.getUsers();
  }

}

  