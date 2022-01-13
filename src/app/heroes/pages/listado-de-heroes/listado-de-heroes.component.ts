import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../heroes.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { listar } from 'src/app/heroe.action';
import { HeroeInterface } from 'src/app/heroe.reduce';

@Component({
  selector: 'app-listado-de-heroes',
  templateUrl: './listado-de-heroes.component.html',
  styleUrls: ['./listado-de-heroes.component.css']
})
export class ListadoDeHeroesComponent implements OnInit {

  public title = 'Tutorial de Angular - Héroes de Marvel';
  public searchString;
  // The child component : spinner
  @ViewChild('spi') spinner;
  /* public heroes: Array<Heroe> = []; */

  constructor(public heroesService: HeroesService, private router:Router,private store: Store<{heroe:HeroeInterface}>) {
    this.searchString = '';
   }

  submitSearch() {
    this.heroesService.resetPager();
    this.heroesService.getHeroes(this.searchString);
  }

  prevPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page - 1);
  }

  nextPage() {
    this.heroesService.getHeroes(this.searchString, this.heroesService.page + 1);
  }

  go_to(id){
    console.log(id);
    this.router.navigateByUrl('/heroes/heroe/'+id);
  }

  ngOnInit() {
      this.heroesService.getHeroes();
     
  }

}
