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

const getNodeValue = (head, index) => {
  // todo
  let current = head;
  let counter = 0;
  while (current != null) {
    if (index === counter) return current.val;
    current = current.next;
    counter++;
  }
  return current;
};

const reverseList = (head) => {
  // todo
  let current = head;
  let prev = null;
  let next = current.next;

  while (current != null) {
    next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
};
