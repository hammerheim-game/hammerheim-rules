const { handbooker, } = require("handbooker");

const options = {
	"debug": true,
	"style": "./node_modules/handbooker/lib/styles/homebrewery-styles.css",
	"markdownOptions": {
		encoding: "utf8",
	},
	pdfOptions: {
		height: "279.4mm",
		width: "215.9mm",
		border: 0,
	},
};

handbooker("./2-core-rules.md", "rules.pdf", options);