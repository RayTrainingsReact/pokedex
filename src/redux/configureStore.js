import { 
  createStore, 
  combineReducers, 
  applyMiddleware,
  compose 
} from "redux";
import pokemonsReducer from './reducers/pokemons-reducer';
import {reducer as formReducer} from "redux-form";
import thunk from 'redux-thunk';


export default function() {
  const reducers = combineReducers({
    pokemons: pokemonsReducer,
    form: formReducer
  });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares = applyMiddleware(thunk);

  return createStore(reducers, composeEnhancers(middlewares));
}
