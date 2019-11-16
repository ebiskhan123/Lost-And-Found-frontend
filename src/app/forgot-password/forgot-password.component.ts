import { Component, OnInit } from '@angular/core';
import { AppService } from "src/app/services/app.service";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  email = ''

  constructor(private app:AppService, private userService:UserService) { }

  sendPasswordRecoveryRequest = () => {
    this.userService.requestPasswordReset(this.email)
    .subscribe((result: any) => {
      if(result.success)
        {
          this.showMessage()
          this.app.makeToast('Done')
        }
      else
        {
          if(result.error.status === 400)
            this.app.makeToast('Email does not exist')
          else
            this.app.makeToast(`Couldn't process request`)
        }
    }) 
  }

  showMessage = () => {
    document.getElementById("emailEntry").classList.add('hide')
    document.getElementById("messageDiv").classList.remove('hide')
  }

  ngOnInit() {
  }

}
