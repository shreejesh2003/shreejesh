// console.log("hello");

// var x=10
// if(x>5){
//     console.log("x is greater than 5")
// }
// else{
//     comsole.log("xcd ")
// }
// var arr = [1, 2, 3, 4, 5]
// var choice = 1
// switch (choice) {
//     case 1:
//         console.log("choice is 1");
//     case 2:
//         console.log("choice is 2")
//     case 3:
//         console.log("choice is 3")
//     default:
//         console.log("No choice selected");

// }
// function factorial(num){
//     var fac=1
//     for(let i=num;i>1;i--)
//     {
//          fac=fac*i
//     }
//     return fac
// }
// const fact=factorial(8)
// console.log(fact)

const arr=[1,2,3,4,5,6,7,8,9]
var sum=0
for(let i=0;i<arr.length;i++)
{
    if((arr[i]%2)==0)
    {
        sum=sum+arr[i]
    }
}
console.log(sum)