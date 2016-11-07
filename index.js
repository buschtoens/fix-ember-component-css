/* jshint node: true */
'use strict';

module.exports = {
  name: 'fix-ember-component-css',
  
  setupPreprocessorRegistry: function(type, registry) {
    registry.add('css', {
      ext: ['dummy'],
      toTree: function(tree) {
        return tree;
      }
    })
  }
};
