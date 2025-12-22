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
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule,PageModule,SayfaModule,AdminModule],
  providers: [
    {
      provide: HelperService,
      useClass: isProd ? HelperService : Helper2Service,
    },
    { provide: backend_url, useValue: 'http://www.api.com' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
