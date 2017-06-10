
const assert = require( "assert" );
const difpro = require( "./difpro.js" );

assert.deepEqual( difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } ),
	[ "test", "apple" ], "should be deeply equal" );

let test1 = difpro( { [ Symbol.for( "hello" ) ]: "hello" }, { [ Symbol.for( "hello" ) ]: "hello", [ Symbol.for( "hi" ) ]: "hi" } );
assert.deepEqual( test1, [ Symbol.for( "hi" ) ], "should be deeply equal" );

console.log( "ok" );
