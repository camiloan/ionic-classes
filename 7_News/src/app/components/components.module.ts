import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
import { PopinfoComponent } from './popinfo/popinfo.component';

@NgModule({
  entryComponents:[
    PopinfoComponent
  ],
  declarations: [
    NoticiaComponent,
    NoticiasComponent,
    PopinfoComponent
  ],
  exports:[
    NoticiasComponent,
    PopinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { 
  
}
