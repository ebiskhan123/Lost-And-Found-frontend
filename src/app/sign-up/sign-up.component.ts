import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  forwardTo: any;

  private user = {
    name: '',
    email: '',    
    password: ''
  }

  private password: any = '';

  validateUser = () => {
    return new Promise((resolve, reject) => {
      if(this.user.name === '')
        reject('Name is mandatory')
      let emailValidator = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
      if(!emailValidator.test(this.user.email))
        reject('Invalid email format')
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

  signUp = () => {
    this.validateUser().then(() => {
      this.userService.signUp(this.user)
      .subscribe((result: { created:any, error:any }) => {
        if(result.created) {
          if(this.forwardTo)
            this.router.navigateByUrl(`/${this.forwardTo}`)
          else        
            this.router.navigateByUrl('/signIn')
        }
        else {
          this.resetValues()
          this.app.makeToast(result.error.message)
        }
      })
    })
    .catch((error) => this.app.makeToast(error))
  }

  keyDown = (event) => {
    if (event.key === "Enter") {
      this.signUp();
    }
  }

  private resetValues = () => {
    this.user = {
      name: '',
      email: '',    
      password: ''
    }
    this.password = '';
  }

  constructor(private app:AppService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.forwardTo)
        this.forwardTo = params.forwardTo;
    })
  }

}
