const Elevator = require('./elevator');
const Person = require('./person');


/*TESTS*/
/*
var elevator = new Elevator();
var person = new Person('SeppoHovi', 1, 6);
var person2 = new Person('EsaNieminen', 4, 10);
var person3 = new Person('Testi1', 1, 3);
var person4 = new Person('Testi2', 5, 2);
elevator.call(person);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);
elevator.floorUp();
elevator.floorUp();
elevator.floorUp(); //Testi 1 should exit
elevator.floorUp(); //EsaNieminen should enter
elevator.floorUp(); //Testi2 should enter
elevator.floorUp(); //SeppoHovi should exit
elevator.floorDown();
elevator.floorDown();
elevator.floorDown();
elevator.floorDown(); //Testi2 should exit
//console.log(elevator.requests);
console.log('Passengers:', elevator.passengers);*/

var elevator = new Elevator();
var person = new Person('SeppoHovi', 1, 6);
var person2 = new Person('EsaNieminen', 4, 10);
var person3 = new Person('Testi1', 1, 3);
var person4 = new Person('Testi2', 3, 9);
var person5 = new Person('WantsToGoDown', 10, 2);
elevator.call(person);
elevator.call(person2);
elevator.call(person3);
elevator.call(person4);
elevator.call(person5);
elevator.start();
