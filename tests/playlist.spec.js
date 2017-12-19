import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Playlist', () => {
    let fetchedStub, promise, spotify; 
    beforeEach( () => {
        spotify = new SpotifyWrapper({token: 'foo'});
        fetchedStub = sinon.stub(global, 'fetch');
        promise = fetchedStub.returnsPromise();
    });
    afterEach( () =>{
        fetchedStub.restore(); 
    });
    describe('smoke tests',()=>{
        it('should exist the searchPlaylistsTracks method',()=>{
            expect(spotify.playlist.getTracks).to.exist;
        });
    });
    describe('getTracks method', () => {
        it('should call fetch function', () => {
            const tracks = spotify.playlist.getTracks();
            expect(fetchedStub).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const tracks = spotify.playlist.getTracks('foo', 'bar', 0);
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/users/foo/playlists/bar/tracks?limit=100&offset=0');
        });
    });
    
});