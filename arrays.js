var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(ArrayP, x){
  var myArray = ArrayP;
  var myOtherArray = myArray[x, ...Array];
}

function destructivelyAddElementToBeginningOfArray(ArrayP, x) {
  var myArray = ArrayP;
  myArray.unshift(x)
  return myArray
}