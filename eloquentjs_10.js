// month names
// zero based months module
var month = function(){
	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	return {
		name: function(num){
			return months[num];
		}, 
		number: function(mnth) {
			return months.indexOf(mnth);
		}
	}
}();

// result
console.log(month.name(2));
console.log(month.number("November"));