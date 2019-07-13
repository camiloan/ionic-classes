import { Component, OnInit } from '@angular/core';
import { ProveedorUsersService } from '../services/proveedor-users.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.page.html',
  styleUrls: ['./provider.page.scss'],
})
export class ProviderPage implements OnInit {
  users
  constructor(private navCtrol: NavController, private proveedor:ProveedorUsersService ) { }
  ngOnInit(){
    this.proveedor.obtenerDatos()
    .subscribe(
      (data)=>{this.users=data;},
      (error)=>{console.log(error);}
    )
  }
}
