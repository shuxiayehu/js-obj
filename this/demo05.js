let a = {
  p:'hellow',
  b:{
    m:function(){
      console.log(this);
    }
  }
};

a.b.m();
