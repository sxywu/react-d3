var React = require('react');
var _ = require('lodash');

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);
    this.propTypes = {
      width: React.PropTypes.number,
      contentPosition: React.PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
      contentType: React.PropTypes.oneOf(['caption'])
    };
  }
  componentDidMount() {
    this.calculateDimensions();
    window.addEventListener('resize', this.calculateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateDimensions.bind(this));
  }
  calculateDimensions() {
    var width = React.findDOMNode(this).offsetWidth;
    var imageHeight = React.findDOMNode(this.refs.image).offsetHeight;
    var contentHeight = React.findDOMNode(this.refs.content).offsetHeight;
    this.setState({width, imageHeight, contentHeight});
  }
  render() {
    var padding = this.props.padding || 20;
    var style = {
      position: 'relative'
    };
    var imageStyle = {
      width: this.props.width || "auto",
      position: 'absolute'
    };
    var contentStyle = {
      verticalAlign: "top",
      position: 'absolute'
    };
    var content = null;

    if (this.state) {
      if (this.props.contentPosition === 'right') {
        style.height = Math.max(this.state.imageHeight, this.state.contentHeight) + 2 * padding;
        imageStyle.left = padding;
        imageStyle.top = padding;
        contentStyle.left = this.props.width + 2 * padding;
        contentStyle.top = padding;
        contentStyle.width = this.state.width - this.props.width - 3 * padding;
        contentStyle.display = "inline-block";
      } else if (this.props.contentPosition === 'bottom') {
        style.height = this.state.imageHeight + this.state.contentHeight + 3 * padding;
        imageStyle.left = padding;
        imageStyle.top = padding;
        contentStyle.width = this.props.width;
        contentStyle.left = padding;
        contentStyle.top = this.state.imageHeight + 2 * padding;
      } else if (this.props.contentPosition === 'left') {
        style.height = Math.max(this.state.imageHeight, this.state.contentHeight) + 2 * padding;
        contentStyle.left = padding;
        contentStyle.top = padding;
        contentStyle.width = this.state.width - this.props.width - 3 * padding;
        contentStyle.display = "inline-block";
        imageStyle.left = contentStyle.width + 2 * padding;
        imageStyle.top = padding;
      } else if (this.props.contentPosition === 'top') {
        style.height = this.state.imageHeight + this.state.contentHeight + 3 * padding;
        contentStyle.left = padding;
        contentStyle.top = padding;
        contentStyle.width = this.props.width;
        imageStyle.left = padding;
        imageStyle.top = this.state.contentHeight + 2 * padding;
      }
    } else {
      contentStyle.width = this.props.width;
    }
    
    if (this.props.contentType === 'caption') {
      contentStyle.fontSize = "14px";
      contentStyle.color = "#999";
    }

    var image = (<img src={this.props.src} style={imageStyle} ref="image"
      onLoad={this.calculateDimensions.bind(this)} />);
    var content = (
      <div style={contentStyle} ref="content">
        {this.props.children}
      </div>
    );
    if (this.props.contentPosition === 'left' || this.props.contentPosition === 'top') {
      content = (
        <div style={style}>
          {content}
          {image}
        </div>
      );
    } else {
      content = (
        <div style={style}>
          {image}
          {content}
        </div>
      );
    }

    return content;
  }
}

module.exports = ImageComponent;