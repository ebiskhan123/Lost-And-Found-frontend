import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private logOut = () => {
    this.userService.logOut()
    .subscribe((loggedOut) => {
      this.router.navigateByUrl('/signIn');
    })
  }
  
  private showMobileMenu = () => {
    document.getElementById('mobileMenu').style.transform = 'translateX(0)';
    setTimeout(() => {
      document.addEventListener('click', this.hideMobileMenu);
    }, 300);
  }
  private hideMobileMenu = () => {
    document.getElementById('mobileMenu').style.transform = 'translateX(-105%)';
    document.removeEventListener('click', this.hideMobileMenu);
  }

  private showDropDown = () => {
    this.repositionDropDown();
    let dropDrown = document.getElementById('navDropDown');
    dropDrown.style.display = 'block';
    dropDrown.style.opacity = '1';
    document.addEventListener('click', this.hideDropDown);
  }
  
  private hideDropDown = (event) => {
    let dropDrown = document.getElementById('navDropDown');
    dropDrown.style.display = 'none';
    dropDrown.style.opacity = '0';
    document.removeEventListener('click', this.hideDropDown);
  }

  private repositionDropDown = () => {
    let dropDrown = document.getElementById('navDropDown');
    let itemTab = document.getElementById('itemTab');
    dropDrown.style.left = (2 * itemTab.getBoundingClientRect().left - itemTab.getBoundingClientRect().right) + 'px';
    dropDrown.style.top = itemTab.getBoundingClientRect().bottom + 'px';
  }

  private stickNavbar = (event) => {
    let navbar = document.getElementById('navBar')
    let navOffset = document.getElementById('navOffset')
    if (window.pageYOffset >= navbar.offsetTop) {
      navbar.classList.add("sticky")
      navOffset.classList.add("nav-offset")
    } else {
      navOffset.classList.remove("nav-offset")
      navbar.classList.remove("sticky")
    }
  }

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit() {
    window.addEventListener('scroll', this.stickNavbar, true)
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.stickNavbar, true);
  }

}
