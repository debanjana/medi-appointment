import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductionBillsViewPage } from './production-bills-view.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionBillsViewPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionBillsViewPage]
})
export class ProductionBillsViewPageModule {}
