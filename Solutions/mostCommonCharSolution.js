
//the easiest way to solve this problem is to use a hash table known as an object in JavaScript

var mostCommonChar = function(string){
  //first we create our object and our reslut variable which we will return later
  var charHash = {};
  var result = ''
  //then we want to move each character into an object and give it a numerical value
  //the we loop through our string
  for(var i = 0; i < string.length; i++){
    //in this example we are going to use a ternary statement to check if the char is already in the object, if it is we increment the value by one if it is not we add it to the object with a value of one
    //we are going to ignore spaces
    if(string[i] !== ' '){
      charHash[string[i]] ? charHash[string[i]] ++ : charHash[string[i]] = 1;
    }
  }
  //after we have all the characters in the hash we are going to loop through the hash and assign the character with the highest value to the result variable
  for(var key in charHash){
    //if result is empty assign it the key (which is the char)
    if(result === ''){
      result = key;
    }
    //otherwise check to see if the value is greater than the value of result, if it is we have a new result
    if(charHash[key] > charHash[result]){
      result = key;
    }
  }
  //finally we return our result
  return result;
};

