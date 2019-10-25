import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../models/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  @Input('item') item: Item;
  @Input('claimButtonClick') claimButtonClick;
  @Input('isRequestDisabled') isRequestDisabled: boolean;
  
  constructor() {
  }

  ngOnInit() {
    this.item.date = new Date(this.item.date);
  }

}
