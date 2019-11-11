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
}
