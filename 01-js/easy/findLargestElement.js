/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest=numbers[0];
    for(let i=0;i<numbers.length;i++){
        if(numbers[i]>largest){
            largest=numbers[i];
        }
    }
    return largest;
}
console.log(findLargestElement([12,1,3,4,13,7]));

module.exports = findLargestElement;