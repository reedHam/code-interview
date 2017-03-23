const _ = require('lodash');

// Complete this function
// Prefrom a DFS 
// This function could also be done with recursion but i was unsure about the size of the
// object if it is to large it could cause a stack overflow so i opted for this implementation
module.exports = function vehicleMatch(trimId, vehicleTree) {

  
  for (var company in vehicleTree){
    if(vehicleTree.hasOwnProperty(company)){ // check if property is in the object
      for(var model in vehicleTree[company]){
        if(vehicleTree[company].hasOwnProperty(model)){
          for (var trim in vehicleTree[company][model]){
            if(vehicleTree[company][model].hasOwnProperty(trim)){
              for (var i = 0; i < vehicleTree[company][model][trim].length; i++){
                if (vehicleTree[company][model][trim][i] == trimId){
                  console.log(vehicleTree[company][model][trim][i]);
                }
              }
            }
          }// Third for
        }
      }// Second for
    }
  } // First for

};
