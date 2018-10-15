import { Component, OnInit } from '@angular/core';
import { Repos } from '../../../models/repos';
import { GitrepoinfoService } from '../../services/gitrepoinfo.service';

@Component({
  selector: 'app-gitrepos',
  templateUrl: './gitrepos.component.html',
  styleUrls: ['./gitrepos.component.css']
})
export class GitreposComponent implements OnInit {
repos:Repos[];
  constructor(private gitrepoinfoService: GitrepoinfoService) { }

  ngOnInit() {
    this.gitrepoinfoService.getRepoInfo().subscribe((data:Repos[])=>{
      this.repos=data;
    })
  }

}
