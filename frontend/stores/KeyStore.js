var Dispatcher = require ('../dispatcher/Dispatcher.js');
var Store = require('flux/utils').Store;
var Note = require('../util/Note.js');
var TONES = require('../constants/Tones.js');

var _keys = {};

var KeyStore = new Store(Dispatcher);

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    /// TODO add actual action name
    case "KEY_PRESS_DOWN":
      // _keys.push(payload.key);
      playKeyStart(payload.key);
      break;
    case "KEY_PRESS_UP":
      playKeyStop(payload.key);
      break;
  }
};

// function playsKeys() {
//   _keys.map( function (key) {
//     var noteObject = new Note(TONES[key]);
//     noteObject.start();
//   });
//   console.log(_keys);
//   // return _keys;
// }

function playKeyStart(key) {
  var noteObject = new Note(TONES[key]);
  if (!_keys[key]) {
    _keys[key] = noteObject;
    noteObject.start();

  }
}

function playKeyStop(key) {
  _keys[key].stop();
  _keys[key] = {};
  
}

window.KeyStore = KeyStore;
window.Dispatcher = Dispatcher;
module.exports = KeyStore;
