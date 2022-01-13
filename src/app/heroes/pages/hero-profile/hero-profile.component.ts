import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Location } from '@angular/common';
import { Heroe } from '../../../classes/heroe';
import { HeroesService } from '../../../heroes.service';
import { Store } from '@ngrx/store';
import { HeroeInterface } from 'src/app/heroe.reduce';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-hero-profile',
  templateUrl: './hero-profile.component.html',
  styleUrls: ['./hero-profile.component.css']
})
export class HeroProfileComponent implements OnInit {
  @ViewChild('modal') modal;
  private id;
  public heroe: Heroe;
  public question_modal: string;
  public team: string = "";
  heroeStore$ = new Observable<HeroeInterface>();
  
  constructor(private route: ActivatedRoute,
     private heroesService: HeroesService, 
     private _location: Location,
     private store: Store<{heroe:HeroeInterface}>) {

      this.heroeStore$ = this.store.select('heroe');
      }


  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.heroesService.getHeroe(this.id).subscribe(data => {
        const temp = data.data.results[0];
        // this.heroe = new Heroe(temp.id, temp.name, temp.description, temp.modified, temp.thumbnail, temp.resourceURI, this.heroesService.getTeamColor(temp.id));
        this.heroe = new Heroe(temp.id, temp.name, temp.description, temp.modified, temp.thumbnail, temp.resourceURI, temp.team);
        
        let salida = this.store.dispatch({type: 'heroePerfil', state:this.heroe});
        console.log("Tiene equipo?");
        console.log(this.heroe.teamColor);
        this.team = this.heroe.teamColor;
      });
    });

  }

  goBack() {
    this._location.back();
  }

  getTeam(team): void {
    console.log("Color: " + team);
    this.team = team;
     this.heroesService.teams.set(this.heroe.id, this.team);
    //this.heroesService.setTeam(this.heroe.id.toString(), this.team.toString()).subscribe(data => {
    //   console.log(data)
    // }, (err) => {
    //   //TODO: Manejo del error
    // }
    //);
  }

  launchModal(): void {
    //this.question_modal="¿Dónde ubicarías a tu súper héroe?";
    this.question_modal = "¿En cual grupo quieres colocar a tu súper héroe?";
    this.modal.toggle_modal();
  }

}
