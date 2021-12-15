import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from '../sidebar/sidebar.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeesComponent } from './employees/employees.component';
import { ExpenseComponent } from './expense/expense.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LeavesComponent } from './leaves/leaves.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PayrollsComponent } from './payrolls/payrolls.component';
import { RegisterComponent } from './register/register.component';
import { ReportsComponent } from './reports/reports.component';
import { RevenuesComponent } from './revenues/revenues.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SnippetComponent } from './snippet/snippet.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [

    SidebarComponent,
       SidenavComponent,
       FooterComponent,
       NavbarComponent,
       SpinnerComponent,
       HomeComponent,
       HeaderComponent,
       MainComponent,
       DashboardComponent,
       SnippetComponent,
       EmployeesComponent,
       RevenuesComponent,
       PayrollsComponent,
       ReportsComponent,
       LeavesComponent,
       ExpenseComponent,
       RegisterComponent,
       LoginComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],

  exports: [
    // SidenavComponent,
    // FooterComponent,
    // NavbarComponent,
    // SpinnerComponent,
    // HomeComponent,
    // HeaderComponent,
    // MainComponent
  ],

  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AdminModule { }
