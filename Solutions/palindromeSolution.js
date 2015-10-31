

var palindromeChecker = function(string){
  //The first step is to establish our base case
  if(string.length <= 1){
    return true;
  }
  //Then we check to see if the first and last character in the string are equal
  if(string[0] !== string[string.length - 1]){
    //if they are not equal return false
    return false;
  }else{
    //otherwise recusively call the function
    return palindromeChecker(string.slice(1, string.length - 1));
  }
};


