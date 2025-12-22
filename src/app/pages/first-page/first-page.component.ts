import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  constructor(private route: Router) {}

  ngOnInit(): void {}
  goSecondPage() {
    this.route.navigateByUrl('/second-page');
    // this.route.navigateByUrl(`/second-page/${5}`);
    // this.route.navigate(['/second-page',5]);//parametre yollamak icin
  }
}
