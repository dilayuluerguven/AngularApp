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
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { ExresolverResolver } from './exresolver.resolver';

const routes: Routes = [
  { path: '', redirectTo: '/a', pathMatch: 'full' },
  { path: 'a', component: AComponent },
  { path: 'b', component: BComponent ,resolve:{postList:ExresolverResolver}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
