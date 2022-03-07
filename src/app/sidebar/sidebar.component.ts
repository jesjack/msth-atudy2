import { Component, OnInit } from '@angular/core';
import { faBars, faHome, faComment, faFolder, faChevronDown, faChartPie, faUserFriends, faCog, faSignOutAlt, faMountain, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen, faObjectGroup } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    /*===== EXPANDER MENU  =====*/ 
    const showMenu = (toggleId: string, navbarId: string, bodyId: string)=>{
      const toggle = document.getElementById(toggleId),
      navbar = document.getElementById(navbarId),
      bodypadding = document.getElementById(bodyId)

      if(toggle && navbar){
        toggle.addEventListener('click', ()=>{
          navbar.classList.toggle('expander')

          bodypadding?.classList.toggle('body-pd')
        })
      }
    }
    showMenu('sidenav-toggle','navbar','body-pd')

    /*===== LINK ACTIVE  =====*/ 
    const linkColor = document.querySelectorAll('.nav__link')
    function colorLink(this: any){
      linkColor.forEach(l=> l.classList.remove('active'))
      this.classList.add('active')
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))


    /*===== COLLAPSE MENU  =====*/ 
    const linkCollapse = document.getElementsByClassName('collapse__link')
    var i

    for(i=0;i<linkCollapse.length;i++){
      linkCollapse[i].addEventListener('click', function(this: any){
        const collapseMenu = this.nextElementSibling
        collapseMenu.classList.toggle('showCollapse')

        const rotate = collapseMenu.previousElementSibling
        rotate.classList.toggle('rotate')
      })
    }
  }

  faBars = faBars;
  faHome = faHome;
  faComment = faComment;
  faFolder = faFolder;
  faChevronDown = faChevronDown;
  faChartPie = faChartPie;
  faUserFriends = faUserFriends;
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  faDoorOpen = faDoorOpen;
  faMountain = faMountain;
  faObjectGroup = faObjectGroup;
  faSignInAlt = faSignInAlt;

}
