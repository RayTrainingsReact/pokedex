import { connect } from "react-redux";
import PokemonInfo from "./../components/pokemon-info";
import {
  calculateGenderPorcentage,
  calculateHatchSteps,
  calculateCatchRate,
  getGroupsNames
} from "./../utils/pokemon-species-utils";

import {
  getAbilities,
  getWeightKg,
  getHeightMeters,
  zeroPad
} from "./../utils/pokemon-info-utils";

function mapStateToProps(state) {
  const newProps = {
    pokemonSelected: state.pokemonSelected,
    pokemonSpecies: {
      eggGroups: "",
      hatchSteps: "",
      genderRatio: ""
    },
    fightInfo: []
  };

  if (state.pokemonSelected >= 0) {
    let pokemonSelected = state.pokemonsReducer.pokemons[state.pokemonSelected];
    newProps.info = {
      height: getHeightMeters(pokemonSelected.height),
      weight: getWeightKg(pokemonSelected.weight),
      abilities: getAbilities(pokemonSelected.abilities),
      frontDefault: pokemonSelected.sprites.front_default,
      name: pokemonSelected.name,
      order: zeroPad(pokemonSelected.order)
    };
    newProps.fightInfo = [
      { label: "HP", value: 50 },
      { label: "Attack", value: 27 },
      { label: "Defense", value: 47 },
      { label: "Speed", value: 87 },
      { label: "Sp Atk", value: 32 },
      { label: "Sp Def", value: 60 }
    ];
  }
  if (state.pokemonSpecies.gender_rate) {
    newProps.pokemonSpecies = {
      eggGroups: getGroupsNames(state.pokemonSpecies.egg_groups),
      hatchSteps: calculateHatchSteps(state.pokemonSpecies.hatch_counter),
      catchRate: calculateCatchRate(state.pokemonSpecies.capture_rate),
      genderRatio: calculateGenderPorcentage(state.pokemonSpecies.gender_rate)
    };
  }
  return newProps;
}

export default connect(mapStateToProps)(PokemonInfo);
