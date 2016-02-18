var ReactDOM = require('react-dom');
var React = require('react');
var Note = require ('./util/Note.js');
var TONES = require ('./constants/Tones.js');
var Dispatcher = require ('./dispatcher/Dispatcher.js');
var KeyStore = require('./stores/KeyStore.js');
var KeyListener = require('./util/KeyListener.js');


document.addEventListener("DOMContentLoaded", function () {
  KeyListener.setup();

//   var root = document.querySelector('#content');
//   ReactDOM.render(<Dispatcher />, root);
});

//jQuery version of above
// $(document).ready(function() {
//
// });
