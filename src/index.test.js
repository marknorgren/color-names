import {expect} from 'chai';
import colors from './index';

describe('color-names', function() {
  describe('all', function() {
    it('should be an array of strings', function() {
      expect(colors.all).to.satisfy(isArrayOfStrings);

      function isArrayOfStrings(array) {
        return array.every(function(item) {
          return typeof item === 'string';
        });
      }
    });

    it('should contain `DeepSkyBlue`', function() {
      expect(colors.all).to.include('DeepSkyBlue');
    });
  });

  describe('random', function() {
    it('should return a random item from the colors.all', function() {
      var randomItem = colors.random();
      expect(colors.all).to.include(randomItem);
    });

    it('should return an array of random items if passed a number', function() {
      var randomItems = colors.random(3);
      expect(randomItems).to.have.length(3);
      randomItems.forEach(function(item) {
        expect(colors.all).to.include(item);
      });
    });
  });
});
