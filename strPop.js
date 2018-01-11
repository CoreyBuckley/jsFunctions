var str = {value: "Hello there!"}; //psuedo string object we'll attach a method to

str.pop = function (begin, end) { //uses slice() but subtracts the slice from the original string
  var part; //where we will store our substr
  if (begin !== undefined) { //make sure we were passed in at least 1 argument
    if (end === undefined) { //if function was passed in only a beginning index
      part = str.value.slice(begin,end); //use slice instead of substring because it's more flexible with negative indexes.
      //The 'substring' will be from left to right, so the modified string will be from 0 to the beginning index of the substring.
      str.value = str.value.slice(0, Math.abs(begin));
    }
    else {
      part = str.value.slice(begin, end);
      var beginpart = str.value.slice(0,begin); //end index is exclusive, so the beginning won't be included
      var endpart = str.value.slice(end); //the character at the end index position originally wasn't captured, so we can use the 1 argument
      str.value = beginpart + endpart; //the string with the part removed
    }
  }
  return part;
}

str.setValue = function (strvalue) {
  str.value = strvalue;
}
