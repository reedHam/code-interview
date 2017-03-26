const _ = require('lodash');
const when = require('when');
const sinon = require('sinon');
require('sinon-as-promised');

// Complete this function
// requestResults returns a function that returns a object when all promises resolve 
// Return: The promises.all() function that will return an object when the array of promises all reslove
module.exports = function requestResults() {
  
  let requestOne = sinon.stub().resolves(1);
  let requestTwo = sinon.stub().resolves(2);

  var promises = [requestOne(), requestTwo()];

  return when.all(promises).then(values => { // returns an object when promises resovle this could also be done using Promise.all()
    return {
      requestOneResult: values[0],
      requestTwoResult: values[1]
    };
  });
};
