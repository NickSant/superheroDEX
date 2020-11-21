import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http'
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeroTinyCardComponent } from './hero-tiny-card/hero-tiny-card.component';
import { HeroInfosComponent } from './hero-infos/hero-infos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeroTinyCardComponent,
    HeroInfosComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
