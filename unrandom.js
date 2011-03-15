(function() {
  var Unrandom, oldrandom, sys;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  sys = require('sys');
  oldrandom = Math.random;
  Unrandom = (function() {
    function Unrandom(buffer) {
      this.buffer = buffer;
      this.random = __bind(this.random, this);;
      this.buffer || (this.buffer = []);
      this.history = [];
    }
    Unrandom.prototype.random = function() {
      var num;
      num = this.buffer.shift() || oldrandom();
      this.history.push(num);
      return num;
    };
    return Unrandom;
  })();
  exports.Unrandom = Unrandom;
}).call(this);
