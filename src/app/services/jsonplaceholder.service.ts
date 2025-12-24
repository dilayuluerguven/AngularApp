import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from '../models/post';
import { catchError, from, map, mergeMap, skip, take, toArray } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

//page:1 pageSize:5 =>1,2,3,4,5 =>skip(0)
//page:2 pageSize:5 =>6,7,8,9,10 =>skip(5)
//page:3 pageSize:5 =>11,12,13,14,15 =>skip(10)

export class JsonplaceholderService {
  constructor(private http: HttpClient) {}
  getPostList(page:number,pageSize:number) {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts').pipe(mergeMap(x=>from(x)),skip(((page-1)*pageSize)),take(pageSize),map(x=>
      `${x.id}-${x.userId}`),toArray());
  }
  getPost(id: number) {
    return this.http.get<Post>(
      `https://jsonplaceholder.typicode.com/posts/${id}`
    );
  }
}
