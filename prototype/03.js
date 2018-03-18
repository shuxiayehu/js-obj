function getDefiningObject(obj,propKey) {
  while (obj && !{}.hasOwnProperty.call(obj,propKey)) {
    obj = Object.getPrototypeOf(obj);
  }

  return obj;
}

let a = {};
a.name = 'a';
console.log(getDefiningObject(a,'constructor'));
