let counter = {
  count:0
};

counter.inc = function(){
  'use strict';
  this.count++
};

let f = counter.inc;
// f();
counter.inc();
