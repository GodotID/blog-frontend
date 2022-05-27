// install express with `npm install express` 
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/article/:article', (req, res) => {
	res.end();
});

// export 'app'
if (process.env.USER == "hanz") {
	app.listen(8080, () => {
		console.log("Ran at 8080");
	});
} else {
	module.exports = app;
}
