// flattering
// make flatten array usinc reduce method and concat
var arrays = [[1, 2, 3], [4, 5], [6]];
var resultArray = arrays.reduce(function(previousValue, currentValue){
	return previousValue.concat(currentValue);
});
console.log(resultArray);


// mother-child age difference
// compute the average age difference between mothers and children 
// (the age of mother when the child is born)
(function(arr){
	// the average age
	function average(array) {
	  function plus(a, b) { return a + b; }
	  return array.reduce(plus) / array.length;
	}

	// an access to objects by name
	var byName = {};
	arr.forEach(function(person) {
	  byName[person.name] = person;
	});

	// get mothers age when a chils is born
	var ageDifferences = arr.filter(function(person) {
  		return byName[person.mother] != null;
	}).map(function(person) {
  		return person.born - byName[person.mother].born;
	});

	// result
	console.log(average(ageDifferences));
}(ancestry));



// historical life expectancy
// applied method 
function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

// get grouped people by centuries
function groupBy(arr) {
	var group = {};
	arr.map(function(el, indx) { 
		var b = Math.ceil(el.died / 100);
      	var century = b.toString();
        if(!group[century]){
          		group[century] = [];
        }              
        group[century].push(el);		
	});
	return group;
};

// find average age for each century
function getAvarageAgeForCentury(obj) {
	var result = {};
	for(century in obj) {
		if(obj.hasOwnProperty(century)) {
			var age = obj[century].map(function(el, indx) {
				return el.died - el.born;
			});
			result[century] = average(age).toFixed(1);
		}
	}
  	return result;
}

// get result
console.log(getAvarageAgeForCentury(groupBy(ancestry)));



// every and then some
// analogue every function
function every(arr, checkCallback) {
	for(var i = 0; i < arr.length; i++) {
		if(!checkCallback(arr[i])){
			return false;
		}
	}
	return true;
};

// analogue some function
function some(arr, checkCallback) {
	for(var i = 0; i < arr.length; i++) {
		if(checkCallback(arr[i])) {
			return true;
		}
	}
	return false;
}