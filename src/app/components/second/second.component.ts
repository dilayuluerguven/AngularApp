import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  
  constructor(private helperService:HelperService) { }
  ngOnInit(): void {
    console.log(this.helperService.upper("Angular(Second Component)"));
  }

  show(){
    console.log(this.helperService.title);
  }
}
