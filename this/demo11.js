let o = {
  v:'hello',
  p:['a1','a2'],
  f:function(){
    this.p.forEach(
      function(item){
        console.log(this.v + ''+item);
      }
    );
  }
}
o.f();
