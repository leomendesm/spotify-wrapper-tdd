'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = search;
function searcher(type, query) {
  return this.request(this.apiURL + '/search?q=' + query + '&type=' + type);
};

function search() {
  return {
    albums: searcher.bind(this, 'album'),
    artists: searcher.bind(this, 'artist'),
    playlists: searcher.bind(this, 'playlist'),
    tracks: searcher.bind(this, 'track')
  };
}