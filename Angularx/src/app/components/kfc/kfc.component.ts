import { Component, OnInit, Input } from '@angular/core';
import { KfcService } from '../../services/kfc.service';

@Component({
  selector: 'app-kfc',
  templateUrl: './kfc.component.html',
  styleUrls: ['./kfc.component.css'],
 // providers: [KfcService]
})
export class KfcComponent  {
@Input() message;
  name = 'Fast Food:';
  count:number=0;
  constructor(private myinfo: KfcService) {console.log('Kfc01 Comp ctr'); }

}
