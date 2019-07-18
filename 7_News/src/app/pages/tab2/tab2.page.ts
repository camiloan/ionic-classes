import { Component, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonSegment) segment:IonSegment; 
  categorias=['business' ,'entertainment' ,'general' ,'health' ,'science' ,'sports' ,'technology'];
  noticias: Article[]=[];
  constructor(private noticiasService:NoticiasService) {

  }
  cambioCategoria(event){
    this.noticias=[];
    this.cargarNoticias(event.detail.value); 

  
  }
  cargarNoticias(categoria:string){
    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(resp=>{
      console.log(categoria,resp);
      this.noticias.push(...resp.articles);
    });
  }
  ngOnInit() {
    this.segment.value=this.categorias[0];
    this.cargarNoticias(this.segment.value)
  }

}
