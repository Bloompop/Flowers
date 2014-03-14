var csv = require('fs').readFileSync(__dirname + '/flowers.csv', 'utf8');
csv = csv.toLowerCase();
var lines = csv.split('\n');
var flowers = {};
var primaries = {};
var flowersSimple = {};
var primariesSimple = {};
for (var i = lines.length - 1; i >= 0; i--) {
	var list = lines[i].split(',');
	for (var j = list.length - 1; j >= 0; j--) {
		var flower = list[j];
		flowers[flower] = list.filter(function(name) {
			return name != flower;
		});
		if(j) {
			primaries[flower] = list[0];
		}
		var flowerSimple = list[j].toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
		flowersSimple[flowerSimple] = list.filter(function(name) {
			return name != flowerSimple;
		}).map(function(name) {
			return name.toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
		});
		if(j) {
			primariesSimple[flowerSimple] = list[0].toLowerCase().replace(/\s/g, '_').replace(/\W/g, '').replace(/_/g, '-');
		}
	}
}

module.exports.list = Object.keys(flowers);
module.exports.primaries = primaries;
module.exports.map = flowers;

module.exports.simple = {};
module.exports.simple.list = Object.keys(flowersSimple);
module.exports.simple.primaries = primariesSimple;
module.exports.simple.map = flowersSimple;

