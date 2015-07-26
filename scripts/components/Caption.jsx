var React = require('react');
var d3 = require('d3');
var classNames = require('classnames');
var {PrismCaption} = require('react-prism');

class CaptionComponent extends React.Component {
  render() {
    var style = this.props.style || {};
    style.fontSize = '14px';
    style.color = '#999';

    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = CaptionComponent;