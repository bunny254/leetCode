/*

You are in charge of the cake for a child's birthday. You have decided the cake will have one candle for each year of their total age. They will only be able to blow out the tallest of the candles. Count how many candles are tallest.

Example

candles = [4,4,1,3]

The maximum height candles are  units high. There are  of them, so return .

*/

const candles = [4,4,1,3,4]
//1,3,4,4,4

const birthdayCakeCandles=(candles)=>{
    let sorted = candles.sort((a, b) =>{
        return (a-b)
    })
    //console.log(sorted);

    let target = Math.max(...sorted)

    //console.log(target)
    let count = 0;
    for(let i =0; i<candles.length; i++){
        if(candles[i]===target){
            count +=1
        }
    }
    return count;

}

console.log(birthdayCakeCandles(candles));