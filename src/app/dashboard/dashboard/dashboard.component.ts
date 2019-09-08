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
  <Item> {
    _id:'agagag', location:'Near Statue of Liberty', 
    title:'Yamaha Bike Key', date:'August 10, 2019', 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain"]
  },
  <Item> {
    _id:'agagaaf', location:'Gandhi Park', 
    title:'Ladies Handbag', date:'August 22, 2019', 
    imageUrl:'../../assets/images/handBag.jpg', 
    lostOrFound:'Lost', category:'Bags', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Aswin", "Ebby", "Rss"]
  },
  <Item> {
    _id:'agagag', location:'Mars Foundations', 
    title:'Ebby', date:'August 10, 2019', 
    imageUrl:'../../assets/images/Ebby.jpg', 
    lostOrFound:'Lost', category:'Person', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["Kovai guy", "kidnapping", "childabuse"]
  },
  <Item> {
    _id:'agagag', location:'Near Statue of Liberty', 
    title:'Yamaha Bike Key', date:'August 10, 2019', 
    imageUrl:'../../assets/images/keys.jpg', 
    lostOrFound:'Found', category:'Keys', 
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", 
    tags:["bike key", "yamaha", "no keychain", "empty", "just joking"]
  }
]