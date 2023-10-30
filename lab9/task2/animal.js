"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Animal = /** @class */ (function () {
    function Animal(food, location) {
        this.food = food;
        this.location = location;
    }
    Animal.prototype.makeNoise = function () {
        console.log("Животное спит!");
    };
    Animal.prototype.eat = function () {
        console.log("Животное ест " + this.food);
    };
    Animal.prototype.sleep = function () {
        console.log("Животное спит, в функции sleep");
    };
    return Animal;
}());
exports.default = Animal;
