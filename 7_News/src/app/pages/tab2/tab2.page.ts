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
    event.target.disabled=false;
    this.noticias=[];
    this.cargarNoticias(event.detail.value); 
  }
  loadData(event){
    //console.log(event);
    this.cargarNoticias(this.segment.value,event)
  }
  cargarNoticias(categoria:string,event?){
    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(resp=>{
      console.log(categoria,resp);
      if(resp.articles.length===0){
        event.target.disabled=true;
        event.target.complete();
        return;
      }
      this.noticias.push(...resp.articles);
      if(event){
        event.target.complete();
      }
    });
  }
  ngOnInit() {
    this.segment.value=this.categorias[0];
    this.cargarNoticias(this.categorias[0])
  }
}
