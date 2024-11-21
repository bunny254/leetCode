
const a=[17,28,30]
const b=[99,16,8]

const compareTriplets=(a,b)=>{
    aliceScore = 0;
    bobScore = 0;

    for(let i=0; i<a.length; i++){
        if (a[i] >b[i]){
            aliceScore +=1
        }if(b[i]>a[i]){
            bobScore +=1
        }
    }
    return [aliceScore, bobScore]
}


console.log(compareTriplets(a,b))

