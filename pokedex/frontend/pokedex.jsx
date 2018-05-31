import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


import { requestAllPokemon } from './actions/pokemon_actions';


document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('root');

  const store = configureStore();
  window.dispatch = store.dispatch;
  window.getState = store.getState;
  window.requestAllPokemon = requestAllPokemon;

  ReactDOM.render(<h1>SHUT UP KARTIK</h1>, rootEl);

});
