function miniMaxSum(arr) {
   const totalSum = arr.reduce((acc, num) => acc + num);
   const min = Math.min(...arr);
   const max = Math.max(...arr);
   
   const minSum = totalSum - max;
   const maxSum = totalSum -min;
   
   console.log(minSum, maxSum);
}
