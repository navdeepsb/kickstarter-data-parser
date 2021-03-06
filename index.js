/**
 * @author Navdeep
 *   @desc This program reads a big JSON file using streams
 *         and then appends the new schema into a new file.
 */


// ...
const fs = require( "fs" );
const es = require( "event-stream" );
const JSONStream = require( "JSONStream" );


// ...
// Modify below attributes to change the output...
const SRC = "./data/final-data-evan-stream.json"; // file name relative to this file
const LIMIT = -1; // how many first-n records to fetch before aborting (-1 == no limit)
const FILE_DESCRIPTOR = null; // `null` for a JSON stream, `"*"` for a JSON array
const OUTPUT_AS_JSON_STREAM = false; // #selfdescriptivevariablename


// ...
let num = 0;
let isFirst = true;
let rStream = fs.createReadStream( SRC, { encoding: "utf-8" } );
let wStream = fs.createWriteStream( SRC.split( ".json" )[ 0 ] + ".min.json", { encoding: "utf-8" } );


// ...
const masterCategoryMap = JSON.parse( fs.readFileSync( "./categories.map.json", "utf-8" ) );
const getMasterCategory = ( cat ) => {
	let masterCat = null;

	try {
		Object.keys( masterCategoryMap ).forEach( ( k ) => {
			if( masterCategoryMap[ k ].indexOf( cat ) >= 0 ) {
				masterCat = k;
				throw new Error();
			}
		});
	} catch( ex ) {}

	return masterCat;
};


// ...
wStream
	.write( OUTPUT_AS_JSON_STREAM ? "" : "[" );

rStream
	.pipe( JSONStream.parse( FILE_DESCRIPTOR ) )
	.pipe( es.mapSync( ( d ) => {
		if( num == LIMIT ) {
			throw new Error();
		}
		console.log( `Processed datum #${ ++num }` );
		wStream.write( ( isFirst ? "" : OUTPUT_AS_JSON_STREAM ? "\n" : "," ) + JSON.stringify({
			"id": d.id,
			"name": d.name,
			"state": d.state,
			"category_name": d.category_name,
			"master_category_name": d.master_category_name || getMasterCategory( d.category_name ),
			"category_id": d.category_id,
			"location_state": d.location_state,
			"create_date": d.create_date,
			"launch_date": d.launch_date,
			"state_change": d.state_change,
			"deadline_at": d.deadline_at,
			"location_id": d.location_id,
			"goal": d.goal,
			"pledged": d.pledged,
			"perc_pledged": ( Math.round( d.pledged / d.goal * 10000  ) / 10000 ) * 100,
			"backers_count": d.backers_count,
			"launched_to_deadline_days": d.launched_to_deadline_days,
			"blurb": d.blurb,
			"score": d.score,
			"creator_id": d.creator_id,
			"slug": d.slug
		}) );
		isFirst = false;
	}))
	.on( "end",   () => { wStream.write( OUTPUT_AS_JSON_STREAM ? "" : "]" ) })
	.on( "error", () => { wStream.write( OUTPUT_AS_JSON_STREAM ? "" : "]" ); rStream.close() })
	.on( "close", () => { console.log( "Finished..." ) });

console.log( "Started..." );