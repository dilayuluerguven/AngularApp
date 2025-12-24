import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonplaceholderService {

  
  constructor(private http:HttpClient) {

   }
   getPostList(){
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
   }
   getPost(id:number)
   {
    var queryParams= new HttpParams({
      fromString:'name=ahmet&&yas=23'
    })


        return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{params:queryParams})
   }
}
