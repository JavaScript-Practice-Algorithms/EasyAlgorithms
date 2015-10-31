
//first we create the class and give it a length property
var Stack = function(){
  this.length = 0;
};

//then we add the push method to the object
Stack.prototype.push = function(item){
  //first we increment the length property
  this.length++;
  //we make the key the current length and assign the item as the value
  this[this.length] = item;
};

//here we create the pop method
Stack.prototype.pop = function(){
  //first we need to check the length variable and make sure that we have something to pop
  if(this.length <= 0){
    //if we don't we log the following
    console.log('Nothing in stack');
  }else{
    //if we do, we need to create a temperary variable to hold the last item in the stack so that we can return it later
    var lastItem = this[this.length];
    //then we delete the key/value pair from the object
    delete this[this.length];
    //now we need to decrement our length variable
    this.length--;
    //finaly we return the item
    return lastItem;
  }
};
