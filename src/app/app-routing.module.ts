import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'role-based-login',
    loadChildren: './role-based-login/role-based-login.module#RoleBasedLoginPageModule'
  },
  {
    path: 'production-home',
    loadChildren: './production-home/production-home.module#ProductionHomePageModule'
  },
  {
    path: 'production-bills-view',
    loadChildren: './production-bills-view/production-bills-view.module#ProductionBillsViewPageModule'
  },
  {
    path: 'production-book-appointment',
    loadChildren: './production-book-appointment/production-book-appointment.module#ProductionBookAppointmentPageModule'
  },
  {
    path: 'production-modify-account-info',
    loadChildren: './production-modify-account-info/production-modify-account-info.module#ProductionModifyAccountInfoPageModule'
  },
  { 
    path: 'production-add-new-company', 
    loadChildren: './production-add-new-company/production-add-new-company.module#ProductionAddNewCompanyPageModule' 
  },
  {
     path: 'doctor-home', 
     loadChildren: './doctor-home/doctor-home.module#DoctorHomePageModule' 
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
