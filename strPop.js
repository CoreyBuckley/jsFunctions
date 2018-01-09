var str = {value: "Hello there!"};

str.pop = function (begin, end) { //uses slice() but subtracts the slice from the original string
  var part;
  if (begin) {
    var partIndex;
    if (!end) { //if function was passed in only a beginning index
      part = this.value.slice(begin,end);
      if (begin < 0) {
        this.value = this.value.slice(0, this.value.length+begin); //if begin is neg, then the slice will be that or beyond index of the str. Thus, the rest of the string will go from 0 to the beginning
      }
      else {
        this.value = this.value.slice(0, begin);
      }
    }
    else {
      part = this.value.slice(begin, end);
      var beginpart = this.value.slice(0,begin);
      var endpart = this.value.slice(end)
      this.value = beginpart + endpart;
    }
  }
  return part;
}

str.setValue = function (strvalue) {
  this.value = strvalue;
}
