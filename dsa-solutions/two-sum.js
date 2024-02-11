var twoSum = function (nums, target) {
  if (nums.length === 2) return [0, 1];
  for (let i = 0; i < nums.length - 1; i++) {
    otherNum = target - nums[i];
    sumNum = nums.indexOf(otherNum, i + 1);
    if (sumNum != i && sumNum != -1) return [i, sumNum];
  }
};
