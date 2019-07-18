import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiaComponent } from './noticia/noticia.component';
import { IonicModule } from '@ionic/angular';
import { NoticiasComponent } from './noticias/noticias.component';
@NgModule({
  declarations: [
    NoticiaComponent,
    NoticiasComponent
  ],
  exports:[
    NoticiasComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { 
  
}
