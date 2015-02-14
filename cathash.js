function CatHash(){
	var table = [];

	var hashIt = function(key){
		verifyKeyType(key);

		var hash = 5;
		for(var i=0; i<key.length; i++){
			hash = hash * 3 + key.charCodeAt(i);
		}
		return hash;
	};

	var verifyKeyType = function(key){
		if(typeof key !== 'string'){
			throw new Error('Key must be a string!');
		}
	};

	this.put = function(key, value){
		var hash = hashIt(key);
		if(table[hash] === undefined){
			table[hash] = [];
		}
		var obj = {
			key: key,
			value: value
		};

		var row = table[hash];
		for(var i = 0; i < row.length; i++){
			if(row[i].key === key){
				row[i].value = value;
				return;
			}
		}

		table[hash].push(obj);
	};

	this.find = function(key){
		var hash = hashIt(key);
		var values = table[hash];

		for(var i = 0; i < values.length; i++){
			if(values[i].key === key){
				return values[i].value;
			}
		}
	};

	this.remove = function(key){
		var hash = hashIt(key);
		var values = table[hash];

		for(var i = 0; i < values.length; i++){
			if(values[i].key === key){
				values.splice(i, 1);
			}
		}
	};

	this.print = function(){
		console.log(table);
	};
};

module.exports = CatHash;