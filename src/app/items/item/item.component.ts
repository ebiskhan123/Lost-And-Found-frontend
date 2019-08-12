import { Component, OnInit } from '@angular/core';
import {Item} from '../../models/item.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  item: Item;
  constructor() { 
    this.item =   <Item>{id:'agagag', imageUrl:'../../assets/images/keys.jpg', lostOrFound:'Found', category:'Keys', description:"kill me twice", tags:["bike key", "yamaha", "no keychain"]};    
  }

  ngOnInit() {
  }

}
