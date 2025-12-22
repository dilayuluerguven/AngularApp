import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css'],
})
export class FirstPageComponent implements OnInit {
  constructor(private route: Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    let page=this.activatedRoute.snapshot.queryParamMap.get('page');
    console.log('Current Page:',page);
    let pageSize=this.activatedRoute.snapshot.queryParamMap.get('pageSize');
    console.log('Page Size:',pageSize);
  }
  goSecondPage() {
    // this.route.navigateByUrl('/second-page');
     this.route.navigateByUrl(`/second-page/${5}`);
    // this.route.navigate(['/second-page',5]);//parametre yollamak icin
  }
}
