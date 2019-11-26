import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ItemsComponent } from './items/items.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';
import { ItemComponent } from "src/app/item/item.component";
import { AboutUsComponent } from "src/app/about-us/about-us.component";
import { ForgotPasswordComponent } from "src/app/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "src/app/reset-password/reset-password.component";
import { TermsAndConditionsComponent } from "src/app/terms-and-conditions/terms-and-conditions.component";
import { SignUpMessageComponent } from "src/app/sign-up-message/sign-up-message.component";
import { VerifyEmailComponent } from "src/app/verify-email/verify-email.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'aboutUs', component: AboutUsComponent},  
  {path: 'termsAndConditions', component: TermsAndConditionsComponent},  
  {path: 'signIn', component: SignInComponent, canActivate: [AuthGuard]},  
  {path: 'signUp', component: SignUpComponent, canActivate: [AuthGuard]},
  {path: 'signUpMessage', component: SignUpMessageComponent, canActivate: [AuthGuard]},
  {path: 'forgotPassword', component: ForgotPasswordComponent, canActivate: [AuthGuard]},  
  {path: 'verifyEmail/:userId/:verificationToken', component: VerifyEmailComponent, canActivate: [AuthGuard]},  
  {path: 'resetPassword/:userId/:resetToken', component: ResetPasswordComponent, canActivate: [AuthGuard]},  
  {path: 'items', component: ItemsComponent},  
  {path: 'items/:lostOrFound', component: ItemsComponent},
  {path: 'item/:itemId', component: ItemComponent, canActivate: [UserGuard]},  
  {path: 'addItem', component: AddItemComponent, canActivate: [UserGuard]},  
  {path: 'dashboard', component: DashboardComponent, canActivate: [UserGuard]},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

export const routingComponents = [HomeComponent, AboutUsComponent, VerifyEmailComponent, SignUpMessageComponent, TermsAndConditionsComponent, ResetPasswordComponent, ForgotPasswordComponent, SignInComponent, SignUpComponent, AddItemComponent, ItemComponent];
