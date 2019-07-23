import { Component } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../components/detalle/detalle.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page  {
  textoBuscar='';
  buscando=false;
  peliculas: Pelicula[]=[];

  ideas: string[]=['Spiderman', 'Avenger', 'El señor de los anillos', 'La vida es bella'];
  constructor(private modalCtrl: ModalController, private moviesService:MoviesService) {}

  ngOnInit() {
   
  }
  buscar(event){
    // console.log(event.detail.value);
    const valor:string=event.detail.value;
    if(valor.length===0){
      this.buscando=false;
      this.peliculas=[];
      return;
    }
    this.buscando=true;
    this.moviesService.buscarPeliculas(valor)
    .subscribe(resp=>{
      // console.log('Resultados busqueda: ',resp);
      this.peliculas=resp['results'];
      this.buscando=false;
    });
  }
  async mostrarDetalles(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }
  
}
