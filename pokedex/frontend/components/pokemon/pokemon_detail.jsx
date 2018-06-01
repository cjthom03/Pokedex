import React from 'react';

class PokemonDetail extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchpokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.pokemonId !== newProps.match.params.pokemonId) {
    this.props.fetchpokemon(newProps.match.params.pokemonId);
    }
  }

  render(){
    if(!this.props.pokemon) {
      return (<div className="loader">Loading...</div>);
    } else {
      return (
        <div>
          <h1>
            {this.props.pokemon.name}
          </h1>
        </div>
      );
    }
  }


}


export default PokemonDetail;
