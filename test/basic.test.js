var assert = console.assert;
var domProcessor = require('../dom-processor');

describe('basic', function() {

    var configFactory = function() {
      return [{
        selector: 'div',
        replace: function($element) {
          return '<span></span>';
        }
      }];
    };

    domProcessor.config(configFactory);

    it('should replace <div> with <span>', function() {
      var result = domProcessor.process('<div></div>');

      assert(result === '<span></span>');
    });

    it('should leave unmatched elements unchanged', function() {
      var result = domProcessor.process('<p></p>');

      assert(result === '<p></p>');
    });
});