var React = require('react');

class PageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {style: this.calculateDimensions()};
  }
  componentDidMount() {
    window.addEventListener('resize', this._onWindowResize.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this._onWindowResize.bind(this));
  }
  _onWindowResize() {
    var style = this.calculateDimensions();
    this.setState({style});
  }
  calculateDimensions() {
    var documentWidth = window.innerWidth;
    var documentHeight = window.innerHeight;
    var width = documentWidth * .8;
    var height = documentHeight * .8;
    var top = (documentHeight - height) / 2;
    var left = (documentWidth - width) / 2;
    var margin = top + 'px ' + left + 'px';

    return {width, "min-height": height, margin};
  }
  render() {
    var title = this.props.title && (<h1>{this.props.title}</h1>);
    var subtitle = this.props.subtitle && (<h2>{this.props.subtitle}</h2>);
    return (
      <div className="Page" style={this.state.style}>
        {title}
        {subtitle}
        {this.props.children}
      </div>
    );
  }
}

module.exports = PageComponent;