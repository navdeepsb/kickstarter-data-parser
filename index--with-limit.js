/**
 * @author Navdeep
 *   @desc This program reads a big JSON file using streams
 *         and then appends the new schema into a new file.
 */


// ...
const fs = require( "fs" );
const es = require( "event-stream" );
const JSONStream = require( "JSONStream" );
const SRC = "./data/simple-sample.json";
const LIMIT = 5; // how many first-n records to fetch before aborting (-1 == no limit)


// ...
let num = 0;
let isFirst = true;
let rStream = fs.createReadStream( SRC, { encoding: "utf-8" } );
let wStream = fs.createWriteStream( SRC.split( ".json" )[ 0 ] + ".min.json", { encoding: "utf-8" } );

wStream
	.write( "[" );

rStream
	// `null` if the file is newline-delimited, `*` if the file is a valid json
	.pipe( JSONStream.parse( null ) )
	.pipe( es.mapSync( ( d ) => {
		if( num == LIMIT ) {
			throw new Error();
		}
		console.log( `Processed datum #${ ++num }` );
		wStream.write( ( isFirst ? "" : "," ) + JSON.stringify( d ) );
		isFirst = false;
	}))
	.on( "end", () => { wStream.write( "]" ) })
	.on( "error", () => { wStream.write( "]" ) })
	.on( "close", () => { console.log( "Finished..." ) });

console.log( "Started..." );