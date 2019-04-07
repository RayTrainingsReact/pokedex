import { 
  createStore, 
  combineReducers, 
  applyMiddleware,
  compose 
} from "redux";

import pokemonsReducer from './reducers/pokemons-reducer';
import pokemonSelectedReducer from "./reducers/pokemon-selected-reducer";
import pokemonSpeciesReducer from "./reducers/pokemon-species";
import paginationReducer from "./reducers/pagination-reducer";
import {reducer as formReducer} from "redux-form";
import thunk from 'redux-thunk';


export default function() {
  const reducers = combineReducers({
    pokemonsReducer: pokemonsReducer,
    pokemonSpecies: pokemonSpeciesReducer,
    pokemonSelected: pokemonSelectedReducer,
    pagination: paginationReducer, 
    form: formReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = applyMiddleware(thunk);

  return createStore(reducers, composeEnhancers(middlewares));
}
