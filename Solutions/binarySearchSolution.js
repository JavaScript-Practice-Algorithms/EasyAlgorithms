

var binarySearch = function(array, value){
  //the first thing we want to do is set some pointers
  var first = 0;
  var middle = Math.floor(array.length / 2);
  var last = array.length - 1;
  
  //Once we have our pointers we can begin checking the array for the value that we want
  //we are going to loop until we find our value or the first pointer equals the middle pointer
  while(first !== middle){
    //if the middle index is the value, return it
    if(array[middle] === value){
      return middle;
    }
    //if the middle value in the arary is less than the value, we need to reset our pointers so that we search the last half of the array
    if(array[middle] < value){
      first = middle;
      middle = (middle + last) / 2
    //otherwise we need to reset our pointers so that we search the first half of the array
    }else{
      last = middle;
      middle = middle / 2;
    }
  }
  //if all else fails return -1
  return -1;
};
