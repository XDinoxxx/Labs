function isPangram(sentence) {
    sentence = sentence.toLowerCase();
    var letters = [];
    for (var i = 0; i < sentence.length; i++) {
        var char = sentence[i];
        if (/[а-яё]/.test(char)) {
            if (!letters.includes(char)) {
                letters.push(char);
            }
        }
    }
    return letters.length === 33;
}
var sentence1 = "В чащах южных сухих долах";
var sentence2 = "Текст, который не является панграммой";
var sentence3 = "ёйцукенгшщзхъэждлорпавыфячсмитьбю";
console.log(isPangram(sentence1));
console.log(isPangram(sentence2));
console.log(isPangram(sentence3));
