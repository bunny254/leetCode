let arr = [
    [1, 2, 3 ],
    [4,  5, 6],
    [7, 8, 9]
 ]

 /*
console.log(arr.length);

console.log(arr[1][0]+
            arr[2][1]+
            arr[3][2]
)
            */
const sum = (arr)=>{
    let sumx=0
    for(let i=0; i<arr.length; i++){
        sumx=sumx+(arr[i][i])
        //console.log(arr[i][i])
    }
//console.log(sumx)
 let sumy =0
    for( let j=0; j<arr.length;  j++){
        sumy +=(arr[j][(arr.length-1)-j])
        //console.log(arr[j][(arr.length-1)-j])
    }
//console.log(sumy)
//console.log(arr[(arr.length-1)/2][(arr.length-1)/2])

if((arr.length-1)%2 ==0){
    return (sumy+sumx-(arr[(arr.length-1)/2][(arr.length-1)/2]))
}else{
    return sumx + sumy
}

}

console.log(sum(arr));