import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge  from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      let poke = action.pokemon;
      let newState = merge({}, state);
      newState[poke.id] = poke;
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
