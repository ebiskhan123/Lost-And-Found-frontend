import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";
import { AppService } from "src/app/services/app.service";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  forwardTo: any;
  credentials = { email: '', password: '' };
  
  signIn = () => {
    this.userService.signIn(this.credentials)
    .subscribe((result: any) => {
      if(result.error) {
        if(result.error.status === 403)
          this.app.makeToast('Verify Your Email')
        else
          this.app.makeToast('Invalid Credentials')
      }
      else {
          if(this.forwardTo)
            this.router.navigateByUrl(`/${this.forwardTo}`); 
          else       
            this.router.navigateByUrl('/dashboard');
        }
    })
  }

  keyDown = (event) => {
    if (event.key === "Enter") {
      this.signIn();
    }
  }

  constructor(private app:AppService, private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params.forwardTo)
        this.forwardTo = params.forwardTo;
    })
  }

}
