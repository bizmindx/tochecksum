"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toChecksumAddress = void 0;

var _keccak = _interopRequireDefault(require("keccak"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var toChecksumAddress = function toChecksumAddress(address) {
  address = address.toLowerCase().replace('0x', '');
  var hash = (0, _keccak["default"])('keccak256').update(address).digest('hex');
  var ret = '0x';

  for (var i = 0; i < address.length; i++) {
    if (parseInt(hash[i], 16) >= 8) {
      ret += address[i].toUpperCase();
    } else {
      ret += address[i];
    }
  }

  return ret;
};

exports.toChecksumAddress = toChecksumAddress;
