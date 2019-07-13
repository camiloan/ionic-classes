import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  lista: Array<any>=[
    {
      titulo:"Perro",
      color:"#444"
    },
    {
      titulo:"Gato",
      color:"#999"
    }
  ]
  constructor(private alertCtrl: AlertController) { }
  
  async alertBasic(){
    const miAlerta= await this.alertCtrl.create({
      header:'Alert',
      message: 'This is an alert message',
      buttons:['Ok']
    });
    await miAlerta.present();
  }
  async alertBasic2(){
    const miAlerta2= await this.alertCtrl.create({
      header:'Login',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Ingrese su nombre'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Guardar',
          handler: () => {
            console.log('Confirm Save');
          }
        }
      ]
    });
    await miAlerta2.present();
  }

  ngOnInit() {
  }
  

}
