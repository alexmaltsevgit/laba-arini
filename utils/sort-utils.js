export class ArrayItemsSwapper {
  #swapsCount = 0;

  countSwaps = () => this.#swapsCount;

  constructor(array) {
    this.array = array;
  }

  swap = (leftIdx, rightIdx) => {
    const tmp = this.array[leftIdx];
    this.array[leftIdx] = this.array[rightIdx];
    this.array[rightIdx] = tmp;

    this.#swapsCount++;
  }
}

export class Comparator {
  #comparisonsCount = 0;

  countComparisons = () => this.#comparisonsCount;

  #compare = (comparisonFunction) => {
    this.#comparisonsCount++;
    return comparisonFunction();
  }

  leftIsLarge = (left, right) => this.#compare(() => left > right);

  leftIsLess = (left, right) => this.#compare(() => left < right);

  isEqual = (left, right) => this.#compare(() => left == right);

  isEqualStrict = (left, right) => this.#compare(() => left === right);
}
