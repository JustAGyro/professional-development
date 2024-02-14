//Solutions to all questions answered in introduction
const greet = (s) => {
  // todo
  return 'hey ' + s;
};

const maxValue = (nums) => {
  // todo
  let currentHighest = nums[0];
  let currentNum;
  for (let i = 0; i < nums.length; i++) {
    currentNum = nums[i];
    if (currentNum > currentHighest) {
      currentHighest = currentNum;
    }
    console.log('currentHighest: ' + currentHighest);
    console.log('currentNum ' + currentNum);
  }

  return currentHighest;
};

const isPrime = (n) => {
  // todo
  if (n === 2) {
    return true;
  } else if (n === 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    let num = i;
    if (n % num === 0) {
      return false;
    }
  }

  return true;
};
