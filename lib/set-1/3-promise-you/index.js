const _ = require('lodash');
const when = require('when');
var sleep = require('sleep');

// Complete this function
// requestResults returns a function that returns a object when all promises resolve 
// Return: The promises.all() function that will return an object when the array of promises all reslove
module.exports = function requestResults() {
  
  function requestOne() {
    var defered = when.defer();
    sleep.msleep(100); // sleeps for 100 ms
    defered.resolve(1);
    return defered.promise;
  }

  function requestTwo() {
    var defered = when.defer();
    sleep.msleep(200); // sleeps for 200 ms
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