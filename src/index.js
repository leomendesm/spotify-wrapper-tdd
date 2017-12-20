/* global fetch */
import search from './search';

import album from './album';

import playlist from './playlist';

import API_URL from './config';

import toJson from './utils';

export default class SpotifyWrapperTdd {
  constructor(options) {
    this.apiURL = options.apiURL || API_URL;
    this.token = options.token;
    this.album = album.bind(this)();
    this.search = search.bind(this)();
    this.playlist = playlist.bind(this)();
  }
  request(url) {
    const headers = {
      headers: {
        Authorization: `Bearer ${this.token}`,
      },
    };
    return fetch(url, headers).then(toJson);
  }
}
