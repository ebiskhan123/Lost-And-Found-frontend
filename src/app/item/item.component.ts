import { Component, OnInit } from '@angular/core';
import { ItemsService } from "src/app/services/items.service";
import { ActivatedRoute } from "@angular/router";
import { Item } from "src/app/models/item.model";

@Component({
  selector: 'app-item-view',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item
  itemRequestMessage
  itemRequestAction

  constructor(private itemsService: ItemsService, private routes: ActivatedRoute) {   }

  setItem = (itemId) => {
    this.itemsService.getItem(itemId)
    .subscribe((item) => {
      this.item = item
      this.setItemRequestAction()
    })
  }

  setItemRequestAction = () => {
    if(this.item.lostOrFound === 'Found')
      this.itemRequestAction = this.sendClaimRequest
    else
      this.itemRequestAction = this.sendFoundRequest
  }

  sendItemRequest() {
    this.itemRequestAction()
    .subscribe((result) => {
      if(result.error) {
        console.log(result.error);
      }
    })
  }

  sendClaimRequest = () => {
    return this.itemsService.sendItemClaimRequest(this.itemRequestMessage, this.item._id);
  }

  sendFoundRequest = () => {
    return this.itemsService.sendItemFoundRequest(this.itemRequestMessage, this.item._id);    
  }

  ngOnInit() {
    this.routes.params.subscribe((params) => this.setItem(params['itemId']))
  }

}
