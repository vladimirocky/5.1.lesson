class Car{
    constructor(options) {
        this.speed = options.speed || 45;
        this.road_type = options.road_type || 'asphalt';
    }
}
class Bicycle {
    constructor(options) {
        this.speed = options.speed || 20;
        this.road_type = options.road_type || 'ground';
    }
}
class TransportFactory {
    createTransport(options) {
        if(options.transportType === 'car') {
            return new Car(options);
        } else if(options.transportType === 'bicycle') {
            return new Bicycle(options);
        }
    }
}

const path = {
    distance : {
        'ground':135,
        'asphalt':213
    }
}

const factory = new TransportFactory();
// Фабрика
const bicycle = factory.createTransport({
    transportType: 'bicycle',
})
const car = factory.createTransport({
    transportType: 'car'
})
// Bicycle { speed: 20, road_type: 'ground' }
console.log(bicycle);
// Car { speed: 45, road_type: 'asphalt' }
console.log(car)

let bi_distance = path.distance[bicycle.road_type];
let bi_time = bi_distance / bicycle.speed;

let car_distance = path.distance[car.road_type];
let car_time = car_distance / car.speed;

console.log('bicycle time =', bi_time)
console.log('car time = ', car_time)