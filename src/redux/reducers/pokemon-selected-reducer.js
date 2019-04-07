import {
  POKEMON_SELECTED
} from "./../actions/action-types";

const stateDefault = -1;
export default function(state = stateDefault, action) {
  switch (action.type) {
    case POKEMON_SELECTED:
      return action.payload;
     
     default:
     	return state;
  }
}