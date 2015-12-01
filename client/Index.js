var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = require('./HelloWorld');
var AnotherExample = require('./AnotherExample');
var ES = require('./es2015.js');

ReactDOM.render(<HelloWorld/>, document.getElementById('HelloWorld'));
ReactDOM.render(<AnotherExample/>, document.getElementById('AnotherExample'));
ReactDOM.render(<ES/>, document.getElementById('ES'));
