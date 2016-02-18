var Note = require('./Note.js');
var KeyActions = require('../actions/KeyActions.js');


var KeyListener = {
  setup: function() {
    this.addKeyUpListener();
    this.addKeyDownListener();
  },

  addKeyUpListener: function () {
    document.addEventListener('keyup', function(e) {
      KeyActions.keyPressedUp(e.keyCode);
    });

  },
  addKeyDownListener: function () {
    document.addEventListener('keydown', function(e) {
      KeyActions.keyPressedDown(e.keyCode);
    });
  }
};

module.exports = KeyListener;


// $(document).ready(function() {
//
// });
