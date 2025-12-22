import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnasayfaComponent } from './projects/pages/anasayfa/anasayfa.component';
import { HakkimizdaComponent } from './projects/pages/hakkimizda/hakkimizda.component';
import { GaleriComponent } from './projects/pages/galeri/galeri.component';
import { IletisimComponent } from './projects/pages/iletisim/iletisim.component';
import { adminHomeComponent } from './projects/admin-pages/home/home.component';
import { MemberComponent } from './projects/admin-pages/member/member.component';
import { RaporlarComponent } from './projects/admin-pages/raporlar/raporlar.component';
import { LayoutComponent } from './projects/pages/layout/layout.component';
import { AdminLayoutComponent } from './projects/admin-pages/admin-layout/admin-layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: AnasayfaComponent },
      { path: 'hakkimizda', component: HakkimizdaComponent },
      { path: 'galeri', component: GaleriComponent },
      { path: 'iletisim', component: IletisimComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: adminHomeComponent },
      { path: 'uyeler', component: MemberComponent },
      { path: 'raporlar', component: RaporlarComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
