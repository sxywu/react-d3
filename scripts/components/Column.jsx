var React = require('react/addons');
var _ = require('lodash');

class ColumnComponent extends React.Component {
  componentDidMount() {
    this.calculateDimensions();
    window.addEventListener('resize', this.calculateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateDimensions.bind(this));
  }
  calculateDimensions() {
    var width = React.findDOMNode(this).offsetWidth - 1;
    this.setState({width});
  }
  render() {
    var children = null;
    if (this.state) {
      var width = this.state.width / React.Children.count(this.props.children);
      children = React.Children.map(this.props.children, (child) => {
        return React.addons.cloneWithProps(child, {width});
      });
    }
    return (
      <div>
        {children}
      </div>
    );
  }
}

module.exports = ColumnComponent;