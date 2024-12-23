import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() mensaje:post;
  @Output() clickPost= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    console.log('Hijo',this.mensaje.id);
    this.clickPost.emit(this.mensaje.id);
  }

}
