// return array within a range 
// if step missed step === 1
function range(start, end, step){
	var arr = [];

	if(!isNaN(start) && !isNaN(end)){
		var i = 0;
		if(step === undefined || step === 0) {
			for(start; start <= end ; start++) {
				arr[i++] = start;
			}
		} else if(step > 0) {
			for(start; start <= end; start += step) {
				arr[i++] = start;
			}
		} else if(step < 0) {
			for(start; end <= start ;start += step){
				arr[i++] = start;
			}
		} else {
			return 'step is illigal statement';
		}
	} else {
		return 'start/end isn\'t number';
	}

	return arr;
}


// reverse array
function reverseArray(arr) {
	var res = [];
	var len = arr.length - 1;
	arr.forEach(function(e, i){
		res[len - i] = e;
	});
	return res;
}


// reverse array in place
function reverseArrayInPlace(arr) {
	var len = arr.length;
	var halflen = Math.floor(len/2);
	var swap1, swap2, temp;
	var index = len - 1;
	var i = 0;

	for(i; i !== halflen; i++){
		temp = arr[i];
		arr[i] = arr[index - i];
		arr[index - 1] = temp;
	}
  return arr;
}


// transform array to list
function arrayToList(arr) {
	var list = null;
	for(var i = arr.length; i > 0; i--){
		list = {value: arr[i - 1], rest: list};
	}
	return list;
}


// transform list to array
function listToArray(list){
	var arr = [];
	var i = 0;
	while(list){
		arr[i++] = list.value;
		list = list.rest;
	}
	return arr;
}


// return the new list with added value at the beginning 
function prepend(val, list) {
	var arr = listToArray(list);
	arr.unshift(val);
	return arrayToList(arr);
}


// find element with index [indx] in a list or undefined, if doesn't
function nth(list, indx) {
	var arr = listToArray(list);
	var el = arr[indx];
	if(el || el === 0) {
		return el;
	}
}


// recursive version of nth
function nthRec(list, indx) {
	for(var i = 0; i < indx; i++) {
		list = list.rest;
	}
	if(list) {
		return list.value;
	}
}


// deep comparison of two values
function deepEqual(x, y) {
	if(x === y) {
		return true;
	}
	if(typeof x === typeof y){
		if(typeof x === 'object' && x && y){
			for(var key in x){
				if(y[key]) {
					if(!deepEqual(x[key], y[key])) {
						return false;
					}
				} else {
					return false;
				}
			}
			return true;
		} else if(typeof x === 'number') {
			if(!isNaN(x) && !isNaN(y)) {
				return x === y;
			} else {
				return false;
			}
		} else if(typeof x === 'string' || typeof x === 'boolean' || typeof x === 'symbol') {
			return x === y;
		} else {
			return false;
		}
	} else {
		return false;
	}
}