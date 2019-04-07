import { connect } from "react-redux";

import PokemonGrid from "./../components/pokemon-grid";
import selectPokemon from "../redux/actions/select-pokemon";
import getPokemonSpecies from "../redux/actions/get-pokemon-species";
import getPokemonList from "./../redux/actions/get-pokemon-list";

function mapStateToProps({ pokemonsReducer }) {
  return { pokemons: pokemonsReducer.pokemons };
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonGrid);
