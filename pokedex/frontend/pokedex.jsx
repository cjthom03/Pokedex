import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {fetchPokemon} from './util/api_util';

// import { requestAllPokemon } from './actions/pokemon_actions';
// import { selectAllPokemon } from './reducers/selectors';



document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  const store = configureStore();
  // window.dispatch = store.dispatch;
  window.getState = store.getState;
  // window.requestAllPokemon = requestAllPokemon;
  // window.selectAllPokemon = selectAllPokemon;
  // console.log(store);
  window.fetchPokemon = fetchPokemon;
  ReactDOM.render(<Root store={store} />, rootEl);

});
