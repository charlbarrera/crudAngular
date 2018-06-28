import { Component, OnInit } from '@angular/core';
import { User } from '../../user';
import { UserService } from '../../user.service';



@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.scss']
})
export class TableUsersComponent implements OnInit {

  listUser:User[]=[];

  constructor(private _userservice:UserService ) { }

  ngOnInit() {
    this.listUser = this._userservice.getList();
  }

  delete(user){
      if(confirm('seguro?'))
      this._userservice.delete(user);
  }

}
