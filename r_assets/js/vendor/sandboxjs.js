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

  var test10 = func("my message");
  test10("the message");
  //the equivalent of the above but immediately invoked
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

  //console.warn("sandbox js");

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


  /*
   *
   * IIFE (immediately invoked function expressions)
   *
   */
  var counter = (function() {
    var i = 0; //not accesible directly

    return { //return these methods (which are now closures aka functions returned out of a function that wrap their outter scope in this case just "i")
      get: function() {
        return i;
      },
      set: function(val) {
        i = val;
      },
      increment: function() {
        return ++i;
      }
    }
  }());

  console.warn("IIFE example first using an IIFE then a regular object for contrast")
  console.log("counter 1 i prop: ", counter.i);
  console.log(counter.get());
  counter.set(50);
  console.log(counter.get());
  console.log(counter.increment());

  /*
   *
   * In the example above the i is private to the object and below everything is public
   *
   */

  var counter2 = {
    i: 0,
    get: function() {
      return this.i;
    },
    set: function(val) {
      this.i = val;
    },
    increment: function() {
      return ++this.i
    }
  }

  console.log("counter 2 i prop: ", counter2.i);
  console.log(counter2.get());
  counter2.set(50);
  console.log(counter2.get() + " || " + counter2.i);
  console.log(counter2.increment());

  /*

  EXTEND
  jQuery.extend() creates a deep copy of an object
  assigning does NOT create a new copy of the object it is just the reference
  that's where making a deep copy comes in

  */


  // var BC_IIFE = (function() {
  //   i = 1;
  //   return {
  //     prop: i,
  //     extend: function(object) {
  //        return $.extend(object, this);
  //     }
  //   }
  // }());
  //
  // var BC_copy = BC_IIFE.extend({});
  //
  // console.log("bc_iife: ", BC_IIFE);
  // console.log("copy of bc_iife: ", BC_copy);

  var BC = {
    prop: "prop",
    extend: function(object) {
       return $.extend(object, this);
    }
  }

  var mybc = BC.extend({
    prop2: "added a prop2"
  });

  var submybc = mybc.extend({
    prop3: "one level deeper"
  });

  console.log(BC);
  console.log(mybc);
  console.log(submybc);
  // var extendThis = {
  //   prop: "prop"
  // }
  // extendThis.prop2 = "second prop";
  //
  // var newobject = $.extend({}, extendThis);
  // newobject.prop3 = "new object diff prop"
  //
  // console.log(newobject);
  // console.log(extendThis);

  /*

    in plain javascript
    loop over each property assigning it to the new object

  */
  // var obj_a = {
  //   url: "google.com"
  // }
  // var obj_b = {}
  //
  // for (var prop in obj_a) {
  //   obj_b[prop] = obj_a[prop];
  // }
  // obj_b.url = "other";
  //
  // console.log(obj_a);
  // console.log(obj_b);



  /*

  CLASSES

  */
  function MyClass(p1, p2) { //function declaration
    this.p1 = p1 || "p1";
    this.p2 = p2 || "p2";
    this.obj = {
      prop: "prop in object",
      prop2: "second prop in object"
    }
  }

  var myobject = new MyClass();

  console.log(myobject);


  /*

  SCOPE
  Javascript has function scope NOT block scope

  */

  var x = true
  if(x === true) {
    var i = 1;
  }
  console.log("proof that there is no block scope: ", i); //i can be read outside the if block

  function scopeFunc() {
    var z = 1;
  }
  if(typeof(z) === "undefined") {
    console.log("proof of function scope...")
  }


  /*

  THIS keyword

  */

  function thisKey() {
    this.prop = 1;
    this.thisbe = function() {
      var that = this; //this is the object owner thiskey
      console.log("this should be thiskey: ", this);
      return function() {
        console.log("this should be window: ", this); //this is window
      }()
    }
  }

  var owner = new thisKey()

  owner.thisbe();

  thisObj = {
    getthis: function() {
      console.log(this);
      return function something(){
        console.log("something func", this);
      };
    }
  };

  var somethingFunc = thisObj.getthis();
  somethingFunc.call(thisObj);


  iifeObj = (function(){
    i = 1
    return {
      prop: "1",
      prop2: "2",
      whatsi: i
    }
  }());


  console.log(iifeObj.whatsi);


  // thisObj = {
  //   getthis: console.log(this)
  // }
  //
  // thisObj.getthis;

  /*


  PITFALLS OF A CLOSURE
  1. the loop problem :
  JavaScript's scopes are function-level, not block-level, and creating a closure just means that the enclosing scope gets added to the lexical environment of the enclosed function.
  After the loop terminates, the function-level variable i has the value 5, and that's what the inner function 'sees'.

  1. solution: Invoke the closure by passing i as the loop is running.

  eh...not sure about the above

  2. the this keyword...



  */

  // function addLinks () {
  //   for (var i=0, link; i<5; i++) {
  //     link = document.createElement("a");
  //     link.innerHTML = "Link " + i;
  //     link.onclick = function () {
  //       alert(i);
  //     };
  //     document.body.appendChild(link);
  //   }
  //   console.log("i: ", i);
  // }
  //
  // addLinks();
  //
  // function addLinks2 () {
  //   for (var i=0, link; i<5; i++) {
  //     link = document.createElement("a");
  //     link.innerHTML = "Link " + i;
  //     link.onclick = function (num) {
  //       return function() {
  //         alert(num);
  //       };
  //     }(i);
  //     document.body.appendChild(link);
  //   }
  // }
  //
  // addLinks2();

  function loopProblem() {
    for (var i=0; i<5; i++) {
      console.log("i inside is: ", i);
      this.something = function() {
        return i;
      };
    }
  }

  var loopprob = new loopProblem();
  var whatisi = loopprob.something();
  console.log(whatisi);


  /*

  CALL and APPLY

  */

  // var callfunc = function(arg1, arg2) {
  //   console.log("arg1 is: " + arg1 + " and arg2 is: " + arg2 + " and this is: ", this);
  // }
  //
  // var x = {
  //   prop: "prop",
  //   prop2: "prop2"
  // };
  // var args = [
  //   "first argument",
  //   "second argument"
  // ];
  //
  // //call requires you pass arguments individually
  // callfunc.call(x, "first argument", "second argument");
  //
  // //apply lets you pass arguments as an array
  // //callfunc.apply(x, args);
  //
  function clicksomething(text, message) {
    var that = this;
    console.log("this in clicksomething: ", this);
    this.click(function() {
      that.html(text);
      console.log("this in click: ", this)
      console.log(message);
    });
  }

  clicksomething.call($("li"), "sample of apply and call ussage", "some message");

  /*

  Javascript generators vs iterators

  */


  /*

  Javascript Patterns

  */







});
