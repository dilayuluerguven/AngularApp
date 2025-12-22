import { query } from '@angular/animations';
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
    let pageSize=this.activatedRoute.snapshot.queryParamMap.get('pageSize');
    console.log(`Page: ${page}, Page Size: ${pageSize}`);
    console.log('first page component initialized');
    this.activatedRoute.queryParamMap.subscribe(x=>{
      console.log('Query Params Changed:',x);
      console.log(`Dynamic Page: ${x.get('page')}, Page Size: ${x.get('pageSize')}`);
    })
  }
  changeQueryParams(){
    this.route.navigate(['first-page'],{queryParams:{page:10,pageSize:20}});
  }
  goSecondPage() {
    // this.route.navigateByUrl('/second-page');
     this.route.navigateByUrl(`/second-page/${5}`);
    // this.route.navigate(['/second-page',5]);//parametre yollamak icin
  }
}
