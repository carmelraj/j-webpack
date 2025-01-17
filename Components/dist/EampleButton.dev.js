"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("./ExampleButton.css");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ExampleButton =
/*#__PURE__*/
function () {
  function ExampleButton() {
    _classCallCheck(this, ExampleButton);
  }

  _createClass(ExampleButton, [{
    key: "render",
    value: function render() {
      var button = document.createElement("button");
      button.innerHTML = "Press me!";
      button.classList.add("green-button");
      var body = document.querySelector("body");
      body.append(button);
    }
  }]);

  return ExampleButton;
}();

var _default = ExampleButton;
exports["default"] = _default;