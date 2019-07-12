import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DynamiclistPage } from './dynamiclist.page';

const routes: Routes = [
  {
    path: '',
    component: DynamiclistPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DynamiclistPage]
})
export class DynamiclistPageModule {}
