var SortedList = function() {};
var SortedList = function() {};

SortedList.prototype.length = 0;
SortedList.prototype.list = [];

// var SortedList = function(){
//   this.length = 0;
//   this.list = [];
// };

SortedList.prototype.add     = function(item) {}
SortedList.prototype.get     = function(pos) {
  return this.list[pos-1]
};

SortedList.prototype.max     = function() {}
SortedList.prototype.min     = function() {}
SortedList.prototype.average = function() {}
SortedList.prototype.sum     = function() {}


module.exports = SortedList;
