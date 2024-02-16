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
