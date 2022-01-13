import {createAction, createReducer, on } from '@ngrx/store';
import { Heroe } from './classes/heroe';
import { HeroesService } from './heroes.service';

export const listar = createAction('[Listar Component] Listar');
export const heroePerfil = createAction('[Perfil Component] Perfil');

