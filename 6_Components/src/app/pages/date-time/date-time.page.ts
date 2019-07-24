import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  customPickerOptions:any;
  customDate;
  fechaNaci: Date=new Date();
  constructor() { }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (evento) =>{
          console.log(evento);
          console.log('Clicked Save!');
        } 
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
        }
      }]
    }
  }

  cambioFecha(event){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
  }

}
