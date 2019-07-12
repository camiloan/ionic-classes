import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-masinfo',
  templateUrl: './masinfo.page.html',
  styleUrls: ['./masinfo.page.scss'],
})
export class MasinfoPage implements OnInit {
  id:object;
  item;
  constructor(private route: ActivatedRoute){

   }
   ngOnInit() {
    this.item=this.route.snapshot.paramMap.get('id');
    console.log(this.item);
  }


  
}
