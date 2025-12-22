import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './hakkimizda/hakkimizda.component';
import { GaleriComponent } from './galeri/galeri.component';
import { IletisimComponent } from './iletisim/iletisim.component';

@NgModule({
  declarations: [
    AnasayfaComponent,
    HakkimizdaComponent,
    GaleriComponent,
    IletisimComponent,
  ],
  exports: [
    AnasayfaComponent,
    HakkimizdaComponent,
    GaleriComponent,
    IletisimComponent,
  ],
  imports: [CommonModule],
})
export class SayfaModule {}
