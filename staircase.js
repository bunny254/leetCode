/*

Staircase detail

This is a staircase of size :

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

*/

const n=4

//console.log('#'.repeat(n))

const staircase=(n)=>{
    let final = []
    for(let i=1; i<=n; i++){
        if(i!=n){
            final.push(' '.repeat(n-i)+'#'.repeat(i))   
        }else{
        final.push('#'.repeat(i))
        }
    }

    return final;
}

console.log(staircase(n))