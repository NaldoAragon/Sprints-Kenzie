function pipeFix(numbers){

	let arr = [];

	for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {

		arr.push(i);
	}
	return arr;
}



// function pipeFix(arr){

//     let numerosCorretos = []

//     for(i in arr){

//         if(arr[i] + 1 == arr[i+1]){

//             numerosCorretos.push(arr[i])
//         }
//         else if(arr[i] + 1 != arr[i+1]){

//             numerosCorretos.push(arr[i+1])
//         }
//     }
//     return numerosCorretos
// }
// console.log(pipeFix([1,2,3,5,6,8,9]));






//(pipeFix([1,2,3,5,6,8,9]),[1,2,3,4,5,6,7,8,9]);
//(pipeFix([1,2,3,12]),[1,2,3,4,5,6,7,8,9,10,11,12]);