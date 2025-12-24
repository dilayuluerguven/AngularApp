import { Component, OnInit } from '@angular/core';
import { PageserviceService } from './pages/pageservice.service';
import {
  defer,
  distinct,
  filter,
  find,
  first,
  from,
  interval,
  last,
  Observable,
  of,
  range,
  single,
  skip,
  skipWhile,
  timer,
} from 'rxjs';
import { ExampleServicesService } from './example-services.service';
import { HttpClient } from '@angular/common/http';
import { User2 } from './models/user2';
import { User3 } from './models/user3';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  user:User2 | undefined;
  user2:User3 |undefined;
  title = 'angularapp';
  constructor(
    private pageservice: PageserviceService,
    private http:HttpClient
    // private example: ExampleServicesService
  ) {
    this.pageservice.write();
  }
  ngOnInit(): void {
    this.http.get<User3>('https://jsonplaceholder.typicode.com/todos/1').subscribe(x=>
      {
        // this.user=x;
        this.user2=x;
      });
    
  }
  save(input: string) {
    console.log(input);
  }
}

// let values=of('angular',2,[1,2,3],5.56)
    // let values = interval(1000);
    // let values=timer(3000,2000);//3 sn yayınlama yok, sonra her 2 snde bir yayınlayacak
    // let values=range(1,10)
    // const map= new Map();
    // map.set(1,"kitap");
    //     map.set(2,"kitap2");
    //         map.set(3,"kitap3");
    // let ofObservable=of(new Date())
    // let fromObservable=from(map)
    // let timerObservable=timer(3000)
    // let deferObservable=defer(()=>of(new Date()))
    // timerObservable.subscribe(x=>{
    // const myArray=from([5,7,8,10,12,15,20,69,5])
    // myArray.pipe(first(x=>x>15)).subscribe(x=>{
    //   console.log(x);
    // })
    // myArray.pipe(find(x=>x>100)).subscribe(x=>{
    //   console.log(x);
    // },err=>{console.log("item yok")})//hata dönmez
    // myArray.pipe(filter(x=>x>10),last(x=>x>20)).subscribe(x=>{
    //   console.log(x);
    // },err=>{console.log("item yok")})
    // myArray.pipe(single(x=>x<6)).subscribe(x=>{
    //   console.log(x);
    // })
    //  myArray.pipe(distinct()).subscribe(x=>{
    //     console.log(x);
    //   })
    //  myArray.pipe(skip(4)).subscribe(x=>{
    //     console.log(x);
    //   })
    //  myArray.pipe(skipWhile(x=>x<10)).subscribe(x=>{
    //     console.log(x);
    //   })
    //   fromObservable.subscribe({
    //   // next:(val)=>console.log(`key: ${val[0]} value: ${val[1]}`),
    //   next:(val)=>console.log(val),
    //   error:(e)=>console.log(e),
    //   complete:()=>console.log("tamamlandı")
    // })
    // deferObservable.subscribe({
    //   next:(val)=>console.log(`defer: ${val}`),
    //   error:(e)=>console.log(e),
    //   complete:()=>console.log("tamamlandı")
    // })