import { Component, Output, EventEmitter } from '@angular/core';
import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component {
  
  @Output() childTwoMessge = new EventEmitter();

  sendMessageToParent(){
    this.childTwoMessge.emit('I must study maths');
  }

  constructor(private demo: ChildService) {
    
  }

  incChild1Count(){
    this.demo.incCount();
  }
 

}
