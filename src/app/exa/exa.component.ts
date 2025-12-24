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
      this.jsonplaceholder.getPost(2).subscribe({
        // this.post=x;
        next:(x)=>console.log(x.headers),//ne okumak istenirse
        error:(e)=>console.warn(e),
        complete:()=>console.log("istek tamamlandı")
      })
  }

}
