var React = require('react');

class PageComponent extends React.Component {
  render() {
    var style = {
      paddingBottom: '80px'
    };
    var borderStyle = {
      textAlign: 'center',
      paddingTop: '40px',
      fontWeight: 'bold',
      fontSize: '18px'
    };
    var border = (
      <div style={borderStyle}>
        * * *
      </div>
    );
    if (this.props.position === 'last') {
      border = null;
    }

    return (
      <div className="Section" style={style}>
        {this.props.children}
        {border}
      </div>
    );
  }
}

module.exports = PageComponent;