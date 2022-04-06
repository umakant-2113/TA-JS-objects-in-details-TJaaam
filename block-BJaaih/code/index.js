/*
1. Create a function named `myMap` and add the method to `Array.prototype`.
`myMap` will behave similar to how the `Array.map` works. To test the implementation use the code below.
*/

function  myMap (cb){
  let arr = []
for(let i = 0; i<this.length; i++){
arr.push(cb(this[i]))
}
  return arr
}
Object.setPrototypeOf(myMap,Array.prototype)
// Test the myMap function you created above
// Test the myMap function you created above
let numbers = [1, 5, 6, 8, 9];
let words = 'quick brown fox jumped over a lazy dog'.split(' ');
let doubleNum = numbers.myMap(function (num) {
  return num * 2 - 1;
});
let capitalWords = words
  .myMap(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  })
  .join(' ');
console.log(doubleNum); // it should be [1, 9, 11, 15, 17]
console.log(capitalWords); // it should be 'Quick Brown Fox Jumped Over A Lazy Dog'

/*
2. Add a method named `myFilter` to Array.prototype. myFilter should behave similar to Array.filter.
After adding the function test it using the code below.
*/

function myFilter(cb){
  let arr=[];
for(let i=0;this.length>i;i++){
arr.push(cb(this[i]))
}
return arr;
}
Object.setPrototypeOf(myFilter,Array.prototype)
let even = numbers.myFilter(function (num) {
  if (num % 2 === 0){
      return num;
  }
});

let filteredWords = words
  .myFilter(function (word) {
    if( word.length > 3){
        return word;
    };
  })
  .join(' ');
console.log(even); // it should be [6, 8]
console.log(filteredWords) // it should be 'quick brown jumped over lazy';

/*
3. Add a method named `shuffle` to Array.prototype. Using the method shuffle will return a
new array and in the new array the index of the elements will be shuffled (randomly reorders).
Make sure it does not the changes the original array.

*/

Array.prototype.shuffle = function (){
  return this.sort((a,b)=>Math.random - 0.5)
  }
    let number=[1,23,45,65]
  // Test to check the shuffle method (It will return different output every time you call)
  
console.log(number.shuffle());
console.log(number.shuffle());
console.log(words.shuffle());
console.log(words.shuffle());

/*
4. Add a method named `unique` to Array.prototype. Using the method will return a
new array and it should only contain unique elements in the array.
Unique means no element should come multiple times.
*/

Array.prototype.unique=function(){
  let arr= new Set(this)
  let value=Array.from(arr)
    console.log(value)
}

// Test to check the shuffle method (It will return different output every time you call)
let num = [1, 2, 3, 4, 2, 3, 6, 7, 7];
let strings = 'helloworld'.split('');

console.log(num.unique()); // [1, 2, 3, 4, 6, 7]
console.log(strings.unique()); // ['h', 'e', 'l', 'o', 'w', 'r', 'd']

/*
5. Add a method named `intersection` to Array.prototype. The method intersection will accept an array and returns a new
array that will contain only element that is common in both the array.
*/

Array.prototype.intersection=function(array){

  let value = this.filter((elm)=>{
      return array.includes(elm)
    })
    let value1 =  new Set(value)
      return Array.from(value1)
     
  }
  let numberInter = [1, 2, 3, 4, 2, 3, 6, 7, 7];
  // Test to check the shuffle method (It will return different output every time you call)
  console.log(num.intersection([2, 7, 11, 32])); // [2, 7]
console.log(strings.intersection('heyworld'.split(''))); // ['h', 'e', 'o', 'w', 'r', 'l', 'd']

/*
6. Add a method named `chunk` to Array.prototype. The method chunk will accept one parameter `length`
and split the array into groups the length of size. If array can't be split evenly, the final
chunk will be the remaining elements. `length` should default to 1.
*/
Array.prototype.chunk=function(size){
  let chunked=[];
  if(size !==0){
    for(let i=0;this.length>i;i+=size){
      chunked.push(this.slice(i, i + size))
        
  }
      return chunked
}else if(size===0){
  for(let i=0;this.length>i;i++){
    chunked.push(this.slice(i,i+size))
      
}
      return chunked
}
}

let numChunk = [1, 2, 3, 4, 2, 3, 6, 7, 7];
let string ="hello World".split("")
console.log(numChunk.chunk(2)); // [[1, 2], [3, 4], [2, 3], [6, 7], [7]]
console.log(numChunk.chunk()); // [[1], [2], [3], [4], [2], [3], [6], [7], [7]]
console.log(string.chunk(3)); // [['h', 'e', 'l'], ['l', 'o', 'w'], ['o', 'r', 'l'], ['d']]
