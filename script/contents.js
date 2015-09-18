var yml = require("js-yaml")
var fs = require("fs")

console.log(__dirname);
module.exports = yml.safeLoad(fs.readFileSync(__dirname+"/contents.js"))