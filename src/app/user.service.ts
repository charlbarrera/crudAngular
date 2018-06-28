import { Injectable } from '@angular/core';
import { User } from './user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:User[]=[{name:'charchar',mail:'wquiko'}];
  constructor() { }

  getList(){
    return this.users;
  }

  create(user:User){
    this.users.push(user);
  }
}
