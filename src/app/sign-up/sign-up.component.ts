import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
