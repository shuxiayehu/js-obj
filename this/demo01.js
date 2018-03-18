// 对象的属性是可以赋给其他对象的
let A = {
  name:'pengye',
  des:function(){
    return '姓名：'+this.name;
  }
}

var B = {
  name:'朋也'
};
B.dess = A.des;
 console.log(B.dess());
