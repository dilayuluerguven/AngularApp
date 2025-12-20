import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  price:number=1250;
  mydate=new Date();
  person1:Person={firstName:'John', lastName:'Doe', age:30};
  person2:any={first:'Jane', last:'Smith', age:25};
  constructor() { }

  ngOnInit(): void {
  }

}
interface Person {
  firstName: string;
  lastName: string;
  age: number;
}