const newCarPark = require('./carPark').newCarPark
const park = require('./carPark').park

describe('car park', () => {
  it('parks a car if its empty', () => {
    let car = {};
    let emptyCarPark = newCarPark(size = 1, parkedCars = []);
    expect(park(emptyCarPark)(car).parkedCars).toEqual([car])
  })

  it('should not park a car if its full', () => {
    let car = {};
    let fullCarPark = newCarPark(size = 1, parkedCars = [car]);
    let anotherCar = {};
    expect(() => park(fullCarPark)(anotherCar)).toThrow('Car park is full');
  });
});