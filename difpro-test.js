
const assert = require( "assert" );
const difpro = require( "./difpro.js" );

assert.deepEqual( difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } ),
	[ "test", "apple" ], "should be deeply equal" );

console.log( "ok" );
