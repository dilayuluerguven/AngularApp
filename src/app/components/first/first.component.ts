import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public helperService:HelperService,private title:Title) { }
  ngOnInit(): void {
    console.log(this.helperService.upper("Angular First Component"));
    this.title.setTitle("Angular App - First Component");
  }
  change(){
    this.helperService.title="Changed Title";
  }
  
}