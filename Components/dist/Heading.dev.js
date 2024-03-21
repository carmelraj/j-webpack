"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./Heading.scss");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Heading =
/*#__PURE__*/
function () {
  function Heading() {
    _classCallCheck(this, Heading);
  }

  _createClass(Heading, [{
    key: "render",
    value: function render() {
      var head = document.createElement("h2");
      head.innerHTML = "new heading";
      head.classList.add("heading");
      var body = document.querySelector("body");
      body.append(head);
    }
  }]);

  return Heading;
}();

var _default = Heading;
exports["default"] = _default;