import { Component, OnInit, Input } from '@angular/core';
import { ChildService } from '../../services/child.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component{
  @Input() childmessage: any;

  constructor(private demo: ChildService) {
    
  }

}
