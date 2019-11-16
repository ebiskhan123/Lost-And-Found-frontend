import { Component, OnInit } from '@angular/core';
import { ItemsService } from "src/app/services/items.service";
import { ActivatedRoute } from "@angular/router";
import { Item } from "src/app/models/item.model";
import { AppService } from "src/app/services/app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-item-view',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  item  
  itemRequestMessage
  itemRequestAction

  constructor(private router: Router, private app: AppService, private itemsService: ItemsService, private routes: ActivatedRoute) {   }

  setItem = (itemId) => {
    this.itemsService.getItem(itemId)
    .subscribe((item) => {
      this.item = <Item>item
      this.item.date = new Date(this.item.date)
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
        console.log(result.error)
        this.app.makeToast(`Couldn't process request`)
      }
      else
        {
          this.app.makeToast('Done')
          this.router.navigateByUrl('items')
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
