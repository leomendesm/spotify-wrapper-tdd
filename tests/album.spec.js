import chai, { expect } from 'chai';
import { getAlbum, getAlbums, getAlbumTracks } from '../src/album';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch, promise;
    
    beforeEach( () => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });
    
    afterEach( () => {
       stubedFetch.restore(); 
    });
    
    describe(('smoke tests'), ()=>{
        
        it('should have getAlbum method', () => {
            expect(getAlbum).to.exist;
        })
        
        it('should have getAlbums method', () => {
            expect(getAlbums).to.exist;
        })
        
        it('should have getAlbumTracks method', ()=>{
            expect(getAlbumTracks).to.exist;
        })
    })
    
    describe('getAlbum', ()=>{
        it('should call fetch method', ()=>{
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = getAlbum('asdadsadasd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asdadsadasd');
            const album2 = getAlbum('asd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asd');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
        describe('getAlbums', ()=>{
        it('should call fetch method', ()=>{
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = getAlbums(['asdadsadasd', 'fgh']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=asdadsadasd,fgh');
            const album2 = getAlbums(['asd','dsa']);
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/?ids=asd,dsa');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
        describe('getAlbumTracks', ()=>{
        it('should call fetch method', ()=>{
            const album = getAlbumTracks();
            expect(stubedFetch).to.have.been.calledOnce;
        });
        it('should call fetch with the correct URL', () => {
            const album = getAlbumTracks('asdadsadasd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asdadsadasd/tracks');
            const album2 = getAlbumTracks('asd');
            expect(stubedFetch).to.have.been.calledWith('https://api.spotify.com/v1/albums/asd/tracks');
        });
        it('should return the correct data from Promise', () => {
           promise.resolves({ album: 'name'});
           const album = getAlbumTracks('4aawyAB9vmqN3uQ7FjRGTy');
           expect(album.resolveValue).to.be.eql({ album: 'name'});
        });
    });
});