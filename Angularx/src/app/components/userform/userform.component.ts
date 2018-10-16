import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent  {
@Input() objProduct:Product;
@Output() notify:EventEmitter<Product> = new EventEmitter<Product>();

onCancel(){
  this.objProduct = new Product();
}


onSubmit(product:Product){
this.notify.emit(product);
}
}
