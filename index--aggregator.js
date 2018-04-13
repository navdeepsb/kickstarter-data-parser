/**
 * @author Navdeep
 *   @desc This program reads a big JSON file using streams
 *         and then appends the new schema into a new file.
 */


// ...
const fs = require( "fs" );
const es = require( "event-stream" );
const JSONStream = require( "JSONStream" );
const SRC = "./data/final-data-evan.json"; // file name relative to this file
const LIMIT = -1; // how many first-n records to fetch before aborting (-1 == no limit)
const FILE_DESCRIPTOR = "*" // `null` for a JSON stream, `"*"` for a JSON array
const KEY_TO_AGGR = "category_name";


// ...
let num = 0;
let rStream = fs.createReadStream( SRC, { encoding: "utf-8" } );
let val = null;
let dict = {};

rStream
	.pipe( JSONStream.parse( FILE_DESCRIPTOR ) )
	.pipe( es.mapSync( ( d ) => {
		if( num == LIMIT ) {
			throw new Error();
		}
		console.log( `Processed datum #${ ++num }` );

		val = d[ KEY_TO_AGGR ];
		if( !dict.hasOwnProperty( val ) ) {
			dict[ val ] = 1;
		}
		dict[ val ] += 1;
	}))
	.on( "error", () => { rStream.close(); console.log( "\n", dict ) })
	.on( "close", () => { console.log( "Finished..." ); console.log( "\n", dict ) });

console.log( "Started..." );