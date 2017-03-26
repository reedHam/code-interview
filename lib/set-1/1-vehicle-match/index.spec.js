const {expect} = require('chai');
const vehicleMatch = require('.');

describe('Set-1: Vehicle Match', () => {
  let vehicles;
  beforeEach(() => {
    vehicles = {
      toyota: {
        rav4: {
          trims: [0]
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
  
  // Tests that the function returns expected keys when accesing
  // from the beginning of an array with mutiple values
  it('Array beginning Test : Function returns expected keys from beging of array', () => {
    let vehicle = vehicleMatch(8, vehicles);
    expect(vehicle).to.eql({
      trimId: 8,
      modelId: 'rx',
      makeId: 'lexus'
    });
  });
  
  // Tests that the function returns expected keys when accesing
  // from the middle of an array with mutiple values
  it('Array mid Test : Function returns expected keys from middle of array', () => {
    let vehicle = vehicleMatch(7, vehicles);
    expect(vehicle).to.eql({
      trimId: 7,
      modelId: 'rx',
      makeId: 'lexus'
    });
  });
  
  // Tests that the function returns expected keys when accesing
  // from the end of an array with mutiple values
  it('Array end Test : Function returns expected keys from end of array', () => {
    let vehicle = vehicleMatch(5, vehicles);
    expect(vehicle).to.eql({
      trimId: 5,
      modelId: 'rx',
      makeId: 'lexus'
    });
  });

  // Tests that the function returns an object datatype
  it('Datatype test : Function returns an object', () => {
    let vehicle = vehicleMatch(5, vehicles);
    expect(typeof (vehicle)).to.eql('object');
  });
  
  // Null tests
  
   // Tests that the function returns null when a trim is not found in an object
  it('null Test : Function returns null when trimId not found', () => {
    let vehicle = vehicleMatch(10, vehicles);
    expect(vehicle).to.eql(null);
  });
  
  // Tests that the function returns null when when an incorrect datatype is passed
  it('Incorrect id Test : Function returns null when incorrect datatype is passed', () => {
    let vehicle = vehicleMatch("5", vehicles);
    expect(vehicle).to.eql(null);
  });
  
  // Tests that the function returns null when an when empty object is passed
  it('Empty object Test : Function returns null when empty object is passed', () => {
    let vehicle = vehicleMatch(4, {});
    expect(vehicle).to.eql(null);
  });
});
