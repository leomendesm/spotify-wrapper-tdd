"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = playlist;
function playlist() {
  var _this = this;

  return {
    getTracks: function getTracks(user, id, offset) {
      return _this.request(_this.apiURL + "/users/" + user + "/playlists/" + id + "/tracks?limit=100&offset=" + offset);
    }
  };
}