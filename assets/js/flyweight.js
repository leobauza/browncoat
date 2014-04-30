Flyweight = (function() {

  var App = {
    extend: function() {
      return {
        modules: {}
      }
    }
  };

  var Modules = {
    extend: function(args) {
      var
        els = {},
        actions = {}
      ;

      if (typeof args.els !== 'undefined') {
        els = args.els;
      }

      if (typeof args.actions !== 'undefined') {
        actions = args.actions;
      }

      jQuery.each(actions, function(event_target, method_name) {
        var
          parts = event_target.split(' '),
          the_event = parts[0],
          the_target = parts[1]
        ;

        jQuery(document).on(the_event, els[the_target], args[method_name]);

      });


      jQuery.each(els, function(k, v) {
        //console.log("k is: " + k + " || v is:" + v);
        els[k] = jQuery(v);
      });

      if (typeof args.init !== 'undefined') {
        args.init();
      }

      return {
        actions: actions,
        els: els
      }

    }

  };

  return {
    App: App,
    Modules: Modules
  }

})();

var app = new Flyweight.App.extend();


app.modules.nameOfModule = new Flyweight.Modules.extend({

  actions: {
    'click listgroup': 'methodName'
  },

  els: {
    'listgroup': '.list-group'
  },

  init: function() {
    console.log('whatdup');
  },

  methodName: function() {
    console.log('you clicked stuff bro');
  }

});
