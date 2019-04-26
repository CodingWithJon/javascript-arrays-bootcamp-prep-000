var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(Array, element){
  return [element, ...Array];
}

function destructivelyAddElementToBeginningOfArray(Array, element) {
Array.unshift(element)
  return Array
}