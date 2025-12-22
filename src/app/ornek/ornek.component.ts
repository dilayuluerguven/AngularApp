import { Component, OnInit } from '@angular/core';
import { ExampleServicesService } from '../example-services.service';

@Component({
  selector: 'app-ornek',
  templateUrl: './ornek.component.html',
  styleUrls: ['./ornek.component.css'],
})
export class OrnekComponent implements OnInit {
  constructor(private example: ExampleServicesService) {}
  ngOnInit(): void {
    this.example.myobservable.subscribe({
      next(data) {
        console.log("First component "+data);
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log('First component:Data yayınlama sona erdi');
      },
    });
  }
}
