import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../models/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input('item') item: Item;
  @Input('claimButtonClick') claimButtonClick;
  @Input('isRequestDisabled') isRequestDisabled: boolean;
  constructor() {
  }

  ngOnInit() {
  }

}
