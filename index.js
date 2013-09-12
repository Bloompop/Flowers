var csv = require('fs').readFileSync(__dirname + '/flowers.csv', 'utf8')
csv = csv.toLowerCase()
var lines = csv.split('\n')
var flowers = {}
var primaries = {}
for (var i = lines.length - 1; i >= 0; i--) {
	var list = lines[i].split(',');
	for (var j = list.length - 1; j >= 0; j--) {
		var flower = list[j];
		flowers[flower] = list.filter(function(name) {
			return name != flower
		})
		if(j) {
			primaries[flower] = list[0]
		}
	}
}
console.log(primaries)
module.exports.list = Object.keys(flowers)
module.exports.primaries = primaries
module.exports.map = flowers