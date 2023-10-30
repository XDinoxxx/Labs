"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Veterinar = /** @class */ (function () {
    function Veterinar() {
    }
    Veterinar.prototype.treatAnimal = function (animal) {
        console.log("Животное ест " + animal.food);
        console.log("Животное находится " + animal.location);
    };
    return Veterinar;
}());
exports.default = Veterinar;
