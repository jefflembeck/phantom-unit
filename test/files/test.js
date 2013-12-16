/*global require:true*/
(function( exports ){

  "use strict";
  var Lib = require( './test-lib.js' );

  exports.constructor = {
    setup: function(){
      this.lib = new Lib("hi");
    },
    teardown: function( done ){
      done();
    },
    'constructor': function( test ){
      test.ok( this.lib, "Library should be defined" );
      test.equal( this.lib.attr, "hi", "Attr should be set" );
    },
    'bar': function( test ){
      test.ok( !this.lib._bar, "Should not be set yet" );
      this.lib.bar();
      test.ok( this.lib._bar, "Should now be set" );
    },
    'throws': function( test ){
      var self = this.lib;
      test.throws(function(){
        self.throwsError();
      }, new Error( "Thrown" ) , "Should throw an error" );
    }

  };

}(typeof exports === 'object' && exports || this));
