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
  
  it('Expected Value : Ensure function returns expected result', () => {

    return requestResults().then(results => {
      expect(results).to.eql({
        requestOneResult: 1,
        requestTwoResult: 2,
      });
    });
  });
});
