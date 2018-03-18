function Person(name) {
  this.name = name;
};
console.log(Person.prototype);
console.log(Person.prototype.constructor);
Person.prototype.copy = function () {
  return new this.constructor(this.name);
};
Person.prototype = {
  method: function(){}
};

console.log(Person.prototype);

let p1 = new Person;
p1.copy();
