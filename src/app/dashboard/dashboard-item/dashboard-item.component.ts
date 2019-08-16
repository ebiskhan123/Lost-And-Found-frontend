import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  @Input('item') item: Item;  
  constructor() { }

  ngOnInit() {
  }

}
