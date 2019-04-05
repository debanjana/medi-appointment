import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DoctorHomePage } from './doctor-home.page';
import { ConfigService } from '../service/config.service';

const routes: Routes = [
  {
    path: '',
    component: DoctorHomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorHomePage],
  providers : [ConfigService]
})
export class DoctorHomePageModule {}
