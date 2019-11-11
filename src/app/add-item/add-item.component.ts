import { Component, OnInit } from '@angular/core';
import { Item, City, Area } from "../models/item.model";
import { ItemsService } from "../services/items.service";
import { Router } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  private item: Item = <Item> {lostOrFound: "Lost", category: "", tags: [], location:{_id:''}};
  private itemImage: any;
  private tag:string = '';
  private imagePath = '../../assets/images/noImage.jpg';
  private cityId = '';
  private areaId = '';
  private cities: any = []
  private areas: any = []
  private categories: any = []

  saveItem = () => {
    let formData = new FormData()
    formData.append('item', JSON.stringify(this.item));
    formData.append('image', this.itemImage);
    this.itemsService.addItem(formData)
    .subscribe((result: {saved: boolean, error: any}) => {
      if(result.saved) {
        this.router.navigateByUrl('/dashboard');
      }
      else {
        this.app.makeToast(result.error.message)
        console.log(result.error);
      }
    })
  }

  cancel = () => {
    this.router.navigateByUrl('/dashboard');    
  }

  setImage = (event) => {
    this.itemImage = event.target.files[0];
    this.renderImage(); 
  }

  addTag = () => {
    if(this.tag) {
      this.item.tags.push(this.tag);
      this.tag = '';
    }
  }

  removeTag = (i) => {
    console.log(i);
    this.item.tags.splice(i,1);
  }

  renderImage = () => {
    let fileReader = new FileReader();

    fileReader.onload = (event:FileReaderEvent) => {
      this.imagePath = event.target.result;
    }

    fileReader.readAsDataURL(this.itemImage);
  }

  keyDown = (event) => {
    if (event.key === "Enter") {
      this.addTag();
    }
  }

  resetAreas = () => {
    this.areas = []
    this.itemsService.getAreas(this.cityId)
    .subscribe(areas => {
      this.areas = areas;
    })
  }

  constructor(private app: AppService, private itemsService: ItemsService, private router: Router) { }

  ngOnInit() {
    this.itemsService.getCities()
    .subscribe(cities => this.cities = cities)

    this.itemsService.getCategories()
    .subscribe(categories => this.categories = categories)
  }

}

interface FileReaderEventTarget extends EventTarget {
  result:string
}

interface FileReaderEvent extends ProgressEvent {
  target: FileReaderEventTarget;
}
