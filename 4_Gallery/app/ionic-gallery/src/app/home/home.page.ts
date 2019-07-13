import { Component } from '@angular/core';
import { ModalController, NavController, ToastController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public items : Array<any>;
  private _HOST : string 			=	"http://ENTER-YOUR-NETWORK-IP-ADDRESS-HERE:8080/";

  constructor(public navCtrl 		: NavController,
    private _MODAL  		: ModalController,
       private _TOAST       : ToastController,
    private _HTTP        : HttpClient)
{

}
ionViewDidEnter() : void
   {
    console.log("I'm alive!");

   }

}
