import Animal from "./animal";

class Dog extends Animal{
    breed: string;

    constructor(food: string, location: string, breed: string){
        super(food,location);
        this.breed = breed;
    }

    makeNoise(): void {
        console.log("Собачка делает гав-гав");
    }

    eat(): void {
        console.log("Собака ест " + this.food);
    }
}

export default Dog