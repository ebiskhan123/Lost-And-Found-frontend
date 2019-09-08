import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items.component';
import { ItemComponent } from './item/item.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [ItemsComponent, ItemComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [ItemsComponent, ItemComponent]
})
export class ItemsModule { }
