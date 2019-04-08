//TODO: rename in the future!
export function getProperty(propertyList, property = "ability") {
  if (!propertyList) {
    return "";
  }

  return propertyList.reduce((propertyNames, propertyItem, index) => {
    if (index === 0) {
      return propertyItem[property].name;
    }
    return propertyNames + ", " + propertyItem[property].name;
  }, "");
}

export function getHeightMeters(height) {
  return height / 10 + "m";
}

export function getWeightKg(weight) {
  return weight / 10 + "kg";
}

export function zeroPad(id, numberZeroes = 3) {
  return id.toString().padStart(numberZeroes, "0");
}
