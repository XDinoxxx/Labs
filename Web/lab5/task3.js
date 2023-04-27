function uniqueValues() {
    let uniqueArr = [];
    for (let i = 0; i < arguments.length; i++) {
      if (!uniqueArr.includes(arguments[i])) {
        uniqueArr.push(arguments[i]);
      }
    }
    return uniqueArr;
  }
  
  console.log(uniqueValues(1, 1, 2, 2, 3, 4, 5, 5)); // Output: [1, 2, 3, 4, 5]
  console.log(uniqueValues("apple", "banana", "banana", "cherry")); // Output: ["apple", "banana", "cherry"]