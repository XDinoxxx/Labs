function isPangram(sentence: string): boolean {
    sentence = sentence.toLowerCase();
    
    let letters: string[] = [];
    
    for (let i = 0; i < sentence.length; i++) {
      let char = sentence[i];
      if (/[а-яё]/.test(char)) {
        if (!letters.includes(char)) {
          letters.push(char);
        }
      }
    }
  
    return letters.length === 33;
  }
  
  const sentence1 = "В чащах южных сухих долах";
  const sentence2 = "Текст, который не является панграммой";
  const sentence3 = "ёйцукенгшщзхъэждлорпавыфячсмитьбю"
  
  console.log(isPangram(sentence1)); 
  console.log(isPangram(sentence2)); 
  console.log(isPangram(sentence3));