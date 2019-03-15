import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductionBookAppointmentPage } from './production-book-appointment.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionBookAppointmentPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionBookAppointmentPage]
})
export class ProductionBookAppointmentPageModule {}
