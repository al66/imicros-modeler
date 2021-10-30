/**
 * @license MIT, imicros.de (c) 2021 Andreas Leinen
 *
 */
"use strict";

var _Modeler = _interopRequireDefault(require("bpmn-js/lib/Modeler"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Modeler = function Modeler(options) {
  _classCallCheck(this, Modeler);

  this.modeler = new _Modeler["default"](options);
  return this.modeler;
};

module.exports = Modeler;