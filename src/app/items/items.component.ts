import { Component, OnInit } from '@angular/core';
import { Item } from '../models/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: any;

  constructor() {
    this.items = mockItems;
   }

  ngOnInit() {
  }

}

const mockItems: Item[] = [
  <Item>{id:'agagag', imageUrl:'../../assets/images/keys.jpg', lostOrFound:'Found', category:'Keys', description:"kill me twice", tags:["bike key", "yamaha", "no keychain"]},
  <Item>{id:'agagag', imageUrl:'../../assets/images/keys.jpg', lostOrFound:'Found', category:'Keys', description:"kill me twice", tags:["bike key", "yamaha", "no keychain"]}
]