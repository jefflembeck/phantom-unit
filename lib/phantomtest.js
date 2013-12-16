/*global require:true*/
/*global phantom:true*/
/*global console:true*/
(function(){
  "use strict";
  var system = require( 'system' );

  var pass = function(){
      system.stdout.write( "." );
    },
    fail = function( message ){
      system.stderr.write( "F" );
      if( message ){
        system.stderr.writeLine( " " + message );
      }
      phantom.exit( 1 );
    },
    counter = 0;

  var Qualifications = {
    ok: function( param, message ){
      if( param ){
        pass();
      } else {
        fail( message );
      }
    },
    equal: function( actual, expected, message ){
      if( actual === expected ){
        pass();
      } else {
        fail( message );
      }
    },
    notEqual: function(actual, expected, message){
      if( actual !== expected ){
        pass();
      } else {
        fail( message );
      }
    }
  };

  var TestFile = require( phantom.args[0] );

  var tests = Object.keys( TestFile );
  tests.forEach( function( context ){
    console.log( "Running Context: " + context );
    var tc = TestFile[ context ];
    var contextTests = Object.keys( tc );

    if( tc.setup ) {
      tc.setup();
    }

    contextTests.forEach( function( t ){
      if( t !== "setup" && t !== "teardown" ){
        console.log( "Running test: " + t );
        try {
          tc[ t ]( Qualifications );
        } catch( e ) {
          system.stderr.writeLine( e );
          phantom.exit();
        }
        counter++;
      }
    });

    system.stdout.writeLine( ">> " + counter + " assertions passed" );
    if( tc.teardown ){
      tc.teardown( phantom.exit );
    }

  });

  phantom.exit();

}(typeof exports === 'object' && exports || this));