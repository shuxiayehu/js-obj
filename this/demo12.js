let o = {
  v:'hello',
  p:['a1','a2'],
  f:function(){
    let that = this;
    this.p.forEach(
      function(item){
        console.log(that.v+''+item);
      }
    );
  }
};

o.f();
