import each from "jest-each";
import {
  calculateGenderPorcentage,
  calculateHatchSteps,
  calculateCatchRate,
  getGroupsNames
} from "./pokemon-species-utils";

describe("calculateGenderPorcentage", () => {
  each`
     input     | expectedResult
     ${8}   | ${"F 100% M 0%"}
     ${1}   | ${"F 12.5% M 87.5%"}
     ${5}   | ${"F 62.5% M 37.5%"}
     ${null}    | ${"F 0% M 100%"}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(calculateGenderPorcentage(input)).toBe(expectedResult);
    }
  );
});

describe("calculateHatchSteps", () => {
  each`
     input     | expectedResult
     ${8}   | ${2295}
     ${1}   | ${510}
     ${5}   | ${1530}
     ${null}    | ${255}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(calculateHatchSteps(input)).toBe(expectedResult);
    }
  );
});

describe("getGroupsNames", () => {
  const inputs = [
    [{ name: "bird" }, { name: "bird2" }, { name: "ETC" }],
    [{ name: "JS" }, { name: "JS" }],
    [{ name: "1" }]
  ];
  each`
     input     | expectedResult
     ${inputs[0]}   | ${"bird, bird2, ETC"}
     ${inputs[1]}   | ${"JS, JS"}
     ${inputs[2]}    | ${"1"}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(getGroupsNames(input)).toBe(expectedResult);
    }
  );
});
