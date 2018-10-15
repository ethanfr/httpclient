import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent  {
  title = 'User Info';
  dataArray:User[];
  
  constructor(private userService: UserService) { }

  ngOnInit() {
      this
          .userService
          .getUsers()
          .subscribe((data: User[]) => {
           this.dataArray=data;
          });
  }

}
