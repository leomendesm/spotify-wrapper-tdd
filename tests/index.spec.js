import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';
chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

import SpotifyWrapperTdd from '../src/index';

describe('SpotifyWrapperTdd Library', () => {
  let stubedFetch, promise;
  
  beforeEach( () => {
      stubedFetch = sinon.stub(global, 'fetch');
      promise = stubedFetch.returnsPromise();
  });
  
  afterEach( () => {
     stubedFetch.restore(); 
  });
  it('should create an instance of SpotifyWrapperTdd', () => {
    const spotify = new SpotifyWrapperTdd({});
    expect(spotify).to.be.an.instanceof(SpotifyWrapperTdd);
  });
  it('should receive apiURL as an option', () => {
    const spotify = new SpotifyWrapperTdd({
      apiURL: 'asd',
    });
    expect(spotify.apiURL).to.be.equal('asd');
  });
  it('should use default url if not provided', () => {
    const spotify = new SpotifyWrapperTdd({});
    expect(spotify.apiURL).to.be.equal('https://api.spotify.com/v1');
  });
  it('should receive token as an option', () => {
    const spotify = new SpotifyWrapperTdd({
      token: 'foo',
    });
    expect(spotify.token).to.be.equal('foo');
  });
  describe('request method', () => {
    it('should have request method', ()=> {
      const spotify = new SpotifyWrapperTdd({});
      expect(spotify.request).to.exist;
    });
    it('should call fetch when request', () => {
      const spotify = new SpotifyWrapperTdd({
        token: 'foo'
      });
      spotify.request('url');
      expect(stubedFetch).to.been.calledOnce;
    });
    it('should call fetch with the correct URL', () => {
      const spotify = new SpotifyWrapperTdd({
        token: 'foo'
      });
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url');
    });
    
    it('should call fetch with the correct header', () => {
      const spotify = new SpotifyWrapperTdd({
        token: 'foo'
      });
      const headers = {
        headers: {
          'Authorization': 'Bearer ' + spotify.token
        }  
      };
      spotify.request('url');
      expect(stubedFetch).to.have.been.calledWith('url', headers);
    });
  });
});