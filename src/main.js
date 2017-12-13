export const search = (query, type) => { 
    return fetch(`https://api.spotify.com/v1/search?q=${query}&type=${type}`)
    .then(data => data.json()) };
    
export const searchAlbums = (query) =>  search(query, 'album')
    
export const searchArtists = (query, type) => search(query, 'artist')
    
export const searchPlaylists = (query, type) => search(query, 'playlist')
    
export const searchTracks = (query, type) => search(query, 'track')