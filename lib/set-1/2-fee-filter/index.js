const _ = require('lodash');

// Complete this function

// feeFilter filters a list of fees based on the key value pairs in vehicle
// all key value pairs need to strictly equal the equilent in vehicle or null
// Parameters: fees as an object array and, a vehicle object
// returns: a filtered array of fee objects
module.exports = function feeFilter(fees, vehicle) {
  return _.filter(fees, function(fee){
      return ((fee.vehicle_type  === vehicle.vehicle_type || fee.vehicle_type === null) &&
              (fee.province_id   === vehicle.province_id  || fee.province_id  === null) &&
              (fee.model_id      === vehicle.model_id     || fee.model_id     === null));
  });
};
