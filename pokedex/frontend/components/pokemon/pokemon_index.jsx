import React from 'react';
import PokemonIndexItem from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // debugger;
    this.props.requestAllPokemon;
  }

  componentWillMount() {

  }



  render() {
    // debugger;
    let { pokemon } = this.props;

    if(this.props.loading){

      return (<div className="loader">Loading...</div>);
    }
    return(
      <ul>
        { pokemon.map( (poke) => <PokemonIndexItem key={poke.id} poke={poke}/>)}
      </ul>
    );
  }

}

export default PokemonIndex;
