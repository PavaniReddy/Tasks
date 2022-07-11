import { Injectable } from '@angular/core';
import {User} from '../../models/user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  static users: User[] = [
    {
      id: '1',
      firstName: 'Tony',
      lastName: 'Stark',
      age: 23,
      login: 'ironman',
      password: '12*****',
      isDeleted: true,
    },
    {
      id: '2',
      firstName: 'Steve',
      lastName: 'Rogers',
      age: 22,
      login: 'captainamerica',
      password: '34*****',
      isDeleted: false,
    },
    {
      id: '3',
      firstName: 'Bruce',
      lastName: 'Banner',
      age: 23,
      login: 'hulk',
      password: '99*****',
      isDeleted: true,
    },
    {
      id: '4',
      firstName: 'Chris',
      lastName: 'Hemsworth',
      age: 23,
      login: 'thor',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '5',
      firstName: 'Clint',
      lastName: 'Barton',
      age: 24,
      login: 'hawkeye',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '6',
      firstName: 'Natasha',
      lastName: 'Romanova',
      age: 22,
      login: 'blackwidow',
      password: '09*****',
      isDeleted: false,
    },
    {
      id: '7',
      firstName: 'Chadwick',
      lastName: 'Boseman',
      age: 23,
      login: 'blackpanther',
      password: '09*****',
      isDeleted: true,
    },
  ]
  constructor() { }

  static getActiveUsers(): User[] {
    return this.users.filter((user:User) => !user.isDeleted);
  }

  static getDeletedUsers(): User[] {
    return this.users.filter((user:User) => user.isDeleted);
  }

  static setActivation(id:string, isDeleted:boolean){
    const userId = this.users.findIndex((user:User) => user.id == id);
    this.users[userId].isDeleted = isDeleted;
    console.log("In Service :",this.users);  
  }
}
