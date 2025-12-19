import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private element:ElementRef) {

    element.nativeElement.style.backgroundColor = 'yellow';
    console.log('CustomDirective applied: Background color set to yellow.');
    alert('CustomDirective applied: Background color set to yellow.');
  }

}
