import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapperTdd from '../src/index';

describe('Album', () => {
    let stubedFetch, promise, spotify;
    beforeEach( () => {
        spotify = new SpotifyWrapperTdd({token: 'foo'});
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });
    
    afterEach( () => {
       stubedFetch.restore(); 
    });
    
    describe(('smoke tests'), ()=>{
        
        it('should have getAlbum method', () => {
            expect(spotify.album.getAlbum).to.exist;
        })
        
        it('should have getAlbums method', () => {
            expect(spotify.album.getAlbums).to.exist;
        })
        
        it('should have getTracks method', ()=>{
            expect(spotify.album.getTracks).to.exist;
        })
    })
    
    describe('getAlbum', ()=>{
        it('should call fetch method', ()=>{
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getAlbum('asdadsadasd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asdadsadasd');
            const album2 = spotify.album.getAlbum('asd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asd');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
        describe('getAlbums', ()=>{
        it('should call fetch method', ()=>{
            const album = spotify.album.getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getAlbums(['asdadsadasd', 'fgh']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=asdadsadasd,fgh');
            const album2 = spotify.album.getAlbums(['asd','dsa']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=asd,dsa');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = spotify.album.getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
        describe('getTracks', ()=>{
        it('should call fetch method', ()=>{
            const album = spotify.album.getTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = spotify.album.getTracks('asdadsadasd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asdadsadasd/tracks');
            const album2 = spotify.album.getTracks('asd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asd/tracks');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = spotify.album.getTracks('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
});