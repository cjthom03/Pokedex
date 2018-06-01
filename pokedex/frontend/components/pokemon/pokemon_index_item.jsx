import React from 'react';
import {Link} from 'react-router-dom';

const PokemonIndexItem = ({ poke }) => (
  <li><Link to = {`/pokemon/${poke.id}`}>{poke.id} <img src={poke.image_url}></img> {poke.name}</Link></li>
);

export default PokemonIndexItem;
