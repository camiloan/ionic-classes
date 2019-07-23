import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  mensajes: any;

  constructor(private dataService:DataService) { }

  ngOnInit() {
    console.log('INIT!');
    this.mensajes=this.dataService.getPosts();
    // this.dataService.getPosts().subscribe((posts:post[])=>{
    //   console.log('Información',posts);
    //   this.mensajes=posts;
    // });
  }
  escuchaClick(id:number){
    console.log('Padre', id)
  }

}
