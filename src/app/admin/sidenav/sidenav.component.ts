import { Component, OnInit } from '@angular/core';

import {
  faUsers,
  faMoneyBillWave,
  faHollyBerry,
  faMoneyCheck,
  faFileInvoiceDollar,
  faFileExcel
 } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  faUsers = faUsers;
  faMoneyBillWave = faMoneyBillWave;
  faHollyBerry = faHollyBerry;
  faMoneyCheck = faMoneyCheck;
  faFileInvoiceDollar = faFileInvoiceDollar;
  faFileExcel = faFileExcel;
  constructor() { }

  ngOnInit(): void {
  }

}
