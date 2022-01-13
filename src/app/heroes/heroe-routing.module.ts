import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HeroProfileComponent } from './pages/hero-profile/hero-profile.component';
import { ModalPollComponent } from './pages/modal-poll/modal-poll.component';
import { ListadoDeHeroesComponent } from './pages/listado-de-heroes/listado-de-heroes.component';


const routes: Routes = [
  {
    path: '',
    children:[
      {
        path:'listado',
        component: ListadoDeHeroesComponent
      },
      {
        path:'heroe/:id',
        component: HeroProfileComponent
      },
      {
         path: 'modal-poll',
         component: ModalPollComponent},
      {
        path:'**',
        redirectTo: 'listado'
      },
    ]
  }
];


@NgModule({
   imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule,
    FormsModule
  ]
})
export class HeroeRoutingModule { }
