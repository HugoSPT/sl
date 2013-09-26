
function Value(data) {
	if(!(this instanceof Value)) 
		return new Value(data);
	var val = 0, min = 0, max = 0;
	if(data != undefined)
		initialize(data);

	/**
	*
	* value getter and setter definition
	*
	*/
	Object.defineProperty(this, "value",{
		get: function() {
			return val;
		},
		set: function(data){
			if(data >= min && data <= max)
				val = data;
			else
				throw new OutOfBounds("Error. Out of Bounds");
		}
	});

	/**
	*
	* min getter definition
	*
	*/
   	Object.defineProperty(this, "min", {
   		get: function(){
   			return min;
   		}
   	});

   	/**
	*
	* max getter definition
	*
	*/
   	Object.defineProperty(this, "max", {
		get: function(){
			return max;
		}
	});

   	/**
   	*
   	* Initialize value, max and min variables;
   	*
   	*/
	function initialize(data){
		if(data['value'] && data['min'] && data['max'] && (data['value'] >= data['min'] && data['value'] <= data['max'])){
			val = data['value'];
			max = data['max'];
			min = data['min'];
		}else if(data['value'] && data['max'] && !data['min']){
			val = data['value'];
			max = data['max'];
			min = data['value']--;
		}else if(data['value'] && !data['max'] && data['min']){
			val = data['value'];
			max = data['value']++;
			min = data['min'];
		}else if(data['value'] && !(data['max'] && data['min'])){
			val = data['value'];
			max = data['value']++;
			min = data['value']--;
		}
   	}
}

Value.prototype.toString = function(){
	return parseInt(this.value);
}