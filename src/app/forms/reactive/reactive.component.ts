import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CountryDropMenu } from 'src/app/models/country-drop-menu';
import { GenderRadioMenu } from 'src/app/models/gender-radio-menu';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveComponent implements OnInit {
  loginForm: FormGroup;
  countryMenu: CountryDropMenu[] = [
    { text: 'Türkiye', value: 1 },
    { text: 'Almanya', value: 2 },
    { text: 'Fransa', value: 3 },
    { text: 'Hollanda', value: 4 },
  ];
  genderMenu: GenderRadioMenu[] = [
    { text: 'Erkek', value: 1 },
    { text: 'Kadın', value: 2 },
  ];
  constructor(fb: FormBuilder) {
    this.loginForm = fb.group({
      userName: fb.control('', Validators.required), //FormControl()
      password: fb.control('', [Validators.required, Validators.minLength(6)]),
      rememberMe: false,
      country: fb.control('',Validators.required),
      gender: [1],
    });
  }
  ngOnInit(): void {
    // this.loginForm.get("userName")?.valid
  }
  signIn() {
    console.log(this.loginForm.value);
  }
  isInValidMessageShow(formControl:string)
  {
    return this.loginForm.get(formControl)?.invalid &&
          (this.loginForm.get(formControl)?.dirty || this.loginForm.get(formControl)?.touched)

  }
  isValid(formControlName: string): boolean {
    let formControl = this.loginForm.get(formControlName);
      if (!(formControl?.invalid && (formControl?.dirty || formControl?.touched))) return false;
      if (formControl?.errors?.['required']) return true;
      if (formControl?.errors?.['minlength']) return true;
      return false;
    }
    isSuccessValid(formControlName: string) {
      let formControl = this.loginForm.get(formControlName);
      return formControl?.valid && (formControl?.dirty || formControl?.touched);
    }
}
