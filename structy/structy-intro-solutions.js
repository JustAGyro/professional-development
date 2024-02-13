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
