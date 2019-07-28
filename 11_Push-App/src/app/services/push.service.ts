import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  mensajes: OSNotificationPayload[] = [
    // {
    //   title: 'Titulo de la push',
    //   body: 'Este es el body de la push',
    //   date: new Date()
    // }
  ];
  userId: string;
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,
    private storage: Storage) {
    this.cargarMensajes();
  }

  async getMensajes() {
    await this.cargarMensajes();
    return [...this.mensajes];
  }
  configuracionInicial() {
    this.oneSignal.startInit('0922f22b-cb09-48d1-9a45-7c3952b3d0e4', '355632531813');

    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      console.log('Notificación recibida', noti);
      this.notificacionRecibida(noti);
      // do something when notification is received
    });

    this.oneSignal.handleNotificationOpened().subscribe(async (noti) => {
      console.log('Notificación abierta', noti);
      await this.notificacionRecibida(noti.notification);
      // do something when a notification is opened
    });
    
    //Obtener ID del suscriptor
    this.oneSignal.getIds().then(info=>{
      this.userId=info.userId;
      console.log('userId:',this.userId);
    });

    this.oneSignal.endInit();
  }

  async notificacionRecibida(noti: OSNotification) {
    await this.cargarMensajes();
    const payload = noti.payload;
    const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
    if (existePush) {
      return;
    }
    this.mensajes.unshift(payload);
    this.pushListener.emit(payload)
    await this.guardarMensajes();
  }
  guardarMensajes() {
    this.storage.set('mensajes', this.mensajes);
  }
  async cargarMensajes() {
    this.mensajes = await this.storage.get('mensajes') || [];
    return this.mensajes;
  }
  async borrarMensajes(){
    await this.storage.remove('mensajes');
    this.mensajes=[];
    this.guardarMensajes();
  }
}
