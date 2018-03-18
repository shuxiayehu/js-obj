let obj ={};
let f = function(){
  return this;
}

// console.log(f()===this);
console.log(f.call(obj));
console.log(obj);
