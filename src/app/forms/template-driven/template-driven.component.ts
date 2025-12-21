import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css'],
})
export class TemplateDrivenComponent implements OnInit {
  loginModel: loginModel;
  // loginModel2: loginModelC;
  countryMenu: CountryDropMenu[] = [
    { text: 'Seçiniz', value: 0 },
    { text: 'Türkiye', value: 1 },
    { text: 'Almanya', value: 2 },
    { text: 'Fransa', value: 3 },
    { text: 'Hollanda', value: 4 },
  ];
  genderMenu:genderRadioMenu[]=[
    {text:'Erkek',value:1},
    {text:'Kadın',value:2},
  ];
  constructor() {
    this.loginModel = {
      userName: '',
      password: '',
      rememberMe: false,
      country: 0,
      gender: 2,
    };
    // this.loginModel2 = new loginModelC();
  }
  ngOnInit(): void {}
  save(form: NgForm) {
    console.log(form.value); //ngModel ile bağlanan verileri alır
    // console.log(this.loginModel); //model üzerinden de verileri alabiliriz
  }
  countryChange(value: any) {
    console.log(value);
  }
  genderChange(value:any)
  {
    console.log(value);
  }
  onChange(value:any)
  {
    console.log(value);
  }
}
interface genderRadioMenu{
  text:string,
  value:number
}
interface CountryDropMenu {
  text: string;
  value: number;
}

interface loginModel {
  userName: string;
  password: string;
  rememberMe?: boolean;
  country: number;
  gender:number;
}


class loginModelC {
  userName?: string;
  password?: string;
  rememberMe?: boolean;
  // constructor(userName: string, password: string, rememberMe?: boolean) {
  //   this.userName = userName;
  //   this.password = password;
  //   this.rememberMe = rememberMe;
  // }
}
