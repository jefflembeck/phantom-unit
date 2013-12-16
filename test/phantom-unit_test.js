/*global require:true*/
(function( exports ){
  'use strict';

  var phantom_unit = require('../lib/phantom-unit.js');

  /*
    ======== A Handy Little Nodeunit Reference ========
    https://github.com/caolan/nodeunit

    Test methods:
      test.expect(numAssertions)
      test.done()
    Test assertions:
      test.ok(value, [message])
      test.equal(actual, expected, [message])
      test.notEqual(actual, expected, [message])
      test.deepEqual(actual, expected, [message])
      test.notDeepEqual(actual, expected, [message])
      test.strictEqual(actual, expected, [message])
      test.notStrictEqual(actual, expected, [message])
      test.throws(block, [error], [message])
      test.doesNotThrow(block, [error], [message])
      test.ifError(value)
  */

  exports.test = {
    setUp: function(done) {
      // setup here
      done();
    },
    'no args': function(test) {
      test.expect(1);
      // tests here
      test.throws(function(){
        phantom_unit.test();
      }, 'Filename must be passed in', 'Should throw error with no args');
      test.done();
    },
    'file does not exist': function( test ){
      test.expect(1);
      test.throws(function(){
        phantom_unit.test( "file" );
      }, 'File must exist', "Should throw an error if the file doesn't exist" );
      test.done();
    },
    'file exists and can be run':function( test ){
      test.expect( 3 );
      phantom_unit.test( "test/files/test.js", function( err, stdout, stderr ){
        test.ok( !err, err );
        test.ok( !stderr, stderr  );
        test.ok( stdout, "No errors" );
        test.done();
      });
    }
  };
}(typeof exports === 'object' && exports || this));
