import { Component, OnInit, Input } from '@angular/core';
import { ItemsService } from "src/app/services/items.service";

@Component({
  selector: 'items-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  @Input('filters') filters
  @Input('applyFilters') applyFilters
  private cityId = ''
  private cities: any = []
  private areas: any = []
  private categories: any = []

  constructor(private itemsService:ItemsService) { }

  applyFilter = () => {
    this.applyFilters()
    this.closeFilter()
  }

  resetAreas = () => {
    this.areas = []
    this.itemsService.getAreas(this.cityId)
    .subscribe(areas => {
      this.areas = areas;
    })
  }

  closeFilter = () => {
    document.getElementById('filter').classList.add('hide')
    document.getElementById('openFilter').classList.remove('hide')
  }

  openFilter = () => {
    document.getElementById('filter').classList.remove('hide')
    document.getElementById('openFilter').classList.add('hide')    
  }

  ngOnInit() {
    this.itemsService.getCities()
    .subscribe(cities => this.cities = cities)

    this.itemsService.getCategories()
    .subscribe(categories => this.categories = categories)
  }

  ngOnDestroy() {
  }

}
