import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { PeliculaDetalle } from '../interfaces/interfaces'
import { ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class DataLocalService {


  peliculas: PeliculaDetalle[] = [];
  constructor(private storage: Storage, private toastCtrl: ToastController) {
    this.cargarFavoritos();
  }
  guardarPelicula(pelicula: PeliculaDetalle) {
    let existe = false;
    let mensaje = '';
    let icon = '';
    for (const peli of this.peliculas) {
      if (peli.id === pelicula.id) {
        existe = true;
        break;
      }
    }
    if (existe) {
      this.peliculas = this.peliculas.filter(peli => peli.id !== pelicula.id);
      mensaje = 'Removido de favoritos';
      icon = 'trash';

    } else {
      this.peliculas.push(pelicula);
      mensaje = 'Agregada a favoritos';
      icon = 'star';
    }
    this.presentToastWithOptions(mensaje, icon);
    this.storage.set('peliculas', this.peliculas);
    return !existe;
  }

  async cargarFavoritos() {
    const peliculas = await this.storage.get('peliculas');
    this.peliculas = peliculas || [];
    return this.peliculas;
  }

  async existePelicula(id) {
    await this.cargarFavoritos();
    const existe = this.peliculas.find(peli => peli.id === id);
    return (existe) ? true : false;
  }

  async presentToastWithOptions(message: string, icon: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'bottom',
      mode: 'ios',
      duration: 1500,
      color: 'dark',
      buttons: [
        {
          side: 'start',
          icon: icon,
        }, {
          text: 'Done',
        }
      ]
    });
    toast.present();
  }
}
