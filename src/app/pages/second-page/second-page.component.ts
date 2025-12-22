import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-second-page',
  templateUrl: './second-page.component.html',
  styleUrls: ['./second-page.component.css'],
})
export class SecondPageComponent implements OnInit {
  constructor(private route: ActivatedRoute,private router:Router) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log('Gelen id degeri: ', id);
    this.route.paramMap.subscribe(x=>{
      console.log('dynamic id: ', x.get('id'));
    })
  }
  changeId(){
    this.router.navigate(['/second-page', 10]);
  }

}
