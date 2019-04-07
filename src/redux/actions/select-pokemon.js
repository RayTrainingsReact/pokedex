import {
  POKEMON_SELECTED
} from "./action-types";

export default function (selectedId) {
  return {
    type: POKEMON_SELECTED,
    payload: selectedId
  };
}