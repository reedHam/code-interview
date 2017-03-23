const {expect} = require('chai');
const vehicleMatch = require('.');

describe('Set-1: Vehicle Match', () => {
  let vehicles;

  beforeEach(() => {
    vehicles = {
      toyota: {
        rav4: {
          trims: [1]
        },
        camry: {
          trims: [2]
        }
      },
      lexus: {
        rcf: {
          trims: [3, 4]
        },
        rx: {
          trims: [8, 7, 6, 5]
        }
      }
    };
  });

  it('Base Test : Function returns expected keys', () => {
    let vehicle = vehicleMatch(4, vehicles);
    expect(vehicle).to.eql({
      trimId: 4,
      modelId: 'rcf',
      makeId: 'lexus'
    });
  });


  // Write your correctness tests here
  // Tests that the function returns expected keys when accesing from an array with mutiple values
  it('Large array Test : Function returns expected keys from large array', () => {
    let vehicle1 = vehicleMatch(8, vehicles);
    let vehicle2 = vehicleMatch(5, vehicles);
    expect(vehicle1).to.eql({
      trimId: 8,
      modelId: 'rx',
      makeId: 'lexus'
    });
    
    expect(vehicle2).to.eql({
      trimId: 5,
      modelId: 'rx',
      makeId: 'lexus'
    });
  });
  
  // Tests that the function returns null when a trim is not found in an object
  it('null Test : Function returns null when trimId not found', () => {
    let vehicle = vehicleMatch(0, vehicles);
    expect(vehicle).to.eql(null);
  });
  
  // Tests that the function returns null when when an incorrect datatype is passed
  it('Incorrect id Test : Function returns null when incorrect datatype is passed', () => {
    let vehicle = vehicleMatch("", vehicles);
    expect(vehicle).to.eql(null);
  });
  
  // Tests that the function returns null when an when empty object is passed
  it('Empty object id Test : Function returns null when empty object is passed', () => {
    let emptyObject = {};
    let vehicle = vehicleMatch("", emptyObject);
    expect(vehicle).to.eql(null);
  });
  
});
