import { Injectable } from '@angular/core';
import { model } from './model';

@Injectable({
  providedIn: 'root'
})
export class userslist {
  userList: Array<model> = (
    [{id: 1,firstName: "John",lastName: "Doe",age: 22,login: "johndoe@gmail.com",password: "doe@11",isDeleted: false},
    {id: 2,firstName: "Peter",lastName: "Parker",age: 19,login: "peterparker4@gmail.com",password: "parker_00",isDeleted: true},
    {id: 3,firstName: "David",lastName: "Rose",age: 18,login: "david@gmail.com",password: "david_rose",isDeleted: false},
    {id: 4,firstName: "Daniel",lastName: "Rose",age: 19,login: "daniel21@gmail.com",password: "123Daniel",isDeleted: true},
    {id: 5,firstName: "Alexis",lastName: "Parker",age: 20,login: "parkeralexis11@gmail.com",password: "Alexis_12",isDeleted: false},
    {id: 6,firstName: "Lexi",lastName: "Brown",age: 21,login: "lexi2@gmail.com",password: "Brown_3",isDeleted: true},
    {id: 7,firstName: "Sean",lastName: "Paul",age: 25,login: "sean.paul@gmail.com",password: "sean_55",isDeleted: false},
    {id: 8,firstName: "Alison",lastName: "Schwimmer",age: 19,login: "alison@gmail.com",password: "Shwimmer33",isDeleted: true},
    {id: 9,firstName: "Joey",lastName: "Doe",age: 26,login: "doe.john@gmail.com",password: "2Doe3",isDeleted: false}]
  )
  constructor() { }
  getUsers(){
    return this.userList
  }
}
