import React from 'react';
import PokemonDetail from './pokemon_detail';
import {connect} from 'react-redux';
import {requestPokemon} from '../../actions/pokemon_actions';

const mapStateToProps = (state, ownProps) => {
    return {pokemon: state.entities.pokemon[ownProps.match.params.pokemonId]};
};

const mapDispatchToProps = (dispatch) => {
  return {fetchpokemon: (poke) => dispatch(requestPokemon(poke))};
};

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
