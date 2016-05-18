'use strict';

function double_to_one(collection) {
  var newArray = [];

  newArray = merge(collection);
  return newArray;
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

module.exports = double_to_one;
