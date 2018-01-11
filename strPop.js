var str = {value: "Hello there!"};

str.pop = function (begin, end) { //uses slice() but subtracts the slice from the original string
  var part;
  if (begin !== undefined) {
    if (end === undefined) { //if function was passed in only a beginning index
      part = str.value.slice(begin,end);
      if (begin < 0) {
        str.value = str.value.slice(0, str.value.length+begin); //if begin is neg, then the slice will be that or beyond index of the str. Thus, the rest of the string will go from 0 to the beginning
      }
      else {
        str.value = str.value.slice(0, begin);
      }
    }
    else {
      part = str.value.slice(begin, end);
      var beginpart = str.value.slice(0,begin);
      var endpart = str.value.slice(end);
      str.value = beginpart + endpart;
    }
  }
  return part;
}

str.setValue = function (strvalue) {
  str.value = strvalue;
}
