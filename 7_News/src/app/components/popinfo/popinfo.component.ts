import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams, Platform } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Article } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items = Array(3);
  noticia: Article;
  newStatus: boolean;
  constructor(private toastController: ToastController, private navParams: NavParams, private popoverCtrl: PopoverController, private socialSharing: SocialSharing,
    private datalocalService: DataLocalService,
    private platform: Platform) { }

  ngOnInit() {
    this.noticia = this.navParams.get('newChosen');
    this.newStatus = this.navParams.get('newStatus');
    //console.log(this.noticia.title);
    //console.log('Noticia elegida: ',this.noticia);
  }
  onClickShare() {
    this.popoverCtrl.dismiss();
    this.compartirNoticia();
  }
  onClickStar() {
    //console.log('Guardar a Favoritos: ', this.noticia);
    this.datalocalService.guardarNoticia(this.noticia);
    this.popoverCtrl.dismiss();
    this.presentToastWithOptions('Agregrado a favoritos!', 'star');
  }
  onClickStarDelete() {
    this.datalocalService.borrarNoticia(this.noticia);
    this.popoverCtrl.dismiss();
    this.presentToastWithOptions('Eliminado de favoritos!!!', 'trash');
  }
  onClickClose() {
    this.popoverCtrl.dismiss();
  }

  async presentToastWithOptions(message: string, icon: string) {
    const toast = await this.toastController.create({
      message,
      mode: 'ios',
      position: 'bottom',
      translucent: true,
      duration: 1500,
      buttons: [
        {
          side: 'start',
          icon: icon,
        }
      ]
    });
    toast.present();
  }
  compartirNoticia() {
    if (this.platform.is('cordova')) {
      this.socialSharing.share(
        this.noticia.title,
        this.noticia.source.name,
        '',
        this.noticia.url
      );
    } else {
      if (navigator['share']) {
        navigator['share']({
            title: this.noticia.title,
            text: this.noticia.description,
            url: this.noticia.url,
        })
          .then(() => console.log('Successful share'))
          .catch((error) => console.log('Error sharing', error));
      }else{
        console.log('No se pudo compartir, porque no se soporta share!')
      }
    }

  }

}
