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

const zipperLists = (head1, head2) => {
  // todo
  let count = 0;
  let tail = head1;
  let current1 = head1.next;
  let current2 = head2;

  while (current1 !== null && current2 !== null) {
    if (count % 2 === 0) {
      tail.next = current2;
      current2 = current2.next;
    } else {
      tail.next = current1;
      current1 = current1.next;
    }
    tail = tail.next;
    count += 1;
  }

  if (current1 != null) tail.next = current1;
  if (current2 != null) tail.next = current2;

  return head1;
};

const mergeLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;

  let dummyHead = new Node(null);
  let tail = dummyHead;

  while (current1 !== null && current2 !== null) {
    if (current1.val < current2.val) {
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }

  if (current1 === null) tail.next = current2;
  if (current2 === null) tail.next = current1;

  return dummyHead.next;
};

const isUnivalueList = (head) => {
  // todo
  let current = head;
  let value = head.val;

  while (current !== null) {
    if (value === current.val) {
      current = current.next;
    } else {
      return false;
    }
  }

  return true;
};
