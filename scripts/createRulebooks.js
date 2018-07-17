const { handbooker, } = require( "handbooker" );

// ---------------------------------

const options = {
	debug: true,
	printOptions: {
		displayHeaderFooter: false,
	},
};

const targets = [ 
	"./1-introduction.md", 
	"./2-core-rules.md", 
	"./3-equipment.md", 
	"./4-magic.md", 
	"./5-warbands.md", 
	"./6-optional-rules.md", 
	"./7-hammerheim-mods.md",  
];

// ---------------------------------

handbooker( 
	targets,
	"hammerheim-rules.pdf",
	options, 
);
