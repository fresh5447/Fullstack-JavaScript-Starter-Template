var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./HelloWorld');
var AnotherExample = require('./AnotherExample');

ReactDOM.render(<HelloWorld/>, document.getElementById('HelloWorld'));
ReactDOM.render(<AnotherExample/>, document.getElementById('AnotherExample'));
