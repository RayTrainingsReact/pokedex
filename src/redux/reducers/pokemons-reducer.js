const stateDefault = {
  pokemons: []
};
export default function(state = stateDefault, action) {
  switch (action.type) {
    case "GET_POKEMON_SUCCESS":  
      return {...state, pokemons: [action.payload]};
  }
  return state;
}