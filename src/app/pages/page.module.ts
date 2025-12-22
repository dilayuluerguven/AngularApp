import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FirstPageComponent } from './first-page/first-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { PageserviceService } from './pageservice.service';
import { PipepagePipe } from './pipepage.pipe';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [FirstPageComponent, SecondPageComponent, PipepagePipe, HomePageComponent],
  imports: [
    CommonModule
  ],
  providers: [PageserviceService],
  exports: [FirstPageComponent, SecondPageComponent,PipepagePipe]
})
export class PageModule { }
