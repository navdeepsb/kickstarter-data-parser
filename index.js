/**
 * @author Navdeep
 *   @desc This program reads a big JSON file using streams
 *         and then appends the new schema into a new file.
 */


// ...
const fs = require( "fs" );
const es = require( "event-stream" );
const JSONStream = require( "JSONStream" );
const SRC = "./data/kickstarter-main-2018-01.json";


// ...
let num = 0;
let isFirst = true;
let rStream = fs.createReadStream( SRC, { encoding: "utf-8" } );
let wStream = fs.createWriteStream( SRC.split( ".json" )[ 0 ] + ".min.json", { encoding: "utf-8" } );

wStream
	.write( "[" );

rStream
	.pipe( JSONStream.parse( null ) ) // `null` if the file is newline-delimited, `*` is the file is a valid json
	.pipe( es.mapSync( ( d ) => {
		console.log( `Processed datum #${ ++num }` );
		wStream.write( ( isFirst ? "" : "," ) + JSON.stringify({
			id: d.data.id,
			name: d.data.name,
			slug: d.data.slug,
			blurb: d.data.blurb,
			goal: d.data.goal,
			pledged: d.data.pledged,
			state: d.data.state,
			curr: d.data.currency,
			current_curr: d.data.current_currency,
			created_at: d.data.created_at,
			launched_at: d.data.launched_at,
			deadline: d.data.deadline,
			spotlight: d.data.spotlight,
			staff_pick: d.data.staff_pick,
			is_starrable: d.data.is_starrable,
			backers_count: d.data.backers_count,
			profile_status: d.data.profile.state,
			category: d.data.category.name,
			photo: d.data.photo.full,
			location: {
				name: ( d.data.location || {} ).name || null,
				state: ( d.data.location || {} ).state || null,
				country: ( d.data.location || {} ).country || null
			},
			creator: {
				id: d.data.creator.id,
				name: d.data.creator.name,
				avatar: d.data.creator.avatar.small
			}
		}));
		isFirst = false;
	}))
	.on( "end", () => { wStream.write( "]" ) })
	.on( "close", () => { console.log( "Finished..." ) });

console.log( "Started..." );