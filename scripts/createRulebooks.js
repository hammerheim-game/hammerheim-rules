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
	"./3-warbands/averlanders.md",
	"./3-warbands/beastmen-raiders.md",
	"./3-warbands/black-orcs.md",
	"./3-warbands/blood-dragon-knights.md",
	"./3-warbands/brettonians.md",
	"./3-warbands/carnival-of-chaos.md",
	"./3-warbands/clan-eshin.md",
	"./3-warbands/clan-moulder.md",
	"./3-warbands/clan-pestilens.md",
	"./3-warbands/clan-skyre.md",
	"./3-warbands/cult-of-khaine.md",
	"./3-warbands/cult-of-the-possessed.md",
	"./3-warbands/dark-elves.md",
	"./3-warbands/dwarven-treasure-hunters.md",
	"./3-warbands/forest-walkers.md",
	"./3-warbands/hobgoblins.md",
	"./3-warbands/kislevites.md",
	"./3-warbands/lahmia.md",
	"./3-warbands/marienbergers.md",
	"./3-warbands/nordlanders.md",
	"./3-warbands/norse.md",
	"./3-warbands/nuln-engineers.md",
	"./3-warbands/orc-mob.md",
	"./3-warbands/ostlanders.md",
	"./3-warbands/outlaws.md",
	"./3-warbands/pit-fighters.md",
	"./3-warbands/shadow-warriors.md",
	"./3-warbands/sisters-of-sigmar.md",
	"./3-warbands/tilean.md",
	"./3-warbands/von-carsteins.md",
	"./3-warbands/witch-hunters.md",

	"4-campaigns.md",
	"5-skills.md",
	"6-magic.md",
	"7-equipment.md",
	"8-scenarios.md",
	"9-hammerheim-mods.md",
	"10-optional-rules.md",
];

// ---------------------------------

handbooker( 
	targets,
	"hammerheim-rules.pdf",
	options, 
);
