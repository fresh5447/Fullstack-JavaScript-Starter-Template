var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
	render: function(){
		return(
			<div>
				<h3>React and ES2015 </h3>
				<h3> Webpack and HotReloader </h3>	
			</div>
			)
	}
});

module.exports = HelloWorld;