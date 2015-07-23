var React = require('react');
var d3 = require('d3');
var {PrismCode} = require('react-prism');

class CodeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {code: ''};
  }
  componentDidMount() {
    d3.text(this.props.path, (text) => {
      this.setState({code: text});
    });
  }
  render() {
    return (
      <PrismCode className="language-javascript">
        {this.state.code}
      </PrismCode>
    );
  }
}

module.exports = CodeComponent;