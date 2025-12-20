import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NgforComponent } from './directives/ngfor/ngfor.component';
import { NgIfComponent } from './directives/ng-if/ng-if.component';
import { NgSwitchComponent } from './directives/ng-switch/ng-switch.component';
import { NgClassComponent } from './directives/ng-class/ng-class.component';
import { NgStyleComponent } from './directives/ng-style/ng-style.component';
import { NgModelComponent } from './directives/ng-model/ng-model.component';
import { CustomDirective } from './directives/custom.directive';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
