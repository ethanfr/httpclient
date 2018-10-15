import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitrepoinfoService {
  url:string="https://api.github.com/users";
  constructor(private http: HttpClient) { }

  getRepoInfo(){
    return this
    .http
    .get(`${this.url}/wycats/repos`)

  }
}
