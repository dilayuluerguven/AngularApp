import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { GaleriComponent } from './galeri/galeri.component';
import { IletisimComponent } from './iletisim/iletisim.component';
import { HeaderComponent } from './nav/header/header.component';
import { RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { LeftMenuComponent } from './menu/left-menu/left-menu.component';

@NgModule({
  declarations: [
    AnasayfaComponent,
    HakkimizdaComponent,
    GaleriComponent,
    IletisimComponent,
    HeaderComponent,
    LayoutComponent,
    LeftMenuComponent,
  ],
  exports: [
    AnasayfaComponent,
    HakkimizdaComponent,
    GaleriComponent,
    IletisimComponent,
    HeaderComponent
  ],
  imports: [CommonModule,RouterModule],
})
export class SayfaModule {}
