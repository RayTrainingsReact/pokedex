const stateDefault = {
  pokemons: [],
  error: false
};
export default function(state = stateDefault, action) {
  switch (action.type) {
    case "GET_POKEMON_SUCCESS":  
      return { ...state, pokemons: [action.payload], error: false };
     case "GET_POKEMON_FAILURE":
     	return { ...state, error: true };
     default:
     	return state;
  }
}