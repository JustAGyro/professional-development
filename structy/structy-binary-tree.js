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
