import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { PeliculaDetalle, Cast } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  @Input() id;
  pelicula: PeliculaDetalle={};
  actores:Cast[]=[];
  oculto=150;
  slideOptActores={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween: -20
  };
  constructor(private modalCtrl:ModalController, private moviesService:MoviesService) { }
  ngOnInit() {
    //console.log('ID',this.id);
    this.moviesService.getPeliculaDetalle(this.id)
    .subscribe(resp=>{
      console.log('Detalle de la pelicula: ',resp);
      this.pelicula=resp;
    });
    this.moviesService.getActoresPelicula(this.id)
    .subscribe(resp=>{
      console.log('Detalle de los Actores: ',resp);
      this.actores=resp.cast;
    });
  }
  regresar(){
    this.modalCtrl.dismiss();
  }

}
