import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventclick',
  templateUrl: './eventclick.component.html',
  styleUrls: ['./eventclick.component.css']
})
export class EventclickComponent implements OnInit {

  count:number=1;
  constructor() { }

  ngOnInit(): void {
  }

  WritetoConsole():void{
    console.log("Button clicked"); 
  }
  increaseCount():void{
    this.count++;
  }

}