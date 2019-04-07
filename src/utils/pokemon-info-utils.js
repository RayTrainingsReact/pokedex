export function getAbilities(abilities) {
  return abilities.reduce((abilityNames, ability) => {
    if(ability.length === 0) {
      return ability.ability.name;
    }
    return abilityNames + ", " + ability.ability.name;
  }, "");
}

export function getHeightMeters(height) {
  return height / 10 + "m";
}

export function getWeightKg(weight) {
  return weight / 10 + "kg";
}