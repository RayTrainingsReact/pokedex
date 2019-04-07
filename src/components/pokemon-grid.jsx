import React, {Component} from "react";
import {connect} from "react-redux";
import {
  Row,
  Col,
  Container
} from "reactstrap";

import { zeroPad } from "./../utils/pokemon-info-utils";

import selectPokemon from "../redux/actions/select-pokemon";
import getPokemonSpecies from "../redux/actions/get-pokemon-species";
import getPokemonList from './../redux/actions/get-pokemon-list';

class PokemonGrid extends Component {
	componentDidMount(){
		this.props.getPokemonList();
	}

	renderPokemons(){
		return this.props.pokemons.map((pokemon, arrayIndex) => {
	      return(
				<Col 
					className="text-center" 
					key={pokemon.order}
					onClick={() => {this.props.selectPokemon(pokemon, arrayIndex)}
			      	}>
					<Container >
						<img src={pokemon.sprites.front_default} alt={pokemon.name} />
						<p>{zeroPad(pokemon.order)}</p>
						<p>{pokemon.name}</p>
					</Container>
				</Col>
	        );
	    })
	}
  
  render() {
    return <Row>
      {this.renderPokemons()}
    </Row>; 
  }
}

function mapStateToProps({pokemonsReducer}) {
  return {pokemons: pokemonsReducer.pokemons};
}

function mapDispatchToProps(dispatch) {
  return {
    selectPokemon: (pokemon, selectedId) => {
        dispatch(getPokemonSpecies(pokemon.order));
        dispatch(selectPokemon(selectedId));
      },
    getPokemonList: (offset = 0) => dispatch(getPokemonList(offset)) 
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonGrid);