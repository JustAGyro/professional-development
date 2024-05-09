var minRemoveToMakeValid = function (s) {
  const stack = [];
  let stringArray = s.split('');

  for (let i = 0; i < stringArray.length; i++) {
    let char = stringArray[i];

    if (char == '(') stack.push(i);
    if (char == ')') {
      if (stack.length) stack.pop();
      else stringArray[i] = '';
    }
  }
  console.log(stack);
  for (let i of stack) {
    stringArray[i] = '';
  }

  return stringArray.join('');
};
