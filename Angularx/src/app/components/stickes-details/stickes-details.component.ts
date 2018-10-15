import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Sticker } from '../../../models/sticker';


@Component({
  selector: 'app-stickes-details',
  templateUrl: './stickes-details.component.html',
  styleUrls: ['./stickes-details.component.css']
})
export class StickesDetailsComponent{ 
  @Input() sticker:Sticker=null;
  @Output() checked = new EventEmitter();
  showCheck: boolean;

  onChecked() {
                console.log('stickies clicked');

                this.checked.emit(this.sticker);
    }

  toggleCheck() {
                    this.showCheck = !this.showCheck;
   }
}
