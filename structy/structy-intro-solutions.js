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

const uncompress = (s) => {
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  let num = '';
  let newString = '';
  let uncompressed = '';

  while (j < s.length) {
    let cIndex = s[j];

    if (numbers.includes(cIndex)) {
      num += cIndex;
    }

    if (!numbers.includes(cIndex)) {
      newString = cIndex.repeat(num);
      uncompressed += newString;
      i = j;
      num = '';
    }

    j++;
  }
  return uncompressed;
};
