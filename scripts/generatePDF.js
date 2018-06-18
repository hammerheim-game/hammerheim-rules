// const path = require("path");
// const mdpdf = require("mdpdf");

// let options = {
// 	source: path.join(__dirname, "../2-core-rules.md"),
// 	destination: path.join(__dirname, "../hammerheim-rules.pdf"),
// 	styles: path.join(__dirname, "../styles/homebrewery-styles.css"),
// 	debug: path.join(__dirname, "../debug.html"),
// 	//ghStyle: true,
// 	pdf: {
// 		format: "A4"
// 	}
// };

const fs = require("fs");

const pdf = require("html-pdf");

const Markdown = require("./generateMarkdown.js");

const html = Markdown.render( fs.readFileSync('./2-core-rules.md', 'utf8') );

const options = { 
	format: 'A4',
	"orientation": "portrait",
	"border": {
		"top": "2cm",
		"right": "1.5cm",
		"bottom": "2cm",
		"left": "1.5cm"
	},
};
 
pdf.create(html, options).toFile(
	'./test.pdf',
	function(err, res) {
		if (err) return console.log(err);

		console.log(res);
	}
);