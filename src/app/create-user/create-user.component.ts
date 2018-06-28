import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  newUser=new User;

  constructor(private _userservice:UserService) { }

  ngOnInit() {
  }

  create(){
    this._userservice.create(this.newUser);
    this.newUser = new User;
  }

}
