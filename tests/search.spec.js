import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapper from '../src/index';

describe('Search', () => {
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
        it('should exist the searchAlbums method',()=>{
            expect(spotify.search.albums).to.exist;
        });
        it('should exist the searchArtists method',()=>{
            expect(spotify.search.artists).to.exist;
        });
        it('should exist the searchTracks method',()=>{
            expect(spotify.search.tracks).to.exist;
        });
        it('should exist the searchPlaylists method',()=>{
            expect(spotify.search.playlists).to.exist;
        });
    });
    
    describe('Albums', () => {
        it('should call fetch function', () => {
            const artists = spotify.search.albums('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        })
        it('should call fetch with the correct URL', () => {
            const artists = spotify.search.albums('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=album');
        })
    });
    
    describe('Artists', () => {
        it('should call fetch function', () => {
            const artists = spotify.search.artists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        })
        
        it('should call fetch with the correct URL', () => {
            const artists = spotify.search.artists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=artist');
        })
        
    });
    
    describe('Playlists', () => {
        it('should call fetch function', () => {
            const artists = spotify.search.playlists('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        })
        
        it('should call fetch with the correct URL', () => {
            const artists = spotify.search.playlists('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=playlist');
        })
        
    });
    
    describe('Tracks', () => {
        
        it('should call fetch function', () => {
            const artists = spotify.search.tracks('Incubus');
            expect(fetchedStub).to.have.been.calledOnce;
        })
        
        it('should call fetch with the correct URL', () => {
            const artists = spotify.search.tracks('Incubus');
            expect(fetchedStub).to.have.been.calledWith('https://api.spotify.com/v1/search?q=Incubus&type=track');
        })
        
    });
    
});
