import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../models/product';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
arrFetch:Product[];
showForms:boolean=false;
myProduct:Product;
  constructor(private arrProduct:ProductsService) { }

  ngOnInit() {
this.arrFetch=this.arrProduct.strData;
  }

  deleteData(index){

this.arrProduct.strData.splice(index,1)
  }
  editData(product:Product){
    this.showForms=true;
    this.myProduct=cloneDeep(product);
  }

showForm(){
this.showForms=!this.showForms;
  }

  onNotify(event){
  console.log(event);
  }
}
