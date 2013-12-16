/*global module:true*/
(function(){
  "use strict";
  var Foo = function( attr ){
    this.attr = attr;
  };

  Foo.prototype.bar = function(){
    this._bar = true;
  };

  Foo.prototype.throwsError = function(){
    throw new Error( "Thrown" );
  };

  module.exports = Foo;
}(typeof exports === 'object' && exports || this));
