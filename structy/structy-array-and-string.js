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
