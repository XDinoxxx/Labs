import Animal from "./animal";

class Cat extends Animal{
    color: string;

    constructor(food: string, location: string, color: string){
        super(food, location);
        this.color = color;
    }

    makeNoise(): void {
        console.log("Кошка мяукает");
    }

    eat(): void {
        console.log("Кошка кушает " + this.food);
    }
}

export default Cat;