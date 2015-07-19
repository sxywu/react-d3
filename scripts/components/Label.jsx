var React = require('react');

class LabelComponent extends React.Component {
  render() {
    var style = {
      "font-family": "'Droid Serif', serif",
      "color": "#fff",
      "background-color": this.props.color || "#43A2CC",
      "padding": "5px 10px",
      "border-radius": "3px"
    }
    return (
      <span style={style}>
        {this.props.children}
      </span>
    );
  }
}

module.exports = LabelComponent;