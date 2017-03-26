const {expect} = require('chai');
const feeFilter = require('.');

describe('Set-1: Fee Filter', () => {
  let fees;
  let vehicle;

  beforeEach(() => {

    fees = [
      {
        province_id: 'AB',
        model_id: null,
        vehicle_type: null
      },
      {
        province_id: null,
        model_id: 1,
        vehicle_type: 'N'
      },
      {
        province_id: null,
        model_id: 1,
        vehicle_type: 'C'
      }
    ];
    vehicle = [
      {
      province_id: 'AB',
      model_id: 1,
      vehicle_type: 'N'
      },
      {
      province_id: '0',
      model_id: 0,
      vehicle_type: '0'
      },
    ];

  });


  it('Base Test : Function returns populated array', () => {
    let result = feeFilter(fees, vehicle[0]);
    expect(result.length).to.be.above(0);
  });


  // Write your correctness tests here
  
  // Tests that the function returns the expected array
  it('Expected Array Test : Function returns expected array', () => {
    let result = feeFilter(fees, vehicle[0]);
    expect(result).to.eql([
      {
        province_id: 'AB',
        model_id: null,
        vehicle_type: null
      },
      {
        province_id: null,
        model_id: 1,
        vehicle_type: 'N'
      }
    ]);
  });
  
  
  // Tests that the function returns the expected empty array when no fees are found
  it('No Fees Found Test : Function returns expected empty array', () => {
    let result = feeFilter(fees, vehicle[1]);
    expect(result).to.eql([]);
  });
  
  // Tests that the function returns the expected empty array when no fees are passed
  it('Empty Fees Test : Function returns expected empty array', () => {
    let result = feeFilter({}, vehicle[0]);
    expect(result).to.eql([]);
  });
});
