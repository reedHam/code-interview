const _ = require('lodash');

// Complete this function
// vehicleMatch prefroms a DFS on the vehicle tree looking for the trim id when found it breaks out
// of the currently running loops and returns the match
//
// parameters: trimId int and, vehicleTree nested object
// returns: object containing the matched vehicle
//
// Note: This function could also be implemted with recursion. 
// I was unsure about the size of the object that could be passed
// if the object is to large it could cause a stack overflow so i opted for this implementation
module.exports = function vehicleMatch(trimId, vehicleTree) {
  var match = {};
  match.trimId = null;
  match.modelId = null;
  match.makeId = null;
  
  _.forOwn(vehicleTree, function(value, make){
    match.makeId = make;
    
    _.forOwn(vehicleTree[make], function(value, model){
      match.modelId = model;
      
      for (var i = 0, j = vehicleTree[make][model].trims.length; i < j; i++){
        if (vehicleTree[make][model].trims[i] === trimId){
          match.trimId = vehicleTree[make][model].trims[i];
          return false; // stop loops
        }
      }// End trims for
    });// End model for
  });// End make for
  
  if (match.trimId === null){ // the trim was not found so return null
    return null;
  }
  return match;
};
