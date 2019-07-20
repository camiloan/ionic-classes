import { Component, OnInit } from '@angular/core';
import { PopoverController, NavParams } from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Article } from 'src/app/interfaces/interfaces';
import { DataLocalService } from 'src/app/services/data-local.service';

@Component({
  selector: 'app-popinfo',
  templateUrl: './popinfo.component.html',
  styleUrls: ['./popinfo.component.scss'],
})
export class PopinfoComponent implements OnInit {
  items= Array(3);
  noticia:Article;
  constructor(private navParams:NavParams,private popoverCtrl: PopoverController, private socialSharing:SocialSharing,
    private datalocalService:DataLocalService) { }

  ngOnInit() {
    this.noticia= this.navParams.get('newChosen');
    //console.log(this.noticia.title);
    //console.log('Noticia elegida: ',this.noticia);
  }
  onClickShare(){
    this.socialSharing.share(
      this.noticia.title,
      this.noticia.source.name,
      '',
      this.noticia.url
    );
  }
  onClickStar(){
    console.log('Guardar a Favoritos: ', this.noticia);
    this.datalocalService.guardarNoticia(this.noticia);
  }

}
