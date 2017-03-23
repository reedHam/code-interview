const _ = require('lodash');

// Complete this function
// Prefrom a DFS 
// This function could also be done with recursion (and would be much more readable) but i was unsure about the
// size of the object if it is to large it could cause a stack overflow so i opted for this implementation
module.exports = function vehicleMatch(trimId, vehicleTree) {
  var match = {};
  match.trimId = null;
  match.modelId = null;
  match.makeId = null;
  
  for (var make in vehicleTree){
    if(vehicleTree.hasOwnProperty(make)){ // check if property is in the object
      match.makeId = make;
      
      for(var model in vehicleTree[make]){
        if(vehicleTree[make].hasOwnProperty(model)){
          match.modelId = model;
          
          for (var i = 0, j = vehicleTree[make][model].trims.length; i < j; i++){
            if (vehicleTree[make][model].trims[i] == trimId){
              match.trimId = vehicleTree[make][model].trims[i];
              return match;
            }
          }// End trims for
        }
      }// End model for
    }
  } // End make for
  return null;
};
