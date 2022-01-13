import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoDeHeroesComponent } from './pages/listado-de-heroes/listado-de-heroes.component';
import { FormsModule } from '@angular/forms';

import { HeroeRoutingModule } from './heroe-routing.module';

import { ModalPollComponent } from './pages/modal-poll/modal-poll.component';
import { HeroProfileComponent } from './pages/hero-profile/hero-profile.component';
import { SpinnerComponent } from './pages/spinner/spinner.component';
import { CapitalizePipe } from './capitalize.pipe';



@NgModule({
  declarations: [
    ListadoDeHeroesComponent,
    HeroProfileComponent,
    SpinnerComponent,
    ModalPollComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    HeroeRoutingModule,
    FormsModule   
  ]
})
export class HeroesModule { }

