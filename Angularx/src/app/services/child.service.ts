import { Injectable, Input } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ChildService {
  counter = 0 ;
  constructor() { }

  incCount(){
    this.counter++;
  }
}
