import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 todaysDate = new Date();
  constructor() { }

  ngOnInit(): void {
    console.log(this.todaysDate);
  }

}
