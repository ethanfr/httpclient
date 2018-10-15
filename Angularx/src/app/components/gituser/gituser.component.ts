import { Component, OnInit } from '@angular/core';
import { GitUserInfoService } from '../../services/git-user-info.service';
import { GitUser } from '../../../models/gituser';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.css']
})
export class GituserComponent implements OnInit {
user:GitUser;
  constructor(private gitUserInfoService: GitUserInfoService) { }

  ngOnInit() {
    this.gitUserInfoService.getUserInfo().subscribe((gitUser:GitUser)=> {
this.user=gitUser;
console.log(gitUser);
    }
    
    )
  }

}
