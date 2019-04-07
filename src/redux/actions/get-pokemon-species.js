import axios from "axios";
import {
  GET_POKEMON_SPECIES,
  GET_POKEMON_SPECIES_SUCCESS,
  GET_POKEMON_SPECIES_FAILURE
} from "./action-types";
import {BASE_URL} from "./../../utils/api-constants";

export default function(pokemonNameId) {
  return async function(dispatch) {
    dispatch({type: GET_POKEMON_SPECIES});
    try {
      const response = await axios.get(`${BASE_URL}/v2/pokemon-species/${pokemonNameId}/`);
      dispatch({type: GET_POKEMON_SPECIES_SUCCESS, payload: response.data});
    } catch (e) {
      dispatch({type: GET_POKEMON_SPECIES_FAILURE});
    }
  }
}