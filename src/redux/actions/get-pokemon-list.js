import axios from 'axios';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE
} from "./action-types";
import {
  LIMIT,
  calculateOffset,
  calculateLastPage
} from "./../../utils/pagination-utils";
import {BASE_URL} from "./../../utils/api-constants";
import addPokemon from "./add-pokemon";

export default function(page = 0) {
  return async function(dispatch) {
    dispatch({type: GET_POKEMON_LIST});
    try {
      const response = await axios.get(`${BASE_URL}/v2/pokemon/?offset=${calculateOffset(page)}&limit=${LIMIT}`);
      const payload = {
         lastPage: calculateLastPage(response.data.count),
         actualPage: page,
         shouldShowPagination: true
      }
      dispatch({type: GET_POKEMON_LIST_SUCCESS, payload});

      response.data.results.forEach((pokemon) => {
        dispatch(addPokemon(pokemon.name));
      });
    } catch(e) {
      dispatch({type: GET_POKEMON_LIST_FAILURE});
    }
  }
}