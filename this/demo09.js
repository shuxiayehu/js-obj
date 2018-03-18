let o ={
  f1:function(){
    console.log(this);
    let that = this;
    let f2 = function(){
      console.log(that);
    }();
  }
};

o.f1();
