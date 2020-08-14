"use strict";

/* jshint node:true */
// const Funnel = require("broccoli-funnel");
// const mergeTrees = require("broccoli-merge-trees");
const path = require("path");

module.exports = {
  name: require("./package").name,

  isDevelopingAddon() {
    return true;
  },

  included() {
    this._super.included.apply(this, arguments);

    const msw = path.dirname(require.resolve("msw/package.json"))
    this.import(`${msw}/lib/umd/index.js`);

    const shim = path.resolve('.', 'vendor/shims/msw.js');
    this.import(shim);
  },
};
