import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgModelComponent } from './directives/ng-model/ng-model.component';
import { CustomDirective } from './directives/custom.directive';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';
import { TemplateDrivenComponent } from './forms/template-driven/template-driven.component';
import { ReactiveComponent } from './forms/reactive/reactive.component';
import { ReactiveType2Component } from './forms/reactive-type2/reactive-type2.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';
import { backend_url } from './consts';
import { PageModule } from './pages/page.module';
import { SayfaModule } from './projects/pages/sayfa.module';
import { AdminModule } from './projects/admin-pages/admin.module';
import { OrnekComponent } from './ornek/ornek.component';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
import { ExaComponent } from './exa/exa.component';
import { TokenInterceptor } from './interceptor/token.interceptor';
import { CustomErrorInterceptor } from './interceptor/custom-error.interceptor';

let isProd: boolean = false;
@NgModule({
  declarations: [
    AppComponent,
    NgforComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    CustomDirective,
    PipeComponent,
    UpperPipe,
    TemplateDrivenComponent,
    ReactiveComponent,
    ReactiveType2Component,
    FirstComponent,
    SecondComponent,
    OrnekComponent,
    ExaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,PageModule,SayfaModule,AdminModule,HttpClientModule],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,multi:true
    },
    { provide: backend_url, useValue: 'http://www.api.com' },
       {
      provide:HTTP_INTERCEPTORS,
      useClass:CustomErrorInterceptor,multi:true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
