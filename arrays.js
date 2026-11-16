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

// let numbers=[5,10,15,20,25]
// let arr=[]
// for(let i=numbers.length-1;i>=0;i--){
//     arr.push(numbers[i])
// }console.log(arr)

// let numbers=[5, 90, 40, 70, 20]
// let Largest=0
// let secondLargest=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]>Largest){
//         secondLargest=Largest
//         Largest=numbers[i]
//     }else if (numbers[i]<Largest && numbers[i]>secondLargest){
//         secondLargest=Largest
//         Largest=numbers[i]
//     }
// }console.log(secondLargest)

// let numbers=[10,20,10,30,20,40]
// let unique=[]
// for(let i=0;i<numbers.length;i++){
//     if(!unique.includes(numbers[i])){
//         unique.push(numbers[i])
//     }
// }console.log(unique)

// let arr1=[10,20,30,40]
// let arr2=[20,40,50,60]
// let arrr=[]
// for(let i=0;i<arr2.length;i++){
//     if(arr1.includes(arr2[i])){
//         arrr.push(arr2[i])
//     }
// }console.log(arrr)


// let numbers = [5, 10, 5, 20, 5, 30, 10]
// let count=0
// for(let i=0;i<numbers.length;i++){
//     if(numbers[i]===5){
//         count=count+1
//     }
// }console.log(count)


// let numbers = [5, 10, 5, 20, 5, 30, 10]
// let count=0
// for(let i=0;i<numbers.length;i++){
//    if(numbers[i]==10){
//      count=count+1
//    }
// }console.log(count)

// let numbers=[10,20,30,40]
// let copy=[]
// for(let i=0;i<numbers.length;i++){
//     copy.push(numbers[i])
// }console.log(copy)


// let numbers = [10, 20, 30, 40, 50]
// let copy=[]
// for(let i=numbers.length-1;i>=0;i--){
//     copy.push(numbers[i])
// }console.log(copy)


// let arr1 = [10, 20, 30, 40]
// let arr2 = [20, 40, 50, 60]
// let arrr=[]
// for(let i=0;i<arr1.length;i++){
//     if(!arr2.includes(arr1[i])){
//         arrr.push(arr1[i])
//     }
// }console.log(arrr)

// let arr1 = [10, 20, 30]
// let arr2 = [30, 20, 10]
// let isEqual=false
// for(let i=0;i<arr2.length;i++){
//     if(arr1.includes(arr2[i])   && arr1.length===arr2.length){
//         isEqual=true
//     }
// }
// if(isEqual===true){
//     console.log("Arrays are equal")
// }else{
//     console.log("not equal")
// }


// let arr1 = [10, 20, 30]
// let arr2 = [30, 20, 10]
// let isEqual=true
// for(let i=0;i<arr2.length;i++){
//     if(arr2[i]===arr1[i]  || (arr1.length===arr2.length)){
//         isEqual=false        
//     }
// }if(isEqual===true){
//     console.log("Array are equal")
// }else{
//     console.log("not equal array")
// }



// let arr1=[10,20,30]
// let arr2=[10,20,40]
// let isEqual=false
// for(let i=0;i<arr2.length;i++){
//     if(arr1[i]===arr2[i] && arr1.length==arr2.length){
//     isEqual=true
// }
// }if(isEqual===false){
//     console.log("not array")
// }else{
//     console.log("not equal")
// }


// let arr1=[10,20,30]
// let arr2=[10,20,40]
// let isEqual=true
// for(let i=0;i<arr2.length;i++){
//     if(arr1[i]!==arr2[i] || arr1.length!==arr2.length){
//     isEqual=false
// }
// }if(isEqual===true){
//     console.log("Array equal")
// }else{
//     console.log("not equal")
// }


// let word = "JAVASCRIPT";

// console.log(word.slice(-3));
// console.log(word.substring(-3));

// let word="hello"
// let string=""
// for(let i=word.length-1;i>=0;i--){
//     string=string+word[i]
// }
// console.log(string)

// let word="education"
// let count=0
// for(let i=word.length-1;i>=0;i--){
//     if("aeiou".includes(word[i])){
//         count=count+1
//     }
// }console.log(count)

// let word="javascript"
// let count=0
// for(i=0;i<word.length;i++){
//     if(!"aeiou".includes(word[i])){
//         count=count+1
//     }
// }console.log(count)

// let word="hello world javascript"
// let string=""
// for(let i=0;i<word.length;i++){
//     if(word[i]!==" "){
//         string=string+word[i]
//     }
// }console.log(string)

// let word="I love javascript programming"
// word=word.split(" ")
// let long=[]
// for(i=word.length-1;i>=0;i--){
//     if(word[i].length>long.length){
//         long=word[i]
//     }
// }console.log(long)

// let word="programming"
// let count=0
// for(let i=0;i<word.length;i++){
//     if(word[i]==="m"){
//         count=count+1
//     }
// }console.log(count)


// let word="madam"
// let string=""
// for(let i=word.length-1;i>=0;i--){
//     string=string+word[i]
// }if(string===word){
//     console.log("Palidrome")
// }else{
//     console.log("not palindrome")
// }

// let word="programming"
// let count=""
// for(let i=0;i<word.length;i++){
//     for(let j=i+1;j<word.length;j++){
//         if(word[i]===word[j]){
//             count=count+word[i]
//         }
//         break
// }
// }console.log(count)

// let word="banana"
// let string=""
// for(let i=0;i<word.length;i++){
//     if(!string.includes(word[i])){
//         string=string+word[i]
//     }
// }console.log(string)

let word="hello"
let string=""
for(let i=0;i<word.length;i++){
    for(let j=i+1;j<word.length;j++){
        if(word[i]===word[j]){
            string=string+word[i]
        }
    }
}console.log(string)