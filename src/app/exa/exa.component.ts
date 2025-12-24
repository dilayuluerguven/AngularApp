import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { JsonplaceholderService } from '../services/jsonplaceholder.service';

@Component({
  selector: 'app-exa',
  templateUrl: './exa.component.html',
  styleUrls: ['./exa.component.css']
})
export class ExaComponent implements OnInit {
  post:Post | undefined;
  constructor(private jsonplaceholder:JsonplaceholderService
  ){}
  ngOnInit(): void {
      this.jsonplaceholder.getPost(500).subscribe({
        // this.post=x;
        next:(x)=>this.post=x,
        error:(e:Error)=>console.warn(e.message),
        complete:()=>console.log("istek tamamlandı")
      })
  }

}
