import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { adminHomeComponent } from './home/home.component';
import { MemberComponent } from './member/member.component';
import { RaporlarComponent } from './raporlar/raporlar.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [adminHomeComponent, MemberComponent, RaporlarComponent, AdminLayoutComponent,
],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[adminHomeComponent,MemberComponent,RaporlarComponent],
})
export class AdminModule { }
