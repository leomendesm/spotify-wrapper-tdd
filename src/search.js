/* global fetch */
import { API_URL } from './config';

import { toJson } from './utils';

export const search = (query, type) => fetch(`${API_URL}/search?q=${query}&type=${type}`).then(toJson);

export const searchAlbums = query => search(query, 'album');

export const searchArtists = query => search(query, 'artist');

export const searchPlaylists = query => search(query, 'playlist');

export const searchTracks = query => search(query, 'track');
