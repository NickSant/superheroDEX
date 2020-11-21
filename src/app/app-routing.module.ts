import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { HeroInfosComponent } from './hero-infos/hero-infos.component';

const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'hero', component: HeroInfosComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
