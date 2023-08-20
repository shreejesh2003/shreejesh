function countEvenNumbers(arr) {

    // Your code here
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if ((arr[i] % 2) == 0) {
            count++;
        }
    }
    console.log("Count of Even Number is " + count);
}
// Example usage
console.log(countEvenNumbers([1, 2, 3, 4, 5, 6]));
// Output: 3
console.log(countEvenNumbers([10, 21, 32, 45]));
// Output: 2
console.log(countEvenNumbers([7, 9, 11, 13]));
    // Output: 0
