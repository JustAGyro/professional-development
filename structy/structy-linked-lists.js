const linkedListValues = (head) => {
  // todo
  const result = [];
  let current = head;

  while (current != null) {
    result.push(current.val);
    current = current.next;
  }
  return result;
};

const sumList = (head) => {
  // todo
  let sum = 0;
  let current = head;

  while (current != null) {
    sum += current.val;
    current = current.next;
  }
  return sum;
};

module.exports = {
  sumList,
};

//recursive
const linkedListFind = (head, target) => {
  // recursive
  if (head === null) return false;
  if (head.val === target) return true;
  return linkedListFind(head.next, target);
};

const linkedListFind2 = (head, target) => {
  // iterative
  let current = head;

  while (current != null) {
    if (current.val === target) return true;
    current = current.next;
  }
  return false;
};
