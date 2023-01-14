const subset = (str, target) => {
  if (str.length === 0) {
    return "";
  }

  let ch = str.charAt(0);

  if (ch === target) {
    return subset(str.substring(1), target);
  } else {
    return ch + subset(str.substring(1), target);
  }
};
// console.log(subset("adfads", "a"));

const skipTarget = (str, target) => {
  if (str.length === 0) {
    return "";
  }
  if (str.startsWith(target) && !str.startsWith("rajesh")) {
    return skipTarget(str.substring(target.length), target);
  } else {
    return str.charAt(0) + skipTarget(str.substring(1), target);
  }
};

// console.log(skipTarget("madhanrajesh", "raj"));

// subseq for strings

const subseq = (p, up) => {
  if (up.length === 0) {
    console.log(p);
    return;
  }
  let ch = up.charAt(0);
  subseq(p + ch, up.substring(1));
  subseq(p, up.substring(1));
};
// subseq("", "abc");

// retturn array
const subseqPassInBody = (p, up) => {
  let list = [];
  if (up.length === 0) {
    list.push(p);
    return list;
  }
  let ch = up.charAt(0);

  let left = subseqPassInBody(p + ch, up.substring(1));
  let right = subseqPassInBody(p, up.substring(1));

  // list.push(...left, ...right);
  left.push(...right);
  return left;
};
// subseqPassInBody("", "abc");
// console.log(subseqPassInBody("", "abc"));

// setset without recursion iterative way ;

const subset1 = (arr) => {
  let outer = [];

  outer.push([]);
  for (item of arr) {
    let n = outer.length;
    for (i = 0; i < n; i++) {
      let inner = [outer[i]];
      inner.push(item);
      outer.push(inner);
    }
  }
  return outer;
};
let ans = subset1([1, 2, 3]);

// for (item of ans) {
// console.log(item);
// }
// practice

// problem to form subset from 'abc'

//            a / bc                              ''/bc
//     ab / c              a / c               b/c            ''/c
// abc / ''   ab / ""

const subseq1 = (p, up) => {
  let arr = [];
  if (up.length === 0) {
    if (p === "") {
      return arr;
    }
    arr.push(p);
    return arr;
  }
  let ch = up.charAt(0);

  arr.push(...subseq1(p + ch, up.substring(1)));
  arr.push(...subseq1(p, up.substring(1)));
  return arr;
};
// console.log(subseq1("", "abc"));

const fibo = (n) => {
  if (n < 2) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
};

// console.log(fibo(7));

// permutation problem ;

const permutation = (p, up) => {
  if (up.length === 0) {
    console.log(p);
    return;
  }
  let ch = up.charAt(0);
  for (let i = 0; i < p.length + 1; i++) {
    // this will tell us at which place to add ch
    let f = p.substring(0, i);
    let l = p.substring(i, p.length);
    permutation(f + ch + l, up.substring(1));
  }
};
// permutation("", "abc");
let str = "abc";
