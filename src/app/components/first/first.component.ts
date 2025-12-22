import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { backend_url } from 'src/app/consts';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor(public helperService:HelperService,private title:Title,@Inject(backend_url) private url:string) { }
  ngOnInit(): void {
    console.log(this.helperService.upper("Angular First Component"));
    this.title.setTitle("Angular App - First Component");
    this.helperService.sendSms("Merhaba","555-555-55-55");
    console.log(this.url);
  }
  change(){
    this.helperService.title="Changed Title";
  }
  
}