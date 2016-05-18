'use strict';

function double_to_one(collection) {
  var newArray = [];
  var noSameArray = [];

  newArray = merge(collection);
  noSameArray = deleteElement(newArray);
  return noSameArray;
}

function merge(collection) {
  var newArray = [];

  collection.forEach(function (element) {
    if (element.length === undefined) {

      newArray.push(element);
    } else {
      for (var i = 0; i < element.length; i++) {

        newArray.push(element[i]);
      }
    }
  });

  return newArray;
}

function deleteElement(newArray) {
  var noSameElement = [];

  for (var i = 0; i < newArray.length; i++) {
    if (noSameElement.length === 0) {

      noSameElement.push(newArray[i]);
    } else {
      var flag = 0;

      for (var index = 0; index < noSameElement.length; index++) {
        if (newArray[i] === noSameElement[index]) {
          flag = 1;
        }
      }
      if (!flag) {
        noSameElement.push(newArray[i]);
      }
    }
  }

  return noSameElement;
}

module.exports = double_to_one;
