import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  data:any;

  constructor(private route: ActivatedRoute, private router:Router) { 
    this.route.queryParams.subscribe(params =>{
      console.log('params: ',params)
      if(params && params.special){
        this.data = JSON.parse(params.special);
      }
      if (this.router.getCurrentNavigation().extras.state) {
        this.data = this.router.getCurrentNavigation().extras.state.user;
      }
    }
    );
  }
  ngOnInit() {
    if (this.route.snapshot.data['special']) {
      this.data = this.route.snapshot.data['special'];
    }
  }

}
