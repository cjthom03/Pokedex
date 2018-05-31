import React from 'react';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon;
  }


  render() {
    let { pokemon } = this.props;
    return(
      <ul>
        { pokemon.map( (poke) =>
          <li key={poke.id}>{poke.id} <img src={poke.image_url}></img> {poke.name} </li>
        )}
      </ul>
    );
  }

}

export default PokemonIndex;
