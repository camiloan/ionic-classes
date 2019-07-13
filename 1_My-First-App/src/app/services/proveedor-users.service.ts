import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProveedorUsersService {
  constructor(private http: HttpClient) {
    console.log("Hello Proveedor Usuarios Service")
  }
  obtenerDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
