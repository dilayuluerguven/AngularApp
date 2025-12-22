import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminHomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { RaporlarComponent } from './raporlar/raporlar.component';



@NgModule({
  declarations: [adminHomeComponent, MemberComponent, RaporlarComponent,
],
  imports: [
    CommonModule
  ],
  exports:[adminHomeComponent,MemberComponent,RaporlarComponent],
})
export class AdminModule { }
