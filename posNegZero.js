const arr = [1, 1, 0, -1, -1]

const negPosZero= (arr)=>{
    let p=0
    let n=0
    let z=0
    
    for(let i=0; i<arr.length; i++){
        if(arr[i]>=1){
            p+=1
        }if(arr[i]<0){
            n+=1
        }if(arr[i]=== 0){
            z+=1
        }
        }
    
    let final = [(p/arr.length).toFixed(6),(n/arr.length).toFixed(6),(z/arr.length).toFixed(6)]
    
    console.log(final[0])
    console.log(final[1])
    console.log(final[2])
    /*
    const finalOut=(final)=>{
        return final.forEach((n) => {
            console.log(n)
        })
    }
    */
   //return final;
}

console.log(negPosZero(arr))