import axios from 'axios';

export default function(pokemonToFind) {
  return async function(dispatch) {
    const BASE_URL = "https://pokeapi.co/api/v2";
    dispatch({type: "GET_POKEMON"});
    try {
      const response = await axios.get(`${BASE_URL}/pokemon/${pokemonToFind}`);
      dispatch({type: "GET_POKEMON_SUCCESS", payload: response.data});
    } catch(e) {
      dispatch({type: "GET_POKEMON_FAILURE"});
    }
  }
}