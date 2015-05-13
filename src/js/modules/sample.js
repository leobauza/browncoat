(function ($) {

  "use strict";

  var Flyweight;

  if (typeof require === 'function' && typeof Flyweight !== 'function') {
    Flyweight = require('../libs/flyweight');
  }

  /**
   * @doc module
   * @name Sample
   * @description
   * A sample fw module that uses Utils
   */
  var Sample = Flyweight.Module.extend({
    name: 'Sample',
    el: 'body',
    moduleOptions: {
      optionOne: 'my option default'
    },
    debug: false,
    initialize: function () {
      this.msg(this.$el); //access the module element through this.$el
      this.msg(this.optionOne); //access to modules options
    },
    onDelegated: function (e) {
      this.msg("onDelegate Sample (replaces empty default)");
    },
    test: function (e) {
      var _this = e.data.context,
          $this = $(this),
          html = $this.html();

      _this.msg("CHANGE ME");

    },
    events: {
      'click p' : 'test'
    }
  });

  //Exports the page module for app.js to use
  module.exports = {
    sample: new Sample('body', {
      optionOne: 'change option one'
    }),
    sampletwo: new Sample(document)
  };

})(jQuery);