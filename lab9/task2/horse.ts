import Animal from "./animal";

class Horse extends Animal{
    breed: string;

    constructor(food: string, location: string, breed: string){
        super(food, location);
        this.breed = breed;
    }

    makeNoise(): void {
        console.log("Лошадь ржёт");
    }

    eat(): void {
        console.log("Лошадь кушает " + this.food);
    }
}

export default Horse;