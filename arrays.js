var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(Array, x){
  var myArray = Array;
  var myOtherArray = myArray[x, ...Array];
}

function destructivelyAddElementToBeginningOfArray(Array, x) {
  var myArray = Array;
  myArray.unshift(x)
  return myArray
}