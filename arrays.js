// let numbers = [10, 20, 30, 40]
// numbers[1]=99
// console.log(numbers)

// let numbers = [10, 20, 30]
// numbers.push(40)
// console.log(numbers)

// let numbers = [10, 20, 30, 40, 50]
// numbers.pop()
// console.log(numbers)

// let numbers = [20, 30, 40, 50]
// numbers.unshift(10)
// console.log(numbers)

// let fruits = ["Apple", "Mango", "Banana", "Orange"]
// fruits.shift()
// console.log(fruits)

// let numbers = [10, 20, 30, 40, 50]
// console.log(numbers.includes(30))

// let numbers = [10, 20, 30, 40, 50]
// console.log(numbers.indexOf(40))

// let fruits = ["Apple", "Mango", "Banana"]
// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

// let numbers=[5,10,15,20]
// let sum=0
// for(let i=0;i<numbers.length;i++){
//     sum=sum+numbers[i]
// }console.log(sum)

// let numbers = [15, 80, 25, 90, 40]
// let largest=0
// for(let i=0;i<numbers.length;i++){
//     if(largest<numbers[i]){
//         largest=numbers[i]
//     }
// }console.log(largest)

// let numbers=[45,12,80,3,25]
// let smallest=numbers[0]
// for(let i=0;i<numbers.length;i++){
//     if(smallest>numbers[i]){
//         smallest=numbers[i]
//     }
// }console.log(smallest)

// let numbers=[2,5,8,11,14,17,20]
// let count=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==0){
//         count=count+1
//     }
// }console.log(count)

// let numbers=[3,6,9,12,15,18,21]
// let sum=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]%2==1)
//     sum=sum+1
// }console.log(sum)

// let numbers=[5,10,15,20]
// let double=[]
// for(let i=0;i<numbers.length;i++){
//     double.push(numbers[i]*2)
// }console.log(double)

// let numbers=[3,5,7,9]
// for(let i=0;i<numbers.length;i++){
//     numbers[i]=numbers[i]*2
// }console.log(numbers)

// let numbers=[2,4,6,8]
// for(let i=0;i<numbers.length;i++){
//     numbers[i]=numbers[i]*3
// }console.log(numbers)

// let numbers=[5,10,15,20,25]
// let isPresent=false
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]===20){
//         isPresent=true
//         break
//     }
// }if(isPresent===true){
//     console.log("present")
// }else{
//     console.log("not present")
// }

// let numbers=[5,10,5,20,5,30,10]
// let count=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]==5){
//         count=count+1
//     }
// }console.log(count)

// let numbers=[10,20,30,40,50]
// for(let i=numbers.length-1;i>=0;i--){
//     console.log(numbers[i])
// }

let numbers=[5,10,15,20,25]
let arr=[]
for(let i=numbers.length-1;i>=0;i--){
    arr=arr.push(numbers[i])
}console.log(arr)