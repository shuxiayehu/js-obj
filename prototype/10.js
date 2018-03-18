let obj = {};

function f(name) {
  this.name =name;
}

f.call(obj,'pengye');

console.log(obj.name);

console.log(obj);
console.log(Object.getPrototypeOf(obj));
console.log(obj.prototype);
