"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sliderWithText = exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _index = _interopRequireDefault(require("./index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// import { Card } from './index';
var _default = {
  title: 'Card'
};
exports["default"] = _default;

var sliderWithText = function sliderWithText() {
  return /*#__PURE__*/_react["default"].createElement(_index["default"], {
    passedStr: "sliderText"
  });
}; // export const withText = () => <Card text="hello" />;


exports.sliderWithText = sliderWithText;