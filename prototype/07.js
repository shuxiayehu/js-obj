function Person(name) {
  this.name = name;
}

console.log(Person.prototype.constructor === Person);
console.log(Person.prototype);
Person.prototype.copy = function () {
  console.log(this);
  return new this.constructor(this.name);
};

let p = new Person('朋也');
let p2 = p.copy()
console.log( );
