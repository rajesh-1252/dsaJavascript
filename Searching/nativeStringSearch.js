const nativeStringSearch = (string, short) => {
  let matches = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; i < short.length; i++) {
      if (short[j] !== string[i + j]) {
        console.log("break");
        break;
      }

      if (j === short.length - 1) {
        matches++;
      }
    }
  }
  return matches;
};

console.log(nativeStringSearch("hahaadfahaha", "haha"));
