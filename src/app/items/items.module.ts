import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [ItemsComponent, ItemComponent],
  imports: [
    CommonModule
  ],
  exports: [ItemsComponent, ItemComponent]
})
export class ItemsModule { }
