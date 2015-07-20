var React = require('react');

class LabelComponent extends React.Component {
  render() {
    var style = {
      fontFamily: "'Droid Serif', serif",
      color: "#fff",
      backgroundColor: this.props.color || "#43A2CC",
      padding: "5px 10px",
      borderRadius: "3px",
      marginBottom: "5px",
      display: "inline-block"
    }
    return (
      <span style={style}>
        {this.props.children}
      </span>
    );
  }
}

module.exports = LabelComponent;