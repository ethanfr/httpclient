import { Component, OnInit } from '@angular/core';
import { MachineCategory, Categories } from '../../../models/machinecategory';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-category-sender',
  templateUrl: './category-sender.component.html',
  styleUrls: ['./category-sender.component.css']
})
export class CategorySenderComponent implements OnInit {
  cat: MachineCategory;
  cats = Categories;
  constructor(private serv: CommunicationService) {
      this.cat = new MachineCategory(0, '');
  }
  ngOnInit(): void { }

  getSelectedCategory(c: MachineCategory): void {
      this.cat = c;
      this.serv.raiseEvent(this.cat.CatId);
  }

}
