"use strict";

/**
 * @todo
 *   Convert these to directives.
 */

var _ = require("underscore");

var Utils = function (obj) {
  if (obj instanceof Utils) {
    return obj;
  }
  if (!(this instanceof Utils)) {
    return new Utils(obj);
  }
  this._wrapped = obj;
};

Utils.convertToColourBlocks = function (code) {

  var colourGroups = code.match(/\*\/([a-z]*\n[\s\S]*?\n)\/\*/g),
      headings = code.match(/\/\*([a-z]*[\s\S]*?)\*\//g);

  var markup = [];

  _.each(headings, function (v, k) {
    if (v === "/* end */") { return; }
    var colours = colourGroups[k] ? colourGroups[k].match(/#[0-9a-f]{3,6}/ig) : false;
    markup[k] = "<div class='docolour'>";
    markup[k] += "<h5 class='docolour__heading'>" + v.replace(/[\/\*]/g, "") + "</h5>";
    if (colours && colours.length > 0) {
      _.each(colours, function (vb, kb) {
        markup[k] += "<div class='docolour__box' style='background:" + vb + "'></div>";
      });
      markup[k] += "</div>";
    } else {
      markup[k] = '';
    }
  });

  return markup.join("\n");
};

Utils.parseCodeSamples = function (cs) {

  // Split samples by linebreaks.
  var samples = cs.split(/---\n/g),
      out = {},
      self = this;

  // console.log(samples);
  _.each(samples, function (sample, k) {

    var code = sample.match(/```[a-z]*\n[\s\S]*?\n```/g)[0].replace(/```[a-z]*\n*/g, "").trim(),
        key = sample.match(/###[\s\S]*?\n/g)[0].replace(/###\s/, "").trim(),
        lang = sample.match(/```[a-z]*\n/)[0].replace(/```/g, "").trim();

    if (lang === "md") {
      code = code.replace(/\\/g, "");
    }

    out[key] = {
      codeDisplay: key === "colours" ? self.convertToColourBlocks(code) : code,
      code: code,
      lang: lang === "" ? "lang-bash" : "lang-" + lang
    };

  });

  return out;

};

module.exports = Utils;
