import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  makeToast = (toast) => {
    let toastDiv = document.getElementById('toastDiv')
    toastDiv.innerHTML = toast
    toastDiv.className = "show-toast"
    setTimeout(() => toastDiv.classList.remove("show-toast"), 3000)
  }

  activateUltimateCover = () => {
    let cover = document.createElement('DIV')
    cover.classList.add('ultimate-cover')
    cover.id = "ultimateCover"
    document.body.appendChild(cover)
  }

  deactivateUltimateCover = () => {
    document.body.removeChild(document.getElementById('ultimateCover'))
  }
}
