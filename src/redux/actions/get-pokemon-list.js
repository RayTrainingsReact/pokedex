import axios from 'axios';
import {
  GET_POKEMON_LIST,
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_LIST_FAILURE
} from "./action-types";
import {BASE_URL} from "./../../utils/api-constants";
import addPokemon from "./add-pokemon";

export default function(offset = 0) {
  return async function(dispatch) {
    dispatch({type: GET_POKEMON_LIST});
    try {
      const limit = 50;
      const newOffset = offset * limit;
      const response = await axios.get(`${BASE_URL}/v2/pokemon/?offset=${newOffset}&limit=${limit}`);
      dispatch({type: GET_POKEMON_LIST_SUCCESS, payload: response.data});

      response.data.results.forEach((pokemon) => {
        dispatch(addPokemon(pokemon.name));
      });
    } catch(e) {
      dispatch({type: GET_POKEMON_LIST_FAILURE});
    }
  }
}