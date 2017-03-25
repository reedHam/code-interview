const _ = require('lodash');
const when = require('when');
var sleep = require('sleep');

// Complete this function
module.exports = function requestResults() {
  
  function requestOne() {
    var defered = when.defer();
    sleep.sleep(1); // sleeps for one second
    defered.resolve(1)
    return defered;
  }

  function requestTwo() {
    var defered = when.defer();
    sleep.sleep(2); // sleeps for two seconds
    defered.resolve(2)
    return defered;
  }
  
  var deferreds = [requestOne(), requestTwo()];

  return when.all(deferreds);
};
