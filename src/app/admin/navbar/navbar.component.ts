import { Component, OnInit } from '@angular/core';

import { faHamburger, faBars, faCompress } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  faHamburger = faHamburger;
  faBars = faBars;
  faCompress = faCompress;
  constructor() { }

  ngOnInit(): void {
  }

}
