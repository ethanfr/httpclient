import { Component, OnInit } from '@angular/core';
import { Sticker } from '../../../models/sticker';



@Component({
  selector: 'app-stickies',
  templateUrl: './stickies.component.html',
  styleUrls: ['./stickies.component.css']
})
export class StickiesComponent  {
 // sticker:Sticker;
  public stickies = [
    {category: 'Home', value: 'Pay the mobile bill.', color: 'lightseagreen'},
    {category: 'Bank', value: 'Submit the declaration form.', color: 'lightgreen'},
    {category: 'Home', value: 'Pay the electricity bill.', color: 'lightseagreen'},
    {category: 'Office', value: 'Submit travel expense xls.', color: 'lightblue'},
    {category: 'Office', value: 'It is coffee time.', color: 'lightblue'}
  
  ];
  onPostitChecked(evt: any, i: number) { const pInfo = this.stickies.splice(i, 1); }
}


