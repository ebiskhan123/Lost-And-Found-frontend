import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';

import { AddItemComponent } from './add-item/add-item.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},  
  {path: 'signIn', component: SignInComponent},  
  {path: 'signUp', component: SignUpComponent},  
  {path: 'lostItems', component: ItemsComponent},  
  {path: 'foundItems', component: ItemsComponent},  
  {path: 'items', component: ItemsComponent},  
  {path: 'addItem', component: AddItemComponent},  
  {path: 'dashboard', component: DashboardComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, SignInComponent, SignUpComponent, AddItemComponent];
