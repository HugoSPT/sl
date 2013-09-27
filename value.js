
function Value(data) {
	if(!(this instanceof Value)) 
		return new Value(data);
	var val = 0; var min = 0; var max = 0;
	if(data != undefined)
		initialize(data);

	/**
	*
	* Value getter and setter to get and set values
	* @return val the actual value
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
	* Min getter to get the min value
	* @return the min
	*
	*/
   	Object.defineProperty(this, "min", {
   		get: function(){
   			return min;
   		}
   	});

   	/**
	*
	* Max getter to get the max value
	* @return the max
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
   	* @data - user inputs values, such as value, max and min
   	*/
	function initialize(data){
		if(data['value'] && data['min'] && data['max'] && (data['value'] >= data['min'] && data['value'] <= data['max'])){
			val = data['value'];
			max = data['max'];
			min = data['min'];
		}else if(data['value'] && data['max']){
			val = data['value'];
			max = data['max'];
		}else if(data['value'] && data['min']){
			val = data['value'];
			max = Number.MAX_VALUE;
			min = data['min'];
		}else{
			val = data['value'];
			max = Number.MAX_VALUE;
		}
   	}
}

/**
*
* Making the value a number
* @return the integer represetantion of this value
*/
Value.prototype.toString = function(){
	return parseInt(this.value);
}