function printIndexesWithDelay(arr) {
    for (let i = 0; i < arr.length; i++) {
      setTimeout(function(x) {
        console.log("Индекс элемента " + arr[x] + ": " + x);
      }, 3000 * i, i); 
    }
  }
  
  let arr = [10, 20, 30, 40, 50];
  printIndexesWithDelay(arr);