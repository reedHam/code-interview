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
    vehicle = {
      province_id: 'AB',
      model_id: 1,
      vehicle_type: 'N'
    };

  });


  it('Base Test : Function returns populated array', () => {
    let result = feeFilter(fees, vehicle);
    expect(result.length).to.be.above(0);
  });


  // Write your correctness tests here
  
  it('Expected array Test : Function returns expected array', () => {
    let result = feeFilter(fees, vehicle);
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
});
