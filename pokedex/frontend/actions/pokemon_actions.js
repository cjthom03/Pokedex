import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POKEMON = 'RECEIVE_ALL_POKEMON';
export const RECEIVE_POKEMON = 'RECEIVE_POKEMON';
export const START_LOADING_ALL_POKEMON = 'START_LOADING_ALL_POKEMON';


export const receiveAllPokemon = (pokemon) => ({
    type: RECEIVE_ALL_POKEMON,
    pokemon
  });

export const requestAllPokemon = () => (dispatch) => {
  dispatch(startLoadingAllPokemon);
  // debugger;
  return APIUtil.fetchAllPokemon().then( (pokemon) => dispatch(receiveAllPokemon(pokemon)) );
};

export const receivePokemon = ({ pokemon, items }) => ({
  type: RECEIVE_POKEMON,
  pokemon,
  items
});

export const requestPokemon = (pokeId) => (dispatch) => {
  return APIUtil.fetchPokemon(pokeId).then((pokemon) => dispatch(receivePokemon(pokemon)));
};

export const startLoadingAllPokemon = () => {
  return {type: START_LOADING_ALL_POKEMON}
};
