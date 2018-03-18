let obj = {
  foo:function(){
    console.log(this);
  }
};
// (1,obj.foo)();
// obj.foo() ;
// (false || obj.foo)()
// (obj.f = obj.foo)();
// ( || obj.foo)()
(1, obj.foo)()
