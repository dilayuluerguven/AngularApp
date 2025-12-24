import { Component, OnInit } from '@angular/core';
import { JsonplaceholderService } from 'src/app/services/jsonplaceholder.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css']
})
export class BComponent  implements OnInit{
  currency:string |undefined
  constructor(private jsonplaceholder:JsonplaceholderService){}
  ngOnInit(): void {
       this.jsonplaceholder.currencyObservable.subscribe(x=>{
        console.log("B component haberdar edildi "+x);
        this.currency=x;
      })
  }

}
