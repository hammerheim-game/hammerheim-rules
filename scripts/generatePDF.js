const fs = require("fs");
const pdf = require("html-pdf");
const Markdown = require("./generateMarkdown.js");

const markdownOptions = {
	encoding: "utf8"
};

const pdfOptions = {
	format: "letter",
	orientation: "portrait",
	border: 0,
	base: "../"
};

const html = `
	<html>
		<head>
			<style>
				${fs.readFileSync("styles/homebrewery-styles.css", function(err) {
					if (err) console.log(err);
				})}
			</style>
		</head>
		
		<body class = "document">
			${Markdown.render(fs.readFileSync("./2-core-rules.md", markdownOptions.encoding))
				.split("//page")
				.map((x, i) => {
					return `<div class="phb" id = "p${i + 1}">${x}</div>`;
				})
				.join(" ")}
		</body>
	</html>
`;

console.log("Saving interim HTML...");

fs.writeFile("debug.html", html, function(err) {
	if (err) console.log(err);
});

console.log("Creating PDF...");

pdf.create(html, pdfOptions).toFile("./test.pdf", function(err, res) {
	if (err) return console.log(err);

	console.log(res);
});
