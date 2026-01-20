/**
 *bubble sort tutorials @arrayBasic.js
 *learning array data structure
 *Majata Hichimi 
 *19/01/2026
 */


/**
 * The bubble sort algorithm works by:
 * shorting through the items in an array 
 * finding the smallest value
 */

//bubble sort to search throw an array of number
//array initialization
const userAges = [34,23,4,90,21,7,10];
const arraySize = userAges.length;

function bubbleSort(arr) {
  // Loop through the array multiple times
  for (let i = 0; i < arr.length; i++) {

    // Compare neighboring elements
    for (let j = 0; j < arr.length - 1; j++) {

      // If the current element is bigger than the next one, swap them
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];       // store current value
        arr[j] = arr[j + 1];     // move next value left
        arr[j + 1] = temp;       // move stored value right
      }
    }
  }

  return arr;
}

console.log(bubbleSort(userAges));

