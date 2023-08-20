const arr=[10,20,25,30,90,80,84];
var max=0;
for(let i=0;i<arr.length;i++){
    if(max<arr[i]){
        max=arr[i];
    }
    
}
console.log("maximum is "+max)