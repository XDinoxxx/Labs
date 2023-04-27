function f(x, y) {
    if (typeof y !== 'undefined') {
      // Если y задан, возвращаем сумму x и y
      return x + y;
    } else {
      // Если y не задан, возвращаем функцию, которая ожидает y
      return function (y) {
        return x + y;
      }
    }
  }
  
  console.log(f(2, 3)); // 5
  console.log(f(2)(3)); // 5