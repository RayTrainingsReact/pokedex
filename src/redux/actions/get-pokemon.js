import axios from 'axios';
import {
  GET_POKEMON,
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE
} from "./action-types";
import {BASE_URL} from "./../../utils/api-constants";

export default function(pokemonToFind) {
  return async function(dispatch) {
    dispatch({type: GET_POKEMON});
    try {
      const response = await axios.get(`${BASE_URL}/v2/pokemon/${pokemonToFind}`);
      dispatch({type: GET_POKEMON_SUCCESS, payload: response.data});
    } catch(e) {
      dispatch({type: GET_POKEMON_FAILURE});
    }
  }
}