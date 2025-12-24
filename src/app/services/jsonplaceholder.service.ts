import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const customHeader=new HttpHeaders({
      'Content-Type':'application/json',
      "Authorization":"Bearer my jwt"
    })



        return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`,{observe:"response",headers:customHeader})
   }
}
