function tmp(){
  console.log(this);
};

let o = {
  f1:function(){
    console.log(this);
    let f2 = tmp();
  }
};

o.f1();
