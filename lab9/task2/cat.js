"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal_1 = require("./animal");
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat(food, location, color) {
        var _this = _super.call(this, food, location) || this;
        _this.color = color;
        return _this;
    }
    Cat.prototype.makeNoise = function () {
        console.log("Кошка мяукает");
    };
    Cat.prototype.eat = function () {
        console.log("Кошка кушает " + this.food);
    };
    return Cat;
}(animal_1.default));
exports.default = Cat;
