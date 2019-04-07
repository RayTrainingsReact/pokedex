import { connect } from "react-redux";
import PaginationPokemon from "./../components/pokemon-pagination";
import cleanPokemonList from "./../redux/actions/clean-pokemon-list";
import getPokemonList from "./../redux/actions/get-pokemon-list";
import selectPokemon from "./../redux/actions/select-pokemon";

function mapStateToProps(state) {
  return { ...state.pagination };
}

function mapDispatchToProps(dispatch) {
  return {
    getPokemonList: (offset = 0) => {
      dispatch(selectPokemon(-1));
      dispatch(cleanPokemonList());
      dispatch(getPokemonList(offset));
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PaginationPokemon);
