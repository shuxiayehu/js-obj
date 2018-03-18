function P() {

};

let p = new P();
p.name = 'a';
console.log(p.constructor);
console.log(p.constructor === P.prototype.constructor);

console.log(p.hasOwnProperty('constructor'));
