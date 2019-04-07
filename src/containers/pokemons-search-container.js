import { reduxForm } from "redux-form";
import { connect } from "react-redux";

import PokemonsSearch from "./../components/pokemons-search";
import getPokemon from "./../redux/actions/get-pokemon";
import getPokemonList from "./../redux/actions/get-pokemon-list";
import selectPokemon from "./../redux/actions/select-pokemon";

let PokemonsSearchBuffer = reduxForm({
  form: "pokemon-search"
})(PokemonsSearch);

function mapStateToProps({ pokemonsReducer }) {
  return {
    isPokemonNotFound: pokemonsReducer.error
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemon: pokemonToFind => dispatch(getPokemon(pokemonToFind)),
    deselectPokemon: () => dispatch(selectPokemon(-1)),
    getPokemonList: (offset = 0) => dispatch(getPokemonList(offset))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonsSearchBuffer);
