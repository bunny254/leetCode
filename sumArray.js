let arr = [1,2,3]

const sumArray = (arr) =>{
	let total = 0;
	for (let i = 0; i<arr.length; i++){
	total += arr[i] 
	}
	return total;
}

console.log(sumArray(arr));
