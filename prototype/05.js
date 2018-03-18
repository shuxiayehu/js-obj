function F() {

};

let f = new F();
console.log(f.constructor === F);
console.log(f.constructor === RegExp);
