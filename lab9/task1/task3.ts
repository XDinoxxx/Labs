function findCommonElements(arr1: any[], arr2: any[], arr3: any[]): any[] {
  const commonElements: any[] = [];

  for (const element of arr1) {
    if ((arr2.includes(element) || arr3.includes(element)) && !commonElements.includes(element)) {
      commonElements.push(element);
    }
  }

  for (const element of arr2) {
    if (!commonElements.includes(element) && arr3.includes(element)) {
      commonElements.push(element);
    }
  }

  return commonElements;
}

const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
const array3 = [5, 6, 7, 8];
const commonElements = findCommonElements(array1, array2, array3);
console.log(commonElements); // Output: [3, 4, 5, 6]
