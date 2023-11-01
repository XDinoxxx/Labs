function findMaxSum(arr) {
    var maxSum = arr[0];
    var currentSum = arr[0];
    for (var i = 1; i < arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(currentSum, maxSum);
    }
    return maxSum;
}
var arr = [1, 0, -4, 5, 6, -7, -2, 3, 8];
var maxSum = findMaxSum(arr);
console.log("\u041C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0441\u0443\u043C\u043C\u0430: ".concat(maxSum));
