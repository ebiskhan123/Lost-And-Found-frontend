import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  private credentials = {email: '', password: ''};
  
  signIn = () => {
    console.log(this.credentials);
  }
  constructor(private userService: UserService) { }

  ngOnInit() {
  }

}
