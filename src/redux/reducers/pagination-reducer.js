import {
  GET_POKEMON_LIST_SUCCESS,
  GET_POKEMON_SUCCESS
} from "./../actions/action-types";

const stateDefault = {
	lastPage: 0,
	actualPage: 0,
	shouldShowPagination: false
};

export default function(state = stateDefault, action) {
  switch (action.type) {
    case GET_POKEMON_LIST_SUCCESS:
      return action.payload;
    case GET_POKEMON_SUCCESS:
    	return {...state, shouldShowPagination: false};
     default:
     	return state;
  }
}