import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from "@angular/router";

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

  private password = '';

  signUp = () => {
    console.log(event.target);
    this.userService.signUp(this.user)
    .subscribe((result: { created:any, error:any }) => {
      if(result.created) {
        if(this.forwardTo)
          this.router.navigateByUrl(`/${this.forwardTo}`);        
        this.router.navigateByUrl('/signIn');
      }
      else {
        this.resetValues();
        console.log(result.error);
      }
    })
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

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if(params.forwardTo)
        this.forwardTo = params.forwardTo;
    })
  }

}
