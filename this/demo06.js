let o = {
  f1:function(){
    console.log(this);
    let f2 = function(){
    console.log(this);
    }();
  }
}
o.f1();
