import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

title:string="Title";
  isShow:boolean=false;
  constructor() { }
  upper(text:string)
  {
    return text.toUpperCase()+"daha hızlı";
  }
   sendSms(text:string,phone:string)
  {
    console.log(`sahte sms gönderildi`);
  }
}