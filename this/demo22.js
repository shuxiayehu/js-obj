let a = ['a', ,'b']

function print ( i) {
  console.log(i);
}

// console.log(a.forEach(print));
console.log(Array.apply(null, a).forEach(print));
