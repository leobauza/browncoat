define(function(require){
	var numbers = [1, 5, 10, 15, 2, 4, 6];
	var results = numbers.map( function(x) { return x * 2 } );
	console.log("results: ", results);

	function func(msg) {
		console.log("my message outside:", msg);
		return function(msg) {
			console.log("my message inside: ", msg);
		}
	}
	
	func("my message")("the message");

	var puzzlers = [
		function ( a ) { return 8*a - 10; }, 
		function ( a ) { return (a-3) * (a-3) * (a-3); }, 
		function ( a ) { return a * a + 4; },
		function ( a ) { return a%3; }	
	];
	var start = 2;
	var applyAndEmpty = function(num, funcs) {
		var length = funcs.length;
		for(var i = 0; i<length; i++){
			// var shifter = funcs.shift();
			// console.log(shifter);
			// num = shifter(num); //funcs.shift()(num);
			num = funcs.shift()(num);
		}
		return num;
	};
	console.log("puzzlers: ", applyAndEmpty(start, puzzlers));

	
	//closures
	//Returning a function from a function,
	//complete with variables from an
	//external scope, is called a closure.
	function closure( transport ) {
		return function ( name ) {
			console.log('closure sample: ', 'transportation is ' + transport + ' and name is ' + name);
		}
	}
	//the function being returned from closure() is a closure
	//because it encapsulates everything from its external scope
	//used to create function factories
	
	var submarine = closure("submarine");
	var other = closure("other");
	
	submarine("mario");
	other("wario");
	
	function warningMaker( obstacle ){
	  var count = 0;
	  var zones = [];
	  return function ( number, location ) {
	    count++;
	    zones.push( [location, number] );
	    var list = "";
	    for(var i = 0; i<zones.length; i++){        
	        list = list + "\n" + zones[i][0] + " (" + zones[i][1] + ")";  
	    }
	    alert("Beware! There have been " +
	          obstacle +
	          " sightings in the Cove today!\n" +
	          number +
	          " " +
	          obstacle +
	          "(s) spotted at the " +
	          location +
	          "!\n" +
	          "This is Alert #" +
	          count +
	          " today for " +
	          obstacle +
	          " danger.\n" +
	          "Current danger zones are: " +
	          list
	         );
	  };
	}
	
	var warningone = warningMaker("rocks");
	var warningtwo = warningMaker("poop");
	
	// warningone(3, "somewhere");
	// warningtwo(5, "there");
	// warningtwo(10, "here");
	// warningtwo(2, "everywhere");
	
	
	function makeTargetAssigner( sharks, targets ){
	  return function(shark) {
			for(var i = 0; i < sharks.length; i++) {
				if(sharks[i] == shark) {
					console.log(shark + "! target is: " + targets[i]);
				}
			}
		};
	}
	
	var sharksArr = ["jonny", "poppy", "foxy"];
	var targetsArr = ["one", "two", "three"];
	var targetFor = makeTargetAssigner(sharksArr, targetsArr);
	targetFor("foxy");

	console.warn("sandbox js");
	
	var external = ["one", "two"];
	var object = {
		prop: "something",
		internal: external
	};
	
	// object.internal.push("three");
	// console.log("object internal:", object.internal)
	// console.log("external var:", external)
	console.log("object prop ", object.prop);
	delete object.prop;
	console.log("object prop ", object.prop);
	
	
	var myBox = {
		box1: {height: 6, width: 6},
		box2: {height: 7, width: 7},
		func: function(name, h, w) {
			this[name] = {height: h, width: w};
		}
	}
	
	for (key in myBox) {
		console.log("my key: ", key);
	}
	
	console.log("my box: ", myBox);
	myBox.func("box3", 8, 8);
	console.log("my box: ", myBox)
	
	
	

});
