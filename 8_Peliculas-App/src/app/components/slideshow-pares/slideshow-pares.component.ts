import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-slideshow-pares',
  templateUrl: './slideshow-pares.component.html',
  styleUrls: ['./slideshow-pares.component.scss'],
})
export class SlideshowParesComponent implements OnInit {
  @Input() peliculas:Pelicula[]=[];
  @Output() cargarMas=new EventEmitter();
  slideOpts={
    slidesPerView:3.3,
    freeMode:true,
    spaceBetween: -15
  }
  constructor(private modalCtrl:ModalController) { }

  ngOnInit() {}
  onClick(){
    this.cargarMas.emit();
    //console.log('Cargar más...')
  }
  async verDetalle(id:string){
    const modal = await this.modalCtrl.create({
      component: DetalleComponent,
      componentProps:{
        id
      }
    });
    modal.present();
  }

}
