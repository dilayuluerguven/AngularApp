import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent implements OnInit {

  count:number;
  constructor() { 
    this.count=1;
    console.log("contructor called");
  }

  ngOnInit(): void {
    console.log("ngOnInit called");
  }

  WritetoConsole():void{
    console.log("Button clicked"); 
  }
  increaseCount():void{
    this.count++;
  }

}