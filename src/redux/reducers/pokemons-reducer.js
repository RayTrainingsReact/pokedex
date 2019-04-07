import {
  GET_POKEMON_SUCCESS,
  GET_POKEMON_FAILURE,
  ADD_POKEMON_SUCCESS,
  CLEAN_POKEMON_LIST
} from "./../actions/action-types";

const stateDefault = {
  pokemons: [],
  error: false
};

export default function(state = stateDefault, action) {
  switch (action.type) {
	case GET_POKEMON_SUCCESS:  
		return { ...state, pokemons: [action.payload], error: false };
	case ADD_POKEMON_SUCCESS:
		const pokemonsOrdered = [...state.pokemons, action.payload].sort((pokemonA, pokemonB) => pokemonA.order - pokemonB.order); 	
		return { ...state, pokemons: pokemonsOrdered, error: false };
	case CLEAN_POKEMON_LIST:
		return {...state, pokemons: []};
	case GET_POKEMON_FAILURE:
		return { ...state, error: true };
	default:
		return state;
  }
}