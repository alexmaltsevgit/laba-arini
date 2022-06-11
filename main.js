import { runTests } from "./services/tests.js";

const results = runTests();

results.forEach((result) => {
  console.log(
    `%c -------- Длина последовательности: ${result.meta.arrayLength} --------`,
    "font-size: 24px"
  );

  delete result.meta;

  console.table(result);
});
