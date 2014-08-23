/**
 * A Class
 */
var APP = APP || {};
APP = function (name) {

  if(!(this instanceof APP)) {
    return new APP(name)
  }

  this.name = name || 'App';

  function process (conf) {
    var
      obj = conf.obj,
      key = conf.key,
      ns = conf.ns
    ;

    if (obj[ns][key].actions && obj[ns][key].els) {
      console.log(obj[ns][key], " => has actions and els");
      var
        that = obj,
        actions = obj[ns][key].actions,
        els = obj[ns][key].els
      ;

      console.log("els: ", els);
      console.log("actions: ", actions);

      //sort through actions
      jQuery.each(actions, function(event_target, method) {
        var
          parts = event_target.split(' '),
          the_event = parts[0],
          the_target = parts[1]
        ;

        jQuery(document).on(the_event, els[the_target], method);
      });

      //sort through elements
      jQuery.each(els, function(k, v) {
        els[k] = jQuery(v);
      });

    }
  }

  this.ns = function (ns_string) {
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

  this.init = function (ns) {
    ns = typeof ns !== "undefined" ? ns : 'modules';

    for (var key in this[ns]) {

      if (this[ns][key] !== undefined) {
        if(this[ns].hasOwnProperty(key) && this[ns][key].hasOwnProperty('init')) {
          this[ns][key].init();
        }
      }

      //process the actions and elements
      var conf = {
        obj: this,
        key: key,
        ns: ns
      };
      process(conf);

    }
  }

  //creates a jQuery dependency (don't really need this when working with a "class")
  this.extend = function(object) {
     return $.extend(object, this);
  }

  return this;
}

//optionally pass a name (defaults to App)
var App = new APP();
//name can be set up afterwards
//App.name = "App";

App.ns('modules');
App.modules.mymodule = (function () {

  function init () {
    console.log("init!");
  }

  function method () {
    console.log("method!");
  }

  function methodtwo () {
    console.log("second method");
  }

  function destroy () {
    $.each(actions, function (event_target, method) {
      var
        split = event_target.split(" "),
        the_event = split[0],
        the_target = split[1]
      ;
      // console.log(the_event + " " + els[the_target].selector + " " + method);
      jQuery(document).off(the_event, els[the_target].selector , method);
    });
  }

  actions = {
    'click listitem': method,
    'mouseenter lastlistitem': methodtwo
  };

  els = {
    'listitem': '.list-group li:first-child',
    'lastlistitem': '.list-group li:last-child'
  };

  return {
    init: init,
    actions: actions,
    els: els,
    destroy: destroy
  };

})();

$('.bc-section-header').click( function (e) {
  e.preventDefault();

  var mymodule = App.modules.mymodule

  mymodule.els.listitem.html("booom!");

  App.modules.mymodule.destroy();

});

App.init();
//console.log(App);
console.log("flyweightclass.js");
/**
 * Non coffeescript Non Require JS boilerplate
 */

console.log("script.js!");

/**
 * An Exendable Object
 */
// var APP = APP || {
//
//   ns: function (ns_string) {
//     var
//       parts = ns_string.split('.'),
//       parent = this,
//       i
//     ;
//     //strip redundant leading global
//     if (parts[0] === this.name) {
//       parts = parts.slice(1);
//     }
//     for (i = 0; i < parts.length; i += 1) {
//       //create a property if it doesn't exist
//       if (typeof parent[parts[i]] === "undefined") {
//         parent[parts[i]] = {};
//       }
//       parent = parent[parts[i]];
//     }
//     return parent;
//   }
//
//   ,init: function (namespace) {
//     //for every property based on the namespce do stuff...
//     for (var key in this[namespace]) {
//       if (this[namespace][key] !== undefined) {
//         if(this[namespace].hasOwnProperty(key) && this[namespace][key].hasOwnProperty('init')) {
//           this[namespace][key].init();
//         }
//       }
//
//       if (this[namespace][key].actions && this[namespace][key].els) {
//         console.log(this[namespace][key], " => has actions and els");
//         var
//           that = this,
//           actions = this[namespace][key].actions,
//           els = this[namespace][key].els
//         ;
//
//         // console.log("els: ", els);
//         // console.log("actions: ", actions);
//
//         //sort through actions
//         jQuery.each(actions, function(event_target, method_name) {
//           var
//             parts = event_target.split(' '),
//             the_event = parts[0],
//             the_target = parts[1]
//           ;
//           console.log(parts);
//           jQuery(document).on(the_event, els[the_target], method_name);
//         });
//
//         //sort through elements
//         jQuery.each(els, function(k, v) {
//           els[k] = jQuery(v);
//         });
//
//       }
//
//     } // end for loop
//
//   }
//
//   ,extend: function (object) {
//     return $.extend(object, this);
//   }
//
// }
//
// var App = APP.extend({
//   name: "App"
// });
//
//
// App.ns('App.modules');
//
// App.modules.module = (function () {
//   var actions, els;
//
//   function init () {
//     console.log("my initialize funcion...");
//   }
//
//   function method () {
//     console.log("clicked something!");
//   }
//
//   actions = {
//     'click listitem': method
//   };
//
//   els = {
//     'listitem': '.list-group li:first-child'
//   };
//
//   return {
//     init: init,
//     actions: actions,
//     els: els
//   };
//
// })();
//
// App.modules.module2 = (function () {
//   function init () {
//     console.log("my second initialize function...");
//   }
//
//   return {
//     init: init
//   };
//
// })();
//
// /**
//  * init takes a namespace to initialize as a parameter
//  */
// App.init('modules');
//
// console.log(APP);
// console.log(App);
