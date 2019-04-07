import axios from 'axios';
import {
  ADD_POKEMON,
  ADD_POKEMON_SUCCESS,
  ADD_POKEMON_FAILURE
} from "./action-types";
import {BASE_URL} from "./../../utils/api-constants";

//Probably, it's a better practice to use GET_POKEMON sending the type as parameter
export default function(pokemonToFind) {
  return async function(dispatch) {
    dispatch({type: ADD_POKEMON});
    try {
      const response = await axios.get(`${BASE_URL}/v2/pokemon/${pokemonToFind}`);
      dispatch({type: ADD_POKEMON_SUCCESS, payload: response.data});
    } catch(e) {
      dispatch({type: ADD_POKEMON_FAILURE});
    }
  }
}