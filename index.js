/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

var toFn = require('to-function');

module.exports = Sorted;

function Sorted(key) {
	this.fn = toFn(key);
	this.array = [];
}

Sorted.prototype.insert = function Sorted_insert(obj) {
	var key = this.fn(obj);
	var index = this.find(key, true);
	this.array.splice(index, 0, obj);
};

Sorted.prototype.find = function Sorted_find(key, closest) {
	var low = 0;
	var array = this.array;
	var high = array.length;

	while (high > low) {
		var index = (high + low) / 2 >>> 0;
		var cursor = this.fn(array[index]);

		if (cursor < key)
			low = index + 1;
		else if (cursor > key)
			high = index;
		else
			return index;
	}
	if (closest)
		return high;
	return -1;
};

