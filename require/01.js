var module ={
  exports:{}
};

(function (module,exports) {
  exports.multipl = function (n) {
    return n*1000;
  }
}(module,module.exports))

var f = module.exports.multiply();
f(5);
