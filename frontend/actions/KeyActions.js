var Dispatcher = require ('../dispatcher/Dispatcher.js');
var KeyListener = require('../util/KeyListener');

var KeyActions = {
  keyPressedUp: function(key) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESS_UP",
      key: key
    });
  },

  keyPressedDown: function(key) {
    Dispatcher.dispatch({
      actionType: "KEY_PRESS_DOWN",
      key: key
    });
  }

};


window.KeyActions = KeyActions;

module.exports = KeyActions;
