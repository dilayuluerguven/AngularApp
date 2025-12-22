import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExampleServicesService {
  myobservable:Observable<string>
  constructor() {
     this.myobservable = new Observable<string>((data) => {
      data.next('ahmet');
      data.next("mehmet");
      data.complete();
    });
   }
}
