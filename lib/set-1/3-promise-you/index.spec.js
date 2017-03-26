/* eslint no-unused-expressions:0 */
const {expect} = require('chai');
const requestResults = require('.');

describe('Set-1: Value Expand', () => {

  beforeEach(() => {});

  it('Base Test : Ensure object is not empty', () => {

    return requestResults().then(results => {
      expect(results).to.not.be.empty;
    });
  });

  // Write your correctness tests here
  
  // Tests that the function returns the expected object
  it('Expected Value : Ensure the function returns expected result', () => {
    return requestResults().then(results => {
      expect(results).to.eql({
        requestOneResult: 1,
        requestTwoResult: 2,
      });
    });
  });
  
  // Tests that the returned value of the returned function is of type object
  it('Datatype test : Ensure the returned function returns an object', () => {
    return requestResults().then(results => {
      expect(typeof (results)).to.eql('object');
    });
  });
});