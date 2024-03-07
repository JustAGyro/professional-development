// Binary tree solutions
const depthFirstValues = (root) => {
  // todo
  let result = [];
  let stack = [root];

  if (root === null) return [];
  let current = root;

  while (stack.length > 0) {
    current = stack.pop();

    if (current.right != null) stack.push(current.right);
    if (current.left != null) stack.push(current.left);

    result.push(current.val);
  }

  return result;
};

const depthFirstValues1 = (root) => {
  // todo
  if (root === null) return [];
  const leftValues = depthFirstValues(root.left);
  const rightValues = depthFirstValues(root.right);
  return [root.val, ...leftValues, ...rightValues];
};

const breadthFirstValues = (root) => {
  // todo
  if (root === null) return [];
  let result = [];
  let queue = [root];

  while (queue.length > 0) {
    const current = queue.pop();
    result.push(current.val);

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return result;
};

const treeSumDepthIterative = (root) => {
  // todo
  let sum = 0;

  if (root === null) return 0;
  let stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();
    sum += current.val;

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return sum;
};

const treeSumDepthRecursive = (root, sum = 0) => {
  // todo
  if (root === null) return 0;
  const leftValues = treeSum(root.left, sum);
  const rightValues = treeSum(root.right, sum);
  sum += root.val;
  return sum + leftValues + rightValues;
};

const treeSum = (root) => {
  // todo
  if (root === null) return 0;
  let stack = [root];
  let sum = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.left) stack.unshift(current.left);
    if (current.right) stack.unshift(current.right);

    sum += current.val;
  }
  return sum;
};

const treeIncludes = (root, target) => {
  // todo
  let queue = [root];

  if (root === null) return false;

  while (queue.length > 0) {
    const current = queue.pop();

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);

    if (current.val === target) return true;
  }

  return false;
};

const treeMinValue = (root) => {
  // todo
  let min = root.val;
  let stack = [root];

  while (stack.length > 0) {
    const current = stack.pop();

    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);

    if (current.val < min) min = current.val;
  }

  return min;
};

const maxPathSum = (root) => {
  // todo
  if (root === null) return -Infinity;
  if (root.left === null && root.right === null) return root.val;

  const maxChildSum = Math.max(maxPathSum(root.left), maxPathSum(root.right));

  return root.val + maxChildSum;
};

const pathFinder = (root, target) => {
  if (root === null) return null;
  if (root.val === target) return [root.val];

  const leftPath = pathFinder(root.left, target);
  const rightPath = pathFinder(root.right, target);

  if (leftPath !== null) {
    return [root.val, ...leftPath];
  }

  if (rightPath !== null) {
    return [root.val, ...rightPath];
  }

  return null;
};

const treeValueCount = (root, target) => {
  // todo
  if (root === null) return 0;

  let stack = [root];
  let count = 0;

  while (stack.length > 0) {
    const current = stack.pop();
    if (current.val === target) count++;

    if (current.left) stack.push(current.left);
    if (current.right) stack.push(current.right);
  }

  return count;
};

const howHigh = (node) => {
  if (node === null) return -1;

  const leftPath = howHigh(node.left);
  const rightPath = howHigh(node.right);

  return 1 + Math.max(leftPath, rightPath);
};

//first iteration of solution
const bottomRightValue = (root) => {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    const current = queue.pop();
    result.push(current.val);

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);
  }

  return result[result.length - 1];
};

//second solution why am i so dumb lol
const bottomRightValue2 = (root) => {
  let queue = [root];
  let result = [];

  while (queue.length > 0) {
    const current = queue.pop();
    result.push(current.val);

    if (current.left) queue.unshift(current.left);
    if (current.right) queue.unshift(current.right);

    if (queue.length === 0) return current.val;
  }

  // return result[result.length-1]
};
