function findCommonElements(arr1, arr2, arr3) {
    var commonElements = [];
    for (var _i = 0, arr1_1 = arr1; _i < arr1_1.length; _i++) {
        var element = arr1_1[_i];
        if ((arr2.includes(element) || arr3.includes(element)) && !commonElements.includes(element)) {
            commonElements.push(element);
        }
    }
    for (var _a = 0, arr2_1 = arr2; _a < arr2_1.length; _a++) {
        var element = arr2_1[_a];
        if (!commonElements.includes(element) && arr3.includes(element)) {
            commonElements.push(element);
        }
    }
    return commonElements;
}
var array1 = [1, 2, 3, 4];
var array2 = [3, 4, 5, 6];
var array3 = [5, 6, 7, 8];
var commonElements = findCommonElements(array1, array2, array3);
console.log(commonElements); // Output: [3, 4, 5, 6]
