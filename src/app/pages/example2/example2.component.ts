import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example2',
  template: `<h1 class="h1">Example2 Component</h1><p>{{email}}</p>`, 
  styles: [`.h1 { color: red; }`]
})
export class Example2Component implements OnInit {
  email:string="ahmet@gmail.com"
  constructor() { }
  ngOnInit(): void {
  }

}
