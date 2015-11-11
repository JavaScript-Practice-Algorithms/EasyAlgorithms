//To solve this problem we are going to use a solution commonly know as tortoise and the hare which is a nickname for "Floyd's Cycle-Finding Algorithm" invented by Robert W. Floyd in 1967

var linkedListCycles = function(linkedList){
  //First we up two pointers that point the head of out linked list one called tortoise and one called hare
  var tortoise = linkedList.head;
  var hare = linkedList.head;

  //we set up a infinite loop, that we will break with our return statements
  while(true){
    //If we come accross a node whose next pointer is null, then we know that the list is not cycled
    //otherwise we move the hare forward in the list
    if(hare.next === null){
      return false;
    }else{
      hare = hare.next;
    }
    //After moving the hare forward we again check to see if its next value is null, again if that is not true we move the hare forward again
    if(hare.next === null){
      return false;
    }else{
      hare = hare.next;
    }
    //After we have done that we move the tortoise forward one
    tortoise = tortoise.next;
    //the we check to see if they are pointing to the same node, if they are then we know that this linked list has a cycle
    if(tortoise.next === hare.next){
      return true;
    }
  }
};
