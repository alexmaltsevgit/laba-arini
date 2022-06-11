import {
  generateIntegerArray,
  generateSorted,
  generateSortedBackwards
} from "../utils/generators.js";
import { testShakerSort } from "./sort.js";

const requiredLengths = [
  100,
  200,
  400,
  800,
  1500,
  2000,
  2500,
  3000,
  3500,
  4000,
];

const runTestCases = (arrayLength) => {
  const results = {
    1: null,
    2: null,
    3: null,
    4: null,
    5: null,
    6: null,
    7: null,
    8: null,
    9: null,
    10: null,
    sorted: null,
    sortedBackwards: null,
  };

  for (let i = 1; i < 11; i++) {
    const array = generateIntegerArray(arrayLength, 0, 100_000);
    results[i] = testShakerSort(array);
  }

  results.sorted = testShakerSort(
    generateSorted(arrayLength, 0, 100_000)
  );

  results.sortedBackwards = testShakerSort(
    generateSortedBackwards(arrayLength, 0, 100_000)
  );

  const average = Object.values(results).reduce((accum, result) => ({
    swapsCount: accum.swapsCount + result.swapsCount,
    comparisonsCount: accum.comparisonsCount + result.comparisonsCount,
  }))

  /* Calculate average */
  average.swapsCount /= Object.keys(results).length;
  average.comparisonsCount /= Object.keys(results).length;

  average.swapsCount = +average.swapsCount.toFixed(2);
  average.comparisonsCount = +average.comparisonsCount.toFixed(2);

  results.average = average;

  /* Meta information */
  results.meta = {};
  results.meta.arrayLength = arrayLength;

  return results;
}

export const runTests = () => requiredLengths.map(length => (
  runTestCases(length)
));
