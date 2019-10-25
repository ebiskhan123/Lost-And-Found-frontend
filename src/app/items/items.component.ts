import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import { ItemsService } from "../services/items.service";
import { ActivatedRoute } from "@angular/router";
import { UserGuard } from "src/app/guards/user.guard";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any;
  itemOnFocus: Item;
  filters: any = {};
  itemRequestAction: any;
  itemRequestMessage: string;

  constructor(private itemsService: ItemsService, private routes: ActivatedRoute, private userGuard:UserGuard) {
    this.itemOnFocus = mockItems[0];
   }

  setItemRequestForm = (item) => {
    if(this.userGuard.canActivate(this.routes.snapshot)){}
    this.itemOnFocus = item;
    if(this.itemOnFocus.lostOrFound == 'Lost')
      {
        this.itemRequestAction = this.sendFoundRequest;
      }
    else
      {
        this.itemRequestAction = this.sendClaimRequest;
      }
    this.showItemRequestModal();    
  }

  setItems() {
    this.itemsService.getItems(this.filters)
    .subscribe((items) => {
      this.items = items;
    })
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      this.items = mockItems;
      this.filters.lostOrFound = params['lostOrFound'];
      this.setItems();
      if(params.itemId)
        {
          this.itemsService.getItem(params.itemId)
          .subscribe((item) => {
            this.setItemRequestForm(item);
          })
        }
    })
  }

  sendItemRequest() {
    this.itemRequestAction()
    .subscribe((result) => {
      if(result.error) {
        console.log(result.error);
      }
      this.hideItemRequestModal();
    })
  }

  sendClaimRequest = () => {
    return this.itemsService.sendItemClaimRequest(this.itemRequestMessage, this.itemOnFocus._id);
  }

  sendFoundRequest = () => {
    return this.itemsService.sendItemFoundRequest(this.itemRequestMessage, this.itemOnFocus._id);    
  }

  showItemRequestModal = () => {
    document.getElementById('itemClaimModal').style.display = 'block';
  }

  hideItemRequestModal = () => {
    document.getElementById('itemClaimModal').style.display = 'none';    
  }

}

const mockItems: Item[] = [
  <Item> {
    _id:'agagag', location:'Near Statue of Liberty', 
    title:'Yamaha Bike Key', date:new Date(), 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain"]
  },
  <Item> {
    _id:'agagaaf', location:'Gandhi Park', 
    title:'Ladies Handbag', date:new Date(), 
    imageUrl:'../../assets/images/handBag.jpg', 
    lostOrFound:'Lost', category:'Bags', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Aswin", "Ebby", "Rss"]
  },
  <Item> {
    _id:'agagag', location:'Mars Foundations', 
    title:'Ebby', date:new Date(), 
    imageUrl:'../../assets/images/Ebby.jpg', 
    lostOrFound:'Lost', category:'Person', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Kovai guy", "kidnapping", "childabuse"]
  },
  <Item> {
    _id:'agagag', location:'Near Statue of Liberty', 
    title:'Yamaha Bike Key', date:new Date(), 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain", "empty", "just joking"]
  }
]