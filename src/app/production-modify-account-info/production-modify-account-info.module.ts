import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductionModifyAccountInfoPage } from './production-modify-account-info.page';

const routes: Routes = [
  {
    path: '',
    component: ProductionModifyAccountInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductionModifyAccountInfoPage]
})
export class ProductionModifyAccountInfoPageModule {}
