import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from "@angular/forms";
import { FilterComponent } from './filter/filter.component';

@NgModule({
  declarations: [ItemsComponent, ItemComponent, FilterComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ItemsComponent, ItemComponent]
})
export class ItemsModule { }
