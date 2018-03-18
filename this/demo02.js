function f(){
  return '姓名：'+name;
  // return name;
};

let A ={
  name:'pengye'
};

let B = {
  name:'朋也'
};

let name='湫朋';

this.f=f;
A.f=f;
B.f=f;

console.log(A.f());
console.log(B.f());
