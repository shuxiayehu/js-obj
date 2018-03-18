let f = function(){
  return this;
};

console.log(f.call(3));
