import { Component, OnInit } from '@angular/core';
import { UserService } from "src/app/services/user.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  constructor(private userService: UserService, private routes: ActivatedRoute) { }

  sendVerificationRequest = (userId, verificationToken) => {
    this.userService.verifyEmail(userId, verificationToken)
    .subscribe((result: any) => {
      if(result.error)
        document.getElementById('errorDiv').classList.remove('hide')
      else
        document.getElementById('successDiv').classList.remove('hide')      
    })
  }

  ngOnInit() {
    this.routes.params.subscribe((params) => {
      this.sendVerificationRequest(params['userId'], params['verificationToken'])
    })
  }

}
