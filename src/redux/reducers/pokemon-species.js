import {
  GET_POKEMON_SPECIES_SUCCESS
} from "./../actions/action-types";

const stateDefault = {};

export default function(state = stateDefault, action) {
  switch (action.type) {
    case GET_POKEMON_SPECIES_SUCCESS:
      return action.payload;
     
     default:
     	return state;
  }
}