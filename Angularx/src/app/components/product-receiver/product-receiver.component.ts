import { Component, OnInit } from '@angular/core';
import { MachineProduct, Products } from '../../../models/machineproduct';
import { CommunicationService } from '../../services/communication.service';

@Component({
  selector: 'app-product-receiver',
  templateUrl: './product-receiver.component.html',
  styleUrls: ['./product-receiver.component.css']
})
export class ProductReceiverComponent implements OnInit {
  prd: MachineProduct;
  prds = Products;
  CatId: number | string;
  private _FilterProducts: Array<MachineProduct>;
  constructor(private serv: CommunicationService) {
      this.prd = new MachineProduct(0, '', 0);
      this.CatId = 'All';
      this._FilterProducts = new Array<MachineProduct>();
  }

  ngOnInit() {
      this.serv.receivedFilter.subscribe((param: number) => {
          this.CatId = param;
          console.log('param: ', param) ;
      });
  }

  get FilterProducts(): Array<MachineProduct> { // am: used as a getter in html (*ngFor)
      console.log('FilterProducts() called: ', this.CatId) ;
      this._FilterProducts = new Array<MachineProduct>();
      if (this.CatId > 0) {
          this.prds.forEach(p => {
              if (p.CatId === this.CatId) {
                  this._FilterProducts.push(p);
              }
          });
      } else {
          this._FilterProducts = this.prds;
      }
      return this._FilterProducts;
  }
}
