const park = carPark => car => {
  if (isFull(carPark)) {
    throw 'Car park is full';
  }
  return {
    ...carPark,
    parkedCars: carPark.parkedCars.concat(car)
  }
};

const isFull = carPark => carPark.size == carPark.parkedCars.length

const newCarPark = (size, parkedCars) => {
  let carPark= {};

  carPark.size= size;
  carPark.parkedCars= parkedCars;

  carPark.toString= function() {
    return `Car park size is ${carPark.size}, with ${carPark.parkedCars.length} parked cars`;
  };

  return carPark;
}


module.exports = { park, newCarPark };