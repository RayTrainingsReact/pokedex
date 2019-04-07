export function getAbilities(abilities) {
  return abilities.reduce((abilityNames, ability, index) => {
    if(index === 0) {
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

export function zeroPad(id, numberZeroes = 3) {
  return id.toString().padStart(numberZeroes, "0")
}

