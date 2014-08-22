/**
 * Non coffeescript Non Require JS boilerplate
 */

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

  ,init: function (namespace) {
    //for every property based on the namespce do stuff...
    for (var key in this[namespace]) {
      if (this[namespace][key] !== undefined) {
        if(this[namespace].hasOwnProperty(key) && this[namespace][key].hasOwnProperty('init')) {
          this[namespace][key].init();
        }
      }

      if (this[namespace][key].actions && this[namespace][key].els) {
        console.log(this[namespace][key], " => has actions and els");
        var
          that = this,
          actions = this[namespace][key].actions,
          els = this[namespace][key].els
        ;

        // console.log("els: ", els);
        // console.log("actions: ", actions);

        //sort through actions
        jQuery.each(actions, function(event_target, method_name) {
          var
            parts = event_target.split(' '),
            the_event = parts[0],
            the_target = parts[1]
          ;
          console.log(parts);
          jQuery(document).on(the_event, els[the_target], method_name);
        });

        //sort through elements
        jQuery.each(els, function(k, v) {
          els[k] = jQuery(v);
        });

      }

    } // end for loop

  }

  ,extend: function (object) {
    return $.extend(object, this);
  }

}

var App = APP.extend({
  name: "App"
});


App.ns('App.modules');

App.modules.module = (function () {
  var actions, els;

  function init () {
    console.log("my initialize funcion...");
  }

  function method () {
    console.log("clicked something!");
  }

  actions = {
    'click listitem': method
  };

  els = {
    'listitem': '.list-group li:first-child'
  };

  return {
    init: init,
    actions: actions,
    els: els
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

/**
 * init takes a namespace to initialize as a parameter
 */
App.init('modules');

console.log(APP);
console.log(App);
