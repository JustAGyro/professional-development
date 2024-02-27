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