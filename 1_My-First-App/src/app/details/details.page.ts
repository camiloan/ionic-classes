import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data:any;

  constructor(private route: ActivatedRoute, private router:Router){
    if (this.router.getCurrentNavigation().extras.state) {
      this.data = this.router.getCurrentNavigation().extras.state.item;
      console.log(this.data);
    }
   }
   ngOnInit() {

  }

}
