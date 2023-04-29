function sortArray(arr) {
    // создаем копию исходного массива
    const sortedArr = [...arr];
    
    // создаем массивы для нечетных и четных чисел
    const oddNumbers = sortedArr.filter(num => num % 2 !== 0);
    const evenNumbers = sortedArr.filter(num => num % 2 === 0);
    
    // сортируем нечетные числа по возрастанию
    oddNumbers.sort((a, b) => a - b);
    
    // сортируем четные числа по убыванию
    evenNumbers.sort((a, b) => b - a);
    
    // возвращаем новый массив с отсортированными числами,
    // но при этом сами четные и нечетные числа на своих местах
    return sortedArr.map(num => {
      if (num % 2 !== 0) {
        return oddNumbers.shift();
      } else {
        return evenNumbers.shift();
      }
    });
  }
  
let array = [7, 3, 4, 9, 5, 8, 17];
console.log(sortArray(array));