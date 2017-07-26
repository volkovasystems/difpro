
const assert = require( "assert" );
const difpro = require( "./difpro.js" );

assert.deepEqual( difpro( { "test": "123", "hello": "world" }, { "hello": "world", "apple": "orange" } ),
	[ "test", "apple" ], "should be equal to [ 'test', 'apple' ]" );

let test1 = difpro( { [ Symbol.for( "hello" ) ]: "hello" }, { [ Symbol.for( "hello" ) ]: "hello", [ Symbol.for( "hi" ) ]: "hi" } );
assert.deepEqual( test1, [ Symbol.for( "hi" ) ], "should be equal to [ Symbol.for( 'hi' ) ]" );

console.log( "ok" );
