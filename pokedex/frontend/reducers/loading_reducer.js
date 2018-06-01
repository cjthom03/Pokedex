import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, START_LOADING_ALL_POKEMON } from '../actions/pokemon_actions';
import merge  from 'lodash/merge';

const loadingReducer = (state = false, action) => {
  Object.freeze(state);
  switch(action.type) {
    // case action.type.slice(0, 8) === 'RECEIVE_':
    //   debugger;
    //   return false;
    case START_LOADING_ALL_POKEMON:
      debugger;

      return true;
    default:
      return state;
  }
};

export default loadingReducer;
