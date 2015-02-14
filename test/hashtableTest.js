var should = require('chai').should();
var CatHash = require('../cathash');

var key1 = 'key1';
var value1= 'value1';
var key2 = 'key2';
var value2= 'value2';

var instance;

beforeEach(function(){
	instance = new CatHash();
});

afterEach(function(){
	instance = null;
});

describe('CatHash unit test', function(){
	it('puts the element into CatHash and finds it', function(){
		instance.put(key1, value1);
		var retrieved1 = instance.find(key1);
		value1.should.equal(retrieved1);
	});

	it('puts two elements into CatHash and finds them', function(){
		instance.put(key1, value1);
		instance.put(key2, value2);
		var retrieved1 = instance.find(key1);
		var retrieved2 = instance.find(key2);
		value1.should.equal(retrieved1);
		value2.should.equal(retrieved2);
		retrieved1.should.not.equal(retrieved2);
	});

	it('puts the element into CatHash and does not find it after removal', function(){
		instance.put(key1, value1);
		instance.remove(key1);
		var retrieved1 = instance.find(key1);
		should.not.exist(retrieved1);
	});
});