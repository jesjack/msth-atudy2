import { Component, OnInit } from '@angular/core';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub, faBehance } from '@fortawesome/free-brands-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*===== MENU SHOW Y HIDDEN =====*/ 
    const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

    if (navMenu && toggleMenu && closeMenu) {
      /*SHOW*/ 
      toggleMenu.addEventListener('click', ()=>{
        navMenu.classList.toggle('show')
      });
    
        /*HIDDEN*/
      closeMenu.addEventListener('click', ()=>{
        navMenu.classList.remove('show')
      });
    
      /*===== ACTIVE AND REMOVE MENU =====*/
      const navLink = document.querySelectorAll('.nav__link');   
  
      function linkAction(this: any){
        /*Active link*/
        navLink.forEach(n => n.classList.remove('active'));
        this.classList.add('active');
    
        /*Remove menu mobile*/
        if(navMenu) navMenu.classList.remove('show')
      }
      navLink.forEach(n => n.addEventListener('click', linkAction));
    }
  }

  faBars = faBars;
  faTimes = faTimes;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faBehance = faBehance;
  faDoorOpen = faDoorOpen;

}
