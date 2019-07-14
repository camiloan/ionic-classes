import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Product } from '../product';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public api: ApiService,
    public loadingController: LoadingController,
    public router: Router,
    public route: ActivatedRoute) { }
  products: Product[] = [];
  async getProducts() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    await this.api.getProduct
    await this.api.getProducts()
      .subscribe(res => {
        this.products = res;
        console.log(this.products);
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }
  ngOnInit() {
    this.getProducts();
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.products, event.previousIndex, event.currentIndex);
  }
}
