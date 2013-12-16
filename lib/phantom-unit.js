/*
 * phantom-unit
 * https://github.com/jlembeck/phantom-unit
 *
 * Copyright (c) 2013 Jeffrey Lembeck
 * Licensed under the MIT license.
 */
/*global require:true*/
/*global console:true*/
/*global __dirname:true*/
(function(exports){
  'use strict';

  var phantomJsPath = require('phantomjs').path;
  var path = require( 'path' );
  var fs = require( 'fs' );
  var execFile = require( 'child_process' ).execFile;

  exports.awesome = function() {
    return 'awesome';
  };

  exports.test = function( f, callback ){
    var file, testscript;

    if( typeof f !== "string" ){
      throw new Error( "Filename must be passed in" );
    }

    file = path.resolve( f );
    if( !fs.existsSync( file ) ){
      throw new Error( "File must exist" );
    }

    testscript = path.resolve( path.join( __dirname, 'phantomtest.js' ) );
    console.log( phantomJsPath );
    console.log( testscript, file );
    execFile( phantomJsPath, [testscript, file], function( err, stdout, stderr ){
      if( stdout ){
        console.log( stdout );
      }
      if( stderr ){
        console.error( stderr );
      }
      if( callback ){
        callback( err, stdout, stderr );
      }
    });
  };
}(typeof exports === 'object' && exports || this));

