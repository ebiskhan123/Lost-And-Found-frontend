import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../models/item.model';
import { ItemsService } from "src/app/services/items.service";

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
  @Input('item') item: Item;  
  constructor(private itemServices:ItemsService) { }

  ngOnInit() {
    this.item.date = new Date(this.item.date);    
  }

  resolveItem() {
    this.itemServices.resolveItem(this.item._id)
    .subscribe((result) => {
      if(result.error) {
        console.log(result.error);
      }
    })
  }

}
