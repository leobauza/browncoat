/**
 * Non coffeescript Non Require JS boilerplate
 */

/**
 * A Class
 */
//var APP = APP || {};
// APP = function (name) {
//
//   if(!(this instanceof APP)) {
// 		return new APP(name)
// 	}
//
//   this.name = name || 'App';
//
//   this.ns = function (ns_string) {
//     var
//     	parts = ns_string.split('.'),
//     	parent = this,
//     	i
//     ;
//     //strip redundant leading global
//     if (parts[0] === this.name) {
//     	parts = parts.slice(1);
//     }
//     for (i = 0; i < parts.length; i += 1) {
//     	//create a property if it doesn't exist
//     	if (typeof parent[parts[i]] === "undefined") {
//     		parent[parts[i]] = {};
//     	}
//     	parent = parent[parts[i]];
//     }
//     return parent;
//   }
//
//   this.init = function () {
//     for (var key in this.modules) {
//       if (this.modules[key] !== undefined) {
//         if(this.modules.hasOwnProperty(key) && this.modules[key].hasOwnProperty('init')) {
//           this.modules[key].init();
//         }
//       }
//     }
//   }
//
//   //creates a jQuery dependency
//   this.extend = function(object) {
// 	   return $.extend(object, this);
// 	}
//
//   return this;
// }

//optionally pass a name (defaults to App)
//var App = new APP('App');
//name can be set up afterwards
//App.name = "App";

/**
 * An Exendable Object
 */
var APP = APP || {

  ns: function (ns_string) {
    var
    	parts = ns_string.split('.'),
    	parent = this,
    	i
    ;
    //strip redundant leading global
    if (parts[0] === this.name) {
    	parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
    	//create a property if it doesn't exist
    	if (typeof parent[parts[i]] === "undefined") {
    		parent[parts[i]] = {};
    	}
    	parent = parent[parts[i]];
    }
    return parent;
  }

  ,init: function () {
    var name = this.name;
    for (var key in this.modules) {
      if (this.modules[key] !== undefined) {
        if(this.modules.hasOwnProperty(key) && this.modules[key].hasOwnProperty('init')) {
          this.modules[key].init();
        }
      }
    }
  }

  ,extend: function (object) {
    return $.extend(object, this);
  }
}

var App = APP.extend({
  name: "App"
});

//this part works the same for both
App.ns('App.modules');

App.modules.module = (function () {
  function init () {
    console.log("my initialize funcion...");
  }

  return {
    init: init
  };

})();
App.modules.module2 = (function () {
  function init () {
    console.log("my second initialize function...");
  }

  return {
    init: init
  };

})();

App.init();



// //a namespacing function that the namespace doesnt exist
// APP.ns = function (ns_string) {
// 	var
// 		parts = ns_string.split('.'),
// 		parent = APP,
// 		i
// 	;
// 	//strip redundant leading global
// 	if (parts[0] === "APP") {
// 		parts = parts.slice(1);
// 	}
// 	for (i = 0; i < parts.length; i += 1) {
// 		//create a property if it doesn't exist
// 		if (typeof parent[parts[i]] === "undefined") {
// 			parent[parts[i]] = {};
// 		}
// 		parent = parent[parts[i]];
// 	}
// 	return parent;
// }
//
// //use ns function to create modules namespace
// APP.ns('modules');
//
// //attach properties to moduels namespace
// APP.modules.module = (function () {
//   console.log("don't return stuf...")
// 	//private function for initiation
// 	function init () {
// 		console.log("some init stuff happens here!")
// 	}
//
// 	//expose only what you want
// 	return {
// 		init: init
// 	}
//
// })();
//
//
// //log out you APP object for kicks
// console.log(APP);
//
// /**
//  * cycle through APP properties with an init method (for no reason in this site)
//  */
// for (var key in APP.modules) {
//   if (APP.modules[key] !== undefined) {
// 		if(APP.modules.hasOwnProperty(key) && APP.modules[key].hasOwnProperty('init')) {
// 			APP.modules[key].init();
// 		}
//   }
// }
