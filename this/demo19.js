let obj = {};
obj.name='pengye';

obj.hasOwnProperty = function(){
  return '重新定义方法';
};
console.log(obj.hasOwnProperty('toString'));

console.log(Object.prototype.hasOwnProperty.call(obj,'toString'));
