/*
Merging Multiple Arrays:

Building a Data Aggregator
*/

const arr1=[1,2,3];
const arr2=[4,5,6];
const arr=['Mayukh',21];
const combinedArray = [...arr1, ...arr2, 7, 8, 9, 10, ...arr];
console.log(`Combined Array: ${combinedArray}`);
