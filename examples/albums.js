global.fetch = require('node-fetch');
import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({token: ''})
const albums = spotify.search.albums('Galantis');

albums.then(data => {
    // console.log(data);
    data.albums.items.map(item => console.log(item.name));
});