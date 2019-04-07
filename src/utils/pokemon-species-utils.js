export function calculateGenderPorcentage(genderRate) {
  let genderRatio;
    if (genderRate >= 0) {
      const female = (genderRate / 8) * 100;
      const male = 100 - female;
      genderRatio = "F " + female + " M " + male;
    } else {
      genderRatio = "genderless";
    }
  return genderRatio;
}

export function calculateHatchSteps(hatchCounter) {
  return (hatchCounter + 1) * 255;
}

export function calculateCatchRate(captureRate) {
  return ((captureRate / 255) * 100).toFixed(2) + "%";
}

export function getGroupsNames(groups) {
  return groups.reduce((groupNames, group) => {
    if(groupNames.length === 0) {
      return group.name;
    }
    return groupNames + ", " + group.name;
  }, "");
}