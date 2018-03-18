let n = 123;
let obj = {n:456};

function a(){
 return this.n;
};
let value = a.call({});

console.log(value);
