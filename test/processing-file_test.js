/*global require:true*/
(function( exports ){
	"use strict";

	var Pfile = require( '../../lib/processing-file' );

	exports.constructor = {
		setup: function(){
			this.pfile = new Pfile( "test/file/bear.svg" );
		},
		teardown: function( done ){
			done();
		},
		'constructor': function( test ){
			test.equal( this.pfile.filename, "bear.svg", "The file should be named bear.svg" );
			test.equal( this.pfile.pathdir, "test/file", "The pathdir isn't correct" );
			test.ok( this.pfile.isSvg, "It's supposed to be an svg" );
			test.equal( this.pfile.filenamenoext, "bear", "The filenamenoext should be bear" );
		}
	};

}(typeof exports === 'object' && exports || this));
