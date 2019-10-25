import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  forwardTo: any;
  private credentials = { email: '', password: '' };
  
  signIn = () => {
    this.userService.signIn(this.credentials)
    .subscribe((signedIn) => {
      if(signedIn) {
        if(this.forwardTo)
          this.router.navigateByUrl(`/${this.forwardTo}`);        
        this.router.navigateByUrl('/dashboard');
      }
      else
        {
          console.log('check credentials');
        }
    })
  }

  keyDown = (event) => {
    if (event.key === "Enter") {
      this.signIn();
    }
  }

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      if(params.forwardTo)
        this.forwardTo = params.forwardTo;
    })
  }

}
