# phantom-unit [![Build Status](https://secure.travis-ci.org/jlembeck/phantom-unit.png?branch=master)](http://travis-ci.org/jlembeck/phantom-unit)

Test Scripts Written in PhantomJS

## Getting Started
Install the module with: `npm install phantom-unit`

```javascript
var phantom_unit = require('phantom-unit');
phantom_unit.test( "filepath" );
```

## Documentation
phantom-unit is a wrapper around a phantomjs script that borrows syntax from [node-unit](https://github.com/caolan/nodeunit) so you can write tests that work in the phantom runtime.

Current Functionality:

* test.ok( value, message )
* test.equal( actual, expected, message )
* test.notEqual( actual, expected, message )
* test.throws( codeblock, Error Expected, message )
* test.doesNotThrow( codeblock, message )


## Examples
For an example, look [at this test](https://github.com/jlembeck/phantom-unit/blob/master/test/files/test.js)


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2013 Jeffrey Lembeck  
Licensed under the MIT license.
