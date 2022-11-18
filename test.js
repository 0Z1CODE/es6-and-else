let arr = [
  { val: 1, lat: [] },
  { val: 2, lat: ["a", "b", "c"] },
  { val: 3, lat: ["d", "e", "f"] },
  { val: 4, lat: ["g", "h", "i"] },
  { val: 5, lat: ["j", "k", "l"] },
  { val: 6, lat: ["m", "n", "o"] },
  { val: 7, lat: ["p", "q", "r", "s"] },
  { val: 8, lat: ["t", "u", "v"] },
  { val: 9, lat: ["x", "w", "y", "z"] },
];

// function convert(str) {
//   let numsArr = [];
//   for (let i = 0; i < str.length; i++) {
//     let finder = Array.from(str.toLowerCase())[i];
//     for (let j = 0; j < arr.length; j++) {
//       let trueSymb;
//       let iteration = arr[j];
//       let findedVal = iteration.lat.find((x) => x === finder);
//       if (parseInt(finder) === iteration.val) {
//         numsArr.push(parseInt(finder));
//       }
//       if (findedVal !== undefined) {
//         trueSymb = findedVal;
//         numsArr.push(iteration.val);
//       }
//     }
//   }
//   console.log("Готово: ", numsArr.join(""));
// }
// convert("11-Misster");

function convert(str) {
  let nums = [];
  for (let i = 0; i < str.length; i++) {
    let strToArray = Array.from(str.toLowerCase())[i];

    arr.reduce(function (acc, current, index) {
      if (parseInt(strToArray) === current.val) {
        nums.push(parseInt(strToArray));
      }
      if (current.lat.find((x) => x === strToArray)) {
        nums.push(current.val);
      }
    }, 0);
  }

  console.log(nums.join(""));
}

convert("12-arab");
