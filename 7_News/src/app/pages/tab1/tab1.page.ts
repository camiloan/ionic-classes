import { Component, OnInit } from '@angular/core';
import { NoticiasService } from 'src/app/services/noticias.service';
import { Article } from 'src/app/interfaces/interfaces';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias:Article[]=[];
  constructor(private noticiasServices:NoticiasService) {

  }
  ngOnInit(){
   this.cargarNoticias();
  }
  loadData(event){
    // console.log(event);
    this.cargarNoticias(event);
  }
  cargarNoticias(event?){
    this.noticiasServices.getTopHeadlines().subscribe(resp =>{
      // console.log('noticias',resp);
      if(resp.articles.length===0){
        event.target.disabled=true;
        event.target.complete();
        return;
      }
      //this.noticias=resp.articles;
      this.noticias.push(...resp.articles);
      if(event){
        event.target.complete();
      }
    });
  }
}
