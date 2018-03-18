let Obj = function(p){
  this.p = p;
};

Obj.prototype.m = function(p){
  return this.p;
};

let o = new Obj('hellow js!');
console.log(o.p);
console.log(o.m('hello'));
