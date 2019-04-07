export default function (selectedId) {
  return {
    type: "POKEMON_SELECTED",
    payload: selectedId
  };
}