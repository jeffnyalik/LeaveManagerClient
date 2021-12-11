import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EmployeesComponent } from './admin/employees/employees.component';
import { ExpenseComponent } from './admin/expense/expense.component';
import { FooterComponent } from './admin/footer/footer.component';
import { HomeComponent } from './admin/home/home.component';
import { LeavesComponent } from './admin/leaves/leaves.component';
import { LoginComponent } from './admin/login/login.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { PayrollsComponent } from './admin/payrolls/payrolls.component';
import { RegisterComponent } from './admin/register/register.component';
import { ReportsComponent } from './admin/reports/reports.component';
import { RevenuesComponent } from './admin/revenues/revenues.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  // {path: '', component:AppComponent},
  {path: 'footer', component: FooterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'payrolls', component: PayrollsComponent},
  {path: 'leaves', component: LeavesComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'employees', component: EmployeesComponent},
  {path: 'revenues', component: RevenuesComponent},
  {path: 'expenses', component: ExpenseComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
