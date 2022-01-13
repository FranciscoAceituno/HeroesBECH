import { createReducer, on } from "@ngrx/store";
import { heroePerfil, listar } from "./heroe.action";

const initialState : HeroeInterface = { message:"Estado Inicial"};

const _heroeReducer = createReducer(
    initialState,
    on(listar, (state) => state),
    on(heroePerfil, (state) => state)
  );

export function heroeReducer(state: HeroeInterface = initialState , action ){
    console.log(state, action);
    return _heroeReducer(state, action);
}

export interface HeroeInterface {
    message:string;
}