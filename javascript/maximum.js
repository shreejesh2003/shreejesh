function findMaxValue(arr) {
    // Your code here
    
    var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }

    }
    
    console.log("maximum is " + max);
}
// Example usage
console.log(findMaxValue([5, 9, 2, 6, 3]));
// Output: 9

console.log(findMaxValue([-10, -5, -2, -8]));
// Output: -2

console.log(findMaxValue([100, 87, 92, 105]));
// Output: 105

