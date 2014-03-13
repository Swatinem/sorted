/* vim: set shiftwidth=2 tabstop=2 noexpandtab textwidth=80 wrap : */
"use strict";

var Sorted = require('../');

describe('sorted', function () {
	it('should expose the underlying array', function () {
		var s = new Sorted('key');
		s.array.should.be.an.instanceof(Array);
	});
	it('should allow inserting elements', function () {
		var s = new Sorted('key');
		var o = {key: 0};
		s.insert(o);
		s.array[0].should.equal(o);
	});
	it('should insert and retain the sorting order', function () {
		var s = new Sorted('key');
		s.insert({key: 0});
		s.insert({key: 10});
		s.insert({key: 5});
		s.insert({key: 7});
		s.insert({key: 3});
		s.insert({key: 15});
		s.array.map(function (o) { return o.key; }).should.eql([0,3,5,7,10,15]);
	});
	describe('.find()', function () {
		it('should return -1 when key is not found', function () {
			var s = new Sorted('key');
			var o = {key: 1};
			s.insert(o);
			s.find(0).should.eql(-1);
		});
		it('should give the index of the found object', function () {
			var s = new Sorted('key');
			var o = {key: 0};
			s.insert(o);
			s.find(0).should.eql(0);
		});
		it('should give the index at which the obj can be inserted when closest is specified', function () {
			var s = new Sorted('key');
			s.insert({key: 0});
			s.insert({key: 2});
			s.find(1, true).should.eql(1);
			s.find(3, true).should.eql(2);
		});
	});
});

