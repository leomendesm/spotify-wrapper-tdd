'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* global fetch */


var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _album = require('./album');

var _album2 = _interopRequireDefault(_album);

var _playlist = require('./playlist');

var _playlist2 = _interopRequireDefault(_playlist);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SpotifyWrapperTdd = function () {
  function SpotifyWrapperTdd(options) {
    _classCallCheck(this, SpotifyWrapperTdd);

    this.apiURL = options.apiURL || _config2.default;
    this.token = options.token;
    this.album = _album2.default.bind(this)();
    this.search = _search2.default.bind(this)();
    this.playlist = _playlist2.default.bind(this)();
  }

  _createClass(SpotifyWrapperTdd, [{
    key: 'request',
    value: function request(url) {
      var headers = {
        headers: {
          Authorization: 'Bearer ' + this.token
        }
      };
      return fetch(url, headers).then(_utils2.default);
    }
  }]);

  return SpotifyWrapperTdd;
}();

exports.default = SpotifyWrapperTdd;