let MyArray = function () {

};

MyArray.prototype = new Array();
MyArray.prototype.constructor = MyArray;

let mine = new MyArray();
mine.push(1,2,3);

console.log(mine.length);
console.log(mine instanceof Array);
