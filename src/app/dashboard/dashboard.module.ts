import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardItemComponent } from './dashboard-item/dashboard-item.component';

@NgModule({
  declarations: [DashboardComponent, DashboardItemComponent],
  imports: [
    CommonModule
  ],
})
export class DashboardModule { }
