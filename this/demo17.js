function a(a,b) {
  return a+b;
}
let b=10;
console.log(a.call(this,2,5));
console.log(this.b);
