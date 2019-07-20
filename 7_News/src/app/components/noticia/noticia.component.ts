import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/interfaces/interfaces';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { PopoverController } from '@ionic/angular';
import { PopinfoComponent } from '../popinfo/popinfo.component';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.scss'],
})
export class NoticiaComponent implements OnInit {
  @Input()noticia:Article;
  @Input()indice:number;

  constructor(private iab: InAppBrowser,private popoverCtrl: PopoverController) { }

  ngOnInit() {}
  abrirNoticia(){
    const browser = this.iab.create(this.noticia.url,'_system');
    // console.log(this.noticia.url)
  }

  async lanzarMenu(evento, noticia){
    const popover=await this.popoverCtrl.create({
      component: PopinfoComponent,
      componentProps:{
        newChosen: noticia
      },
      event: evento,
      mode:'ios',
      backdropDismiss:true,
      cssClass:'sc-ion-popover-ios-h'
    });
    await popover.present();
    // const{data}=await popover.onDidDismiss();
    const{data}=await popover.onWillDismiss();
    //console.log('Padre',data)

  }
}
