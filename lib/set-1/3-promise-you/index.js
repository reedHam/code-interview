const _ = require('lodash');
const when = require('when');
var sleep = require('sleep');

// Complete this function
// requestResults returns a function that returns a object when all promises resolve 
// Return: return the promises.all() function that will return an object
// when the array of promises all reslove
module.exports = function requestResults() {
  
  function requestOne() {
    var defered = when.defer();
    sleep.sleep(1); // sleeps for one second
    defered.resolve(1);
    return defered.promise;
  }

  function requestTwo() {
    var defered = when.defer();
    sleep.sleep(2); // sleeps for two seconds
    defered.resolve(2);
    return defered.promise;
  }
  
  var promises = [requestOne(), requestTwo()];

  return Promise.all(promises).then(values => { // returns an object when promises resovle 
    return {
      requestOneResult: values[0],
      requestTwoResult: values[1]
    };
  });
};
