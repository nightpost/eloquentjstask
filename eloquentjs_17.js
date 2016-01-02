//Content negotiation
//get responses in 3 different forms 'text/plain', 'text/html', 'application/json'
function httpRequest(url, responseTypes) {
	var req;
  	for(var i = 0; i < responseTypes.length; i++) {
    	req = new XMLHttpRequest();
      	req.open('GET', url, true);
      	var res = responseTypes[i];
  		req.setRequestHeader('Accept', res);
  		req.addEventListener('load', getListener(req, res));
  		req.send(null);
    }
  
  	function getListener(req, res) {
      	res = res.toLowerCase();
    	if(res === 'text/plain') {
        	return function() {
            	console.log(req.responseText+'\n');
            }
        } else if(res === 'text/html') {
        	return function() {
            	console.log(req.responseText+'\n');
            }
        } else if(res === 'application/json') {
        	return function() {
            	console.log(JSON.parse(req.responseText));
              	console.log();
            }
        }
    }
}

httpRequest('http://eloquentjavascript.net/author', 
            ['text/plain','text/html','application/json']);

//NO
//IDEA
function all(promises) {
  return new Promise(function(succeed, fail) {
    var results = [], pending = promises.length;
    promises.forEach(function(promise, i) {
      promise.then(function(result) {
        results[i] = result;
        pending -= 1;
        if (pending == 0) {
          succeed(results);
        }
      }, function(error) {
        fail(error);
      });
    });
    if (promises.length == 0)
      succeed(results);
  });
}

// Test code.
all([]).then(function(array) {
  console.log("This should be []:", array);
});
function soon(val) {
  return new Promise(function(success) {
    setTimeout(function() { success(val); },
               Math.random() * 500);
  });
}
all([soon(1), soon(2), soon(3)]).then(function(array) {
  console.log("This should be [1, 2, 3]:", array);
});
function fail() {
  return new Promise(function(success, fail) {
    fail(new Error("boom"));
  });
}
all([soon(1), fail(), soon(3)]).then(function(array) {
  console.log("We should not get here");
}, function(error) {
  if (error.message != "boom")
    console.log("Unexpected failure:", error);
});