import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitUserInfoService {
url:string="https://api.github.com/users";

  constructor(private http: HttpClient) { }

  getUserInfo(){
    return this
    .http
    .get(`${this.url}/wycats`);

  }
}
