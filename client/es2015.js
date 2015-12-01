var React = require('react');
var ReactDOM = require('react-dom');

class Test extends React.Component{
  render(){
    const clickHandler = link => event => alert(link)
    
    const links = ['1', '2', '3']
    const ls = links.map( link => (<p><a href='#' onClick={clickHandler(link)}>{link}</a></p>))
    
    return(
      <div>
        <h1>I am written in ES2015</h1>
         {ls}
      </div>
    )
  }
}

module.exports = Test;