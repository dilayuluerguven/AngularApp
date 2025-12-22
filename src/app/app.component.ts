import { Component, OnInit } from '@angular/core';
import { PageserviceService } from './pages/pageservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angularapp';
  constructor(private pageservice: PageserviceService) {
    this.pageservice.write();
  }
  ngOnInit(): void {
    let myobservable = new Observable<string>((data) => {
      data.next('ahmet');
      data.next("mehmet");
      data.complete();
    });
    myobservable.subscribe(x=>{
      console.log(x);
    })
  }
  save(input: string) {
    console.log(input);
  }
}
