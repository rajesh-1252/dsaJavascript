const permutation = (p, up) => {
  if (up.length === 0) {
    console.log(p);
    return;
  }

  let ch = up.charAt(0);

  for (let i = 0; i < p.length + 1; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    permutation(f + ch + s, up.substring(1));
  }
};
const permutationReturn = (p, up) => {
  let arr = [];
  if (up.length === 0) {
    arr.push(p);
    return arr;
  }

  let ch = up.charAt(0);

  for (let i = 0; i < p.length + 1; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    let ansFromPrevCall = permutationReturn(f + ch + s, up.substring(1));
    arr.push(...ansFromPrevCall);
  }
  return arr;
};
// console.log(permutationReturn("", "abc"));
// let str = "abc";
// console.log(str.substring(1, 3));

const permutationCount = (p, up) => {
  let count = 0;
  if (up.length === 0) {
    return 1;
  }

  let ch = up.charAt(0);
  for (let i = 0; i < p.length + 1; i++) {
    let f = p.substring(0, i);
    let s = p.substring(i, p.length);
    count += permutationCount(f + ch + s, up.substring(1));
  }
  return count;
};

// console.log(permutationCount("", "abc"));

// let str = "123";

// let dfas = str.charAt(0) - "0";
// console.log(str.charCodeAt(1));
// console.log(typeof dfas, dfas);

const phonePad = (p, up) => {
  let arr = [];
  if (up.length === 0) {
    // console.log(p);
    arr.push(p);
    return arr;
  }

  //   let digit = up.charAt(0) - "0";
  let digit = up.charAt(0);

  for (let i = (digit - 1) * 3; i < digit * 3; i++) {
    let ch = String.fromCharCode(97 + i);
    let ansFromBellowcalls = phonePad(p + ch, up.substring(1));
    arr.push(...ansFromBellowcalls);
  }
  return arr;
};

// console.log(phonePad("", "12"));

const dice = (p, target) => {
  if (target == 0) {
    console.log(p);
    return;
  }
  for (let i = 1; i <= 6 && i <= target; i++) {
    dice(p + i, target - i);
  }
};

dice("", 4);
