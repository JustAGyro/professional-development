const uncompress = (s) => {
  const numbers = '0123456789';
  let i = 0;
  let j = 0;
  let num = '';
  let newString = '';
  let uncompressed = '';

  while (j < s.length) {
    let cIndex = s[j];

    if (numbers.includes(cIndex)) {
      num += cIndex;
    }

    if (!numbers.includes(cIndex)) {
      newString = cIndex.repeat(num);
      uncompressed += newString;
      i = j;
      num = '';
    }

    j++;
  }
  return uncompressed;
};

const compress = (s) => {
  // todo
  let compressed = '';
  let i = 0;
  let j = 1;

  while (j <= s.length) {
    let cIndex = s[i];
    let nIndex = s[j];

    if (cIndex != nIndex) {
      let sliced = s.slice(i, j);

      if (sliced.length > 1) {
        compressed += sliced.length + cIndex;
      } else if (sliced.length === 1) {
        compressed += cIndex;
      }

      i = j;
    }

    j++;
  }

  return compressed;
};

const anagrams = (s1, s2) => {
  // todo
  const objS1 = {};
  const objS2 = {};

  if (s1.length != s2.length) {
    return false;
  }

  for (let i = 0; i < s1.length; i++) {
    let index = s1[i];
    if (!objS1[index]) {
      objS1[index] = 1;
    }
    if (objS1[index]) {
      objS1[index] += 1;
    }
  }

  for (let i = 0; i < s2.length; i++) {
    let index = s2[i];
    if (!objS2[index]) {
      objS2[index] = 1;
    }
    if (objS2[index]) {
      objS2[index] += 1;
    }
  }

  for (key in objS2) {
    if (objS2[key] != objS1[key]) {
      return false;
    }
  }

  return true;
};
