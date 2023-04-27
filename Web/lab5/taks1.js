function stringsEqual(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    for (let i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i]) {
        return false;
      }
    }
    return true;
  }
  
  // Примеры использования:
  console.log(stringsEqual('abc', 'abc')); // true
  console.log(stringsEqual('abc', 'cba')); // false
  console.log(stringsEqual('abc', 'ab')); // false
  