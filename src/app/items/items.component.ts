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
  filters  = {lostOrFound:'', category:'', location:''};
  itemRequestAction: any;
  itemRequestMessage: string;

  constructor(private itemsService: ItemsService, private routes: ActivatedRoute, private userGuard:UserGuard) {
   }

  applyFilters = () => {
    this.setItems()
  }

  setItems() {
    this.itemsService.getItems(this.filters)
    .subscribe((items) => {
      this.items = items;
    })
  }

  ngOnInit() {
    this.routes.params.subscribe(params => {
      if(params['lostOrFound'])
      this.filters.lostOrFound = params['lostOrFound'];
      this.setItems();
    })
  }
}

const mockItems: Item[] = [
  <Item> {
    _id:'agagag', location:{name:'Velechery', city:{name:'Chennai'}}, 
    title:'Yamaha Bike Key', date:new Date(), 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain"]
  },
  <Item> {
    _id:'agagaaf', location:{name:'Polikarai', city:{name:'Chennai'}}, 
    title:'Ladies Handbag', date:new Date(), 
    imageUrl:'../../assets/images/handBag.jpg', 
    lostOrFound:'Lost', category:'Bags', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Aswin", "Ebby", "Rss"]
  },
  <Item> {
    _id:'agagag', location:{name:'Vetturnimadam', city:{name:'Chennai'}}, 
    title:'Ebby', date:new Date(), 
    imageUrl:'../../assets/images/Ebby.jpg', 
    lostOrFound:'Lost', category:'Person', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Kovai guy", "kidnapping", "childabuse"]
  },
  <Item> {
    _id:'agagag', location:{name:'Kottar', city:{name:'Chennai'}}, 
    title:'Yamaha Bike Key', date:new Date(), 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain", "empty", "just joking"]
  }
]