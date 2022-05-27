const fs = require('fs');

const sass = require('sass');

const sassOpt = {
	loadPaths: ["public/scss/includes/"],
	style: "compressed"
};
const toBeCompiled = fs.readdirSync('public/scss/').map(x => "public/scss/" + x);

fs.mkdirSync('public/css/', {recursive: true});
for (const file of toBeCompiled) {
	if (!file.endsWith("scss")) continue;
	console.info("[i]", "Compiling", file);
	let {css} = sass.compile(file, sassOpt);
	console.info("[i]", "Writing result to", file.replace(/scss/g, 'css'))
	fs.writeFileSync(file.replace(/scss/g, 'css'), css);
}
console.info("[$]", "SCSS files compiled.");
