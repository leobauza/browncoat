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
