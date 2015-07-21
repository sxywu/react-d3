var React = require('react/addons');
var _ = require('lodash');

class ColumnChildComponent extends React.Component {
  render() {
    var style = {
      display: 'inline-block',
      width: this.props.width,
      padding: this.props.padding || 20
    }
    return (
      <div style={style}>
        {this.props.children}
      </div>
    );
  }
}

module.exports = ColumnChildComponent;