"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var cat_1 = require("./cat");
var dog_1 = require("./dog");
var horse_1 = require("./horse");
var veterinar_1 = require("./veterinar");
var animals = [
    new dog_1.default("кость", "дом", "овчарка"),
    new cat_1.default("рыба", "дом", "чёрная"),
    new horse_1.default("сено", "загон", "пони")
];
var veterinar = new veterinar_1.default();
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    veterinar.treatAnimal(animal);
    console.log("Осмотр окончен!");
}
