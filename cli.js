#!/usr/bin/env node
var astro = require('./App'),
chalk = require('chalk'),
figlet = require('figlet');
(async () => {
var adata = await astro();
figlet(adata.title, (err, data) => {
console.log(chalk.yellow(data))
console.log('Date : ' + chalk.green(adata.date))
console.log('Description : ' + chalk.green(adata.explanation))
console.log('URL : '+chalk.green(adata.url))
})
})();
