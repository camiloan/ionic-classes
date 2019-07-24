import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje=0.5;
  valor:number=50;
  constructor() { }

  ngOnInit() {
  }
  cambioRango(event){
    this.porcentaje=event.detail.value/100;
    this.valor=event.detail.value;
    //console.log(event.detail.value);

  }

}
