import Animal from "./animal";

class Veterinar{
    treatAnimal(animal: Animal) : void{
        console.log("Животное ест " + animal.food);
        console.log("Животное находится " + animal.location);
    }
}

export default Veterinar;