import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  user = {name: '', password: ''}
  userId = ''
  resetToken = ''
  password = ''

  constructor(private app: AppService, private userService: UserService, private routes: ActivatedRoute, private router: Router) { }

  validatePassword = () => {
    return new Promise((resolve, reject) => {
      if(this.password != this.user.password)
        reject('Passwords do not match')
      let length = this.password.lenght * 1
      let passwordValidator = /^[a-zA-Z0-9!@#$%^&*]{8,16}$/
      if(!passwordValidator.test(this.password))
        reject('Password is too short')
      passwordValidator = /^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      if(!passwordValidator.test(this.password))
        reject('Password is not strong enough')
      passwordValidator = new RegExp('password')
      if(passwordValidator.test(this.password.toLowerCase()))
        reject('Password should not contain password')
      resolve()
    })
  }

  resetPassword = () => {
    this.validatePassword()
    .then(() => {
      this.userService.resetPassword({password: this.user.password}, this.userId, this.resetToken)
      .subscribe((result) => {
        if(result)
          {
            this.app.makeToast('Done')
            this.router.navigateByUrl('signIn')
          }
        else
          this.app.makeToast(`Couldn't process request`)
      })
    })
    .catch(error => this.app.makeToast(error))
  }

  setUser = () => {
    this.userService.getUserName(this.userId, this.resetToken)
    .subscribe((response: any) => {
      if(response.error)
        {
          if(response.error.status === 400)
            this.app.makeToast('The reset link is broken')
          else
            this.app.makeToast(`Couldn't process request`)
        this.router.navigateByUrl('signIn')
        }
      this.user.name = response.data.name
    })
  }

  ngOnInit() {
    this.routes.params.subscribe((params) => {
      if(params['userId'])
        this.userId = params['userId']
      if(params['resetToken'])
        this.resetToken = params['resetToken']
      this.setUser()
    })
  }

}
