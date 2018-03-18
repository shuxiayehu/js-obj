function Cat() {
  this.meow = function () {
    console.log('喵喵');
  };
}
cat1.meov();
let cat1 = new Cat();
let cat2 = new Cat();
let cat3 = new Cat.prototype.constructor();
console.log(cat1.meow===cat2.meow);
console.log(Cat.prototype);
console.log(cat3);
console.log(cat1.constructor.name);

let b = {};
console.log(b.constructor.name);
console.log(cat1 instanceof Object);
