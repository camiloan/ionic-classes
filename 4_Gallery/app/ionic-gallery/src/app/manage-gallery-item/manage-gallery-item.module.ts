import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ManageGalleryItemPage } from './manage-gallery-item.page';

const routes: Routes = [
  {
    path: '',
    component: ManageGalleryItemPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule ,
    RouterModule.forChild(routes)
  ],
  declarations: [ManageGalleryItemPage]
})
export class ManageGalleryItemPageModule {}
