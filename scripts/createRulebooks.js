const { handbooker, } = require( "handbooker" );

// ---------------------------------

const options = {
	debug: true,
	printOptions: {
		displayHeaderFooter: false,
	},
};

const targets = [ 
	"1-introduction.md",
	"2-core-rules.md",

	"./3-warbands/3-warbands.md",
	"./3-warbands/battle-monks-of-cathay.md",
	"./3-warbands/beastmen-raiders.md",
	"./3-warbands/blood-dragon-knights.md",
	"./3-warbands/brettonians.md",
	"./3-warbands/carnival-of-chaos.md",
	"./3-warbands/clan-eshin.md",
	"./3-warbands/clan-moulder.md",
	"./3-warbands/clan-pestilens.md",
	"./3-warbands/clan-skyre.md",
	"./3-warbands/cult-of-khaine.md",
	"./3-warbands/cult-of-the-possessed.md",
	"./3-warbands/dark-elf-corsairs.md",
	"./3-warbands/dwarf adventurers.md",
	"./3-warbands/greenskins.md",
	"./3-warbands/halflings.md",
	"./3-warbands/highelves.md",
	"./3-warbands/hochland.md",
	"./3-warbands/kislevites.md",
	"./3-warbands/lahmian-vampires.md",
	"./3-warbands/marauders-of-chaos.md",
	"./3-warbands/mercenaries.md",
	"./3-warbands/nightgoblins.md",
	"./3-warbands/nordlanders.md",
	"./3-warbands/norse-warbands.md",
	"./3-warbands/nuln-engineers.md",
	"./3-warbands/ostlanders.md",
	"./3-warbands/pit-fighters.md",
	"./3-warbands/restless-dead.md",
	"./3-warbands/sisters-of-sigmar.md",
	"./3-warbands/tilean.md",
	"./3-warbands/von-carsteins.md",
	"./3-warbands/witch-hunters.md",
	"./3-warbands/wood-elves.md",

	"4-injuries-income-and-experience.md",
	"5-equipment.md",
	"6-skills.md",
	"7-magic.md",
	"8-scenarios.md",
	"9-optional-rules.md",
	"10-reference-sheet.md",
];

// ---------------------------------

handbooker( 
	targets,
	"hammerheim-rules.pdf",
	options, 
);
