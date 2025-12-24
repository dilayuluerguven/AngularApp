import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css']
})
export class AComponent  implements OnInit{
  currency:string |undefined
  constructor(private jsonplaceholder:JsonplaceholderService){}
  ngOnInit(): void {
      this.jsonplaceholder.currencyObservable.subscribe(x=>{
        console.log("A component haberdar edildi "+x);
        this.currency=x;
      })
  }

}
