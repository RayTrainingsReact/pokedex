import each from "jest-each";
import { calculateOffset, calculateLastPage } from "./pagination-utils.js";

describe("calculateOffset", () => {
  each`
     input     | expectedResult
     ${5}   | ${250}
     ${10}   | ${500}
     ${55}   | ${2750}
     ${null}    | ${0}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(calculateOffset(input)).toBe(expectedResult);
    }
  );
});

describe("calculateLastPage", () => {
  each`
     input     | expectedResult
     ${100}   | ${2}
     ${900}   | ${18}
     ${55}   | ${1}
     ${null}    | ${0}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(calculateLastPage(input)).toBe(expectedResult);
    }
  );
});
