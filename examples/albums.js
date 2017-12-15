global.fetch = require('node-fetch');
import SpotifyWrapper from '../src/index';

const spotify = new SpotifyWrapper({token: 'BQCsp4N8VAO5P-Oz77db2gOYsqD1AggHCyJrrBcpxhhgeiP6qduQ0AX4r1zb9C5yjTfZzJx54Uzr6ZvV1bbYwnVX-Iez0MId65-CJaNHhPZWrrpcDVnG0MzZSzX0UQAMqnnExVcelAvMSixz'})
const albums = spotify.search.albums('Galantis');

albums.then(data => {
    // console.log(data);
    data.albums.items.map(item => console.log(item.name));
});