
//We are going to solve this using recursion, there are other ways to solve this problem
var bubbleSort = function(array, count){
  //first we need to initialize our counter which will keep track of how many times we have looped through the array
  var count = count || 0;
  //the swap variable gets reset to false every time the function is called, this way we can break out of our loop early if it is already sorted
  var swap = false;
  //Then we initialize our base case, if count is the same as the length then we know that we have a sorted array
  if(count === array.length){
    return array;
  }
  //on each call to the function we loop through the array to the length minus the count
  //we don't look at the end of the array because we know that the largest value will be there from previous calls to bubbleSort
  for(var i = 0; i < array.length - count; i++){
    //if the current value is greater than the next we swap them
    if(array[i] > array[i + 1]){
      //to swap them we create a temperary variable and then swap
      var temp = array[i + 1];
      array[i + 1] = array[i];
      array[i] = temp;
      //if we swap the two values then we set the swap variable to true
      if(!swap){
        swap = true;
      }
    }
  }
  //if the swap value is false, then we know that the array is fully sorted and we don't need to continue checking
  if(!swap){
    return array;
  }
  //if our function doesn't return early based on the conditions above, then we want to increment the count variable and call the function again
  count++;
  return bubbleSort(array, count);
};
