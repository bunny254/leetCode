/*

Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24

*/

const arr = [3, 1, 5, 7, 9]

const findMinMax = (arr)=>{

    arr.sort((a,b)=>{
        return a-b       
    })

    let sumMax = 0
    let sumMin = 0

    for(let i=1; i<arr.length; i++){
        sumMax += arr[i]
    }

    for(let j=0; j<arr.length-1; j++){
        sumMin += arr[j]
    }
    
    console.log(sumMin, sumMax);
    /*
    let initialTotal = 0

    for(let i=0; i<arr.length; i++){
        initialTotal +=arr[i]
    }
    //console.log(initialTotal);

    let min 
    for(let j=0; j<arr.length; j++){
        min = Math.min(initialTotal-arr[j])
    }

    let max =0
    for(let k=1; k<arr.length; k++){
        max= Math.max(max, initialTotal-arr[k])
    }
    console.log(min, max);
    */
    
}

console.log(findMinMax(arr));