import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private credentials = {email: '', password: ''};
  
  signIn = () => {
    this.userService.signIn(this.credentials)
    .subscribe((signedIn) => {
      if(signedIn) {
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
  }

}
