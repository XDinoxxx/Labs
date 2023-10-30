import Animal from "./animal";
import Cat from "./cat";
import Dog from "./dog";
import Horse from "./horse";
import Veterinar from "./veterinar";

const animals: Animal[] =[
    new Dog("кость", "дом", "овчарка"),
    new Cat("рыба", "дом", "чёрная"),
    new Horse("сено", "загон", "пони")
];

const veterinar: Veterinar = new Veterinar();

for(const animal of animals){
    veterinar.treatAnimal(animal);
    console.log("Осмотр окончен!");
}