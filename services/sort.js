import { ArrayItemsSwapper, Comparator } from "../utils/sort-utils.js";

export const testShakerSort = (array) => {
  const arrayItemsSwapper = new ArrayItemsSwapper(array);
  const comparator = new Comparator();

  let start = 0;
  let end = array.length;
  let isSwapped = true;

  while (comparator.isEqual(isSwapped, true)) {
    isSwapped = false;
    for (let i = start; comparator.leftIsLess(i, end - 1); i++) {
      if (comparator.leftIsLarge(array[i], array[i + 1])) {
        arrayItemsSwapper.swap(i, i + 1);
        isSwapped = true;
      }
    }

    end--;
    if (comparator.isEqual(isSwapped, false))
      break;

    isSwapped = false;
    for (let i = end - 1; comparator.leftIsLarge(i, start); i--) {
      if (comparator.leftIsLarge(array[i - 1], array[i])) {
        arrayItemsSwapper.swap(i - 1, i);
        isSwapped = true;
      }
    }

    start++;
  }

  return {
    swapsCount: arrayItemsSwapper.countSwaps(),
    comparisonsCount: comparator.countComparisons(),
  };
};
