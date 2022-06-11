import { getRandomInt } from "./utils.js";

export const generateIntegerArray = (
  length,
  minArrayNumber,
  maxArrayNumber,
) => Array.from({ length}, () => (
    getRandomInt(minArrayNumber, maxArrayNumber)
  )
);

export const generateSorted = (...args) => (
  generateIntegerArray(...args).sort()
);

export const generateSortedBackwards = (...args) => (
  generateIntegerArray(...args).sort().reverse()
);
