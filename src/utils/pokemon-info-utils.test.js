import each from "jest-each";
import {
  getProperty,
  getWeightKg,
  getHeightMeters,
  zeroPad
} from "./pokemon-info-utils";

describe("zeroPad", () => {
  each`
     id  		| numberZeroes 	|expectedResult
     ${8}   	| 	${2}		|${"08"}
     ${1}   	| 	${8}		|${"00000001"}
     ${500}   	| 	${4}		|${"0500"}
     ${2}    	| 	${undefined}|${"002"}
   `.test(
    "padding $numberZeroes zeroes to $id to $expectedResult",
    ({ id, numberZeroes, expectedResult }) => {
      expect(zeroPad(id, numberZeroes)).toBe(expectedResult);
    }
  );
});

describe("getWeightKg", () => {
  each`
     input     | expectedResult
     ${80}   | ${"8kg"}
     ${10}   | ${"1kg"}
     ${55}   | ${"5.5kg"}
     ${null}    | ${"0kg"}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(getWeightKg(input)).toBe(expectedResult);
    }
  );
});

describe("getHeightMeters", () => {
  each`
     input     | expectedResult
     ${80}   | ${"8m"}
     ${10}   | ${"1m"}
     ${55}   | ${"5.5m"}
     ${null}    | ${"0m"}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, expectedResult }) => {
      expect(getHeightMeters(input)).toBe(expectedResult);
    }
  );
});

describe("getProperty", () => {
  const inputs = [
    [
      { name: { name: "bird" } },
      { name: { name: "bird" } },
      { name: { name: "bird" } }
    ],
    [{ pop: { name: "2" } }, { pop: { name: "3" } }],
    [{ cal: { name: "cal" } }]
  ];
  each`
  	 input  		| property 		|expectedResult
     ${inputs[0]}	| 	${"name"}	|${"bird, bird, bird"}
     ${inputs[1]}   | 	${"pop"}	|${"2, 3"}
     ${inputs[2]}   | 	${"cal"}	|${"cal"}
   `.test(
    "calculate $input to $expectedResult",
    ({ input, property, expectedResult }) => {
      expect(getProperty(input, property)).toBe(expectedResult);
    }
  );
});
