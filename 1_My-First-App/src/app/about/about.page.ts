import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {
  lista: Array<any>=[
    {
      titulo:"Perro",
      color:"#444"
    },
    {
      titulo:"Gato",
      color:"#999"
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
