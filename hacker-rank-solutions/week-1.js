function plusMinus(arr) {
  const length = arr.length;

  let positive = [];
  let negative = [];
  let zero = [];

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < 0) {
      negative.push(current);
    } else if (current > 0) {
      positive.push(current);
    } else {
      zero.push(current);
    }
  }

  const pRatio = (positive.length / length).toFixed(5);
  const nRatio = (negative.length / length).toFixed(5);
  const zRatio = (zero.length / length).toFixed(5);

  console.log(pRatio);
  console.log(nRatio);
  console.log(zRatio);
}

function miniMaxSum(arr) {
  // Write your code here
}

// function timeConversion(s) {
//   // Write your code here
// }

// function breakingRecords(scores) {
//   // Write your code here
// }

// function processData(input) {
//   //Enter your code here
// }
