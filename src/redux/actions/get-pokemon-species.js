import axios from "axios";

export default function(pokemonNameId) {
  return async function(dispatch) {
    const BASE_URL = "https://pokeapi.co/api/v2";
    dispatch({type: "GET_POKEMON_SPECIES"});
    try {
      const response = await axios.get(`${BASE_URL}/pokemon-species/${pokemonNameId}/`);
      dispatch({type: "GET_POKEMON_SPECIES_SUCCESS", payload: response.data});
    } catch (e) {
      dispatch({type: "GET_POKEMON_SPECIES_FAILURE"});
    }
  }
}