import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON:
      return merge({}, state, ...action.items);
    default:
      return state;
  }
};

export default itemsReducer;
