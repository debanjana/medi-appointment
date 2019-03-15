import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RoleBasedLoginPage } from './role-based-login.page';

const routes: Routes = [
  {
    path: '',
    component: RoleBasedLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RoleBasedLoginPage]
})
export class RoleBasedLoginPageModule {}
