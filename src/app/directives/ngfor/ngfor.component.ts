import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-ngfor',
  templateUrl: './ngfor.component.html',
  styleUrls: ['./ngfor.component.css']
})
export class NgforComponent implements OnInit {

  names:string[] = ['Mehmet', 'Ayşe', 'Fatma'];
  userList:User[] = [];
  constructor() {
    this.userList.push(new User(1,'Mehmet','mehmet@example.com'));
    this.userList.push(new User(2,'Ahmet','ahmet@example.com'));
    this.userList.push(new User(3,'Ayşe','ayse@example.com'));
    this.userList.push(new User(4,'Fatma','fatma@example.com'));
   }
  ngOnInit(): void {
  }
  
}
