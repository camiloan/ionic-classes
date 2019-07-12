import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private navCtrl: NavController ) { }
  goToMasinfoPage(){
    this.navCtrl.navigateForward(`masinfo/${0}`);
  }
  ngOnInit() {
  }

}
