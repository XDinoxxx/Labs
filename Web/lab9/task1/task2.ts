function findMaxSum(arr: number[]): number {
    let maxSum = arr[0];
    let currentSum = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      currentSum = Math.max(arr[i], currentSum + arr[i]);
      maxSum = Math.max(currentSum, maxSum);
    }
  
    return maxSum;
  }
  
  const arr = [1, 0, -4, 5, 6, -7, -2, 3, 8];
  const maxSum = findMaxSum(arr);
  console.log(`Максимальная сумма: ${maxSum}`);