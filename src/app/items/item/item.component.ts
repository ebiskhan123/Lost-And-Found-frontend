import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../models/item.model';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  @Input('item') item: Item;
  @Input('isRequestDisabled') isRequestDisabled: boolean;

  claimButtonClick = () => {
    this.router.navigateByUrl(`item/${this.item._id}`)
  }
  
  constructor(private router:Router) {
  }

  ngOnInit() {
    this.item.date = new Date(this.item.date);
  }

}
