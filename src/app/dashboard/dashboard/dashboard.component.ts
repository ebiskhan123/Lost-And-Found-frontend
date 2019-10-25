import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/item.model'
import { ItemsService } from "../../services/items.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  items:any;

  constructor(private itemsService: ItemsService) {
      this.items = mockItems;
   }

  ngOnInit() {
    this.itemsService.getMyItems()
    .subscribe((items) => {
      this.items = items;
    })
  }

}

const mockItems: Item[] = [
  
]