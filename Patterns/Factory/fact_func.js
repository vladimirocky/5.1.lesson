/**
 * Пускай у нас есть:
 * 1. константные значения -
 * @param distance[n] - расстояние от точки A до точки B
 * 2. объекты
 * @param transport - какой-то вид транспорта
 *
 * Создадим фабрику функций подсчета времени
 *
 */
const distance1 = 300;
const distance2 = 500;
const distance3 = 200;

// любые объекты
const bicycle = {
    speed : 20
}
const car = {
    speed : 60
}
const bike = {
    speed : 45
}

// замыкание
function factory(transport){
    return (dist) => { return dist / transport.speed }
}

// непосредственно сама фабрика
let bicycleComputed = factory(bicycle)
let carComputed = factory(car)
let bikeComputed = factory(bike)

// использование фабрики
console.log('car time 1 path =', carComputed(distance1))
// car time 1 path = 5
console.log('car time 2 path =', carComputed(distance2))
// car time 2 path = 8.333333333333334
console.log('bike time 1 path =', bikeComputed(distance1))
// bike time 1 path = 6.666666666666667
console.log('bicycle time 3 path =', bicycleComputed(distance3))
// bicycle time 3 path = 10



