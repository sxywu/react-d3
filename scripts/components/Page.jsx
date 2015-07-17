var React = require('react');

class PageComponent extends React.Component {
  render() {
    var title = this.props.title && (<h1>{this.props.title}</h1>);
    var subtitle = this.props.subtitle && (<h2>{this.props.subtitle}</h2>);
    return (
      <div>
        {title}
        {subtitle}
        {this.props.children}
      </div>
    );
  }
}

module.exports = PageComponent;