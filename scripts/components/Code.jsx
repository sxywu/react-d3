var React = require('react');
var d3 = require('d3');
var classNames = require('classnames');
var {PrismCode} = require('react-prism');

class CodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: ''};
  }
  componentDidMount() {
    this.props.path && d3.text(this.props.path, (text) => {
      this.setState({code: text});
    });
  }
  render() {
    var code = this.state.code || this.props.children;
    var className = classNames({
      "language-javascript": true,
      "inline-code": this.props.inline
    });

    return (
      <PrismCode className={className}>
        {code}
      </PrismCode>
    );
  }
}

module.exports = CodeComponent;