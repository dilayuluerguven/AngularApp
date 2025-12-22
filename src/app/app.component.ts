import { Component } from '@angular/core';
import { PageserviceService } from './pages/pageservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularapp';
  constructor(private pageservice:PageserviceService){
    this.pageservice.write();

  }

  save(input:string)
  {
    console.log(input);
  }
}
