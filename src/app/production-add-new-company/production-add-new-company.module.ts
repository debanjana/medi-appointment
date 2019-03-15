import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductionAddNewCompanyPage } from './production-add-new-company.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionAddNewCompanyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionAddNewCompanyPage]
})
export class ProductionAddNewCompanyPageModule {}
