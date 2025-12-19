import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-ng-onchanges-hook',
  templateUrl: './ng-onchanges-hook.component.html',
  styleUrls: ['./ng-onchanges-hook.component.css']
})
export class NgOnchangesHookComponent implements OnInit, OnChanges {

  @Input() count:number | undefined;
  constructor() { }
  ngOnChanges(changes:SimpleChanges): void {
    console.log(changes);
  }
  ngOnInit(): void {
    
  }
}