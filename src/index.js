import uniqueRandomArray from 'unique-random-array';
import colorNames from './color-names.json';

var getRandomItem = uniqueRandomArray(colorNames);

module.exports = {
  all: colorNames,
  random: random
};

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    var randomItems = [];
    for (var i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}
