var React = require('react');
var _ = require('lodash');
var CaptionComponent = require('./Caption.jsx');

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
    var paddingLeft = this.props.paddingLeft || 20;
    var paddingTop = this.props.paddingTop || 10;
    var style = {
      position: 'relative',
      verticalAlign: 'top'
    };
    var imageStyle = {
      position: 'absolute',
      borderRadius: "3px",
      padding: "6px",
      boxShadow: "0 0 6px #999"
    };
    var contentStyle = {
      verticalAlign: "top",
      position: 'absolute',
      padding: "6px"
    };

    if (this.state) {
      style.display = 'inline-block';
      style.width = this.props.width || this.state.width;
      var imageWidth = this.props.imageWidth > style.width ? style.width : this.props.imageWidth;
      if (this.props.contentPosition === 'right') {
        style.height = Math.max(this.state.imageHeight, this.state.contentHeight) + 2 * paddingTop;
        imageStyle.left = paddingLeft;
        imageStyle.top = paddingTop;
        imageStyle.width = imageWidth;
        contentStyle.left = imageWidth + 2 * paddingLeft;
        contentStyle.top = paddingTop;
        contentStyle.width = style.width - imageWidth - 3 * paddingLeft;
        contentStyle.display = "inline-block";
      } else if (this.props.contentPosition === 'left') {
        style.height = Math.max(this.state.imageHeight, this.state.contentHeight) + 2 * paddingTop;
        contentStyle.left = paddingLeft;
        contentStyle.top = paddingTop;
        contentStyle.width = style.width - imageWidth - 3 * paddingLeft;
        contentStyle.display = "inline-block";
        imageStyle.left = contentStyle.width + 2 * paddingLeft;
        imageStyle.top = paddingTop;
        imageStyle.width = imageWidth;
      } else if (this.props.contentPosition === 'top') {
        style.height = this.state.imageHeight + this.state.contentHeight + 3 * paddingTop;
        contentStyle.left = paddingLeft;
        contentStyle.top = paddingTop;
        contentStyle.width = (style.width || imageWidth) - 2 * paddingLeft;
        imageStyle.left = paddingLeft;
        imageStyle.top = this.state.contentHeight + 2 * paddingTop;
        imageStyle.width = (style.width || imageWidth) - 2 * paddingLeft;
      } else {
        style.height = this.state.imageHeight + this.state.contentHeight + 3 * paddingTop;
        imageStyle.left = paddingLeft;
        imageStyle.top = paddingTop;
        imageStyle.width = (style.width || imageWidth) - 2 * paddingLeft;
        contentStyle.width = (style.width || imageWidth) - 2 * paddingLeft;
        contentStyle.left = paddingLeft;
        contentStyle.top = this.state.imageHeight + 2 * paddingTop;
      }
    } else {
      contentStyle.width = imageWidth;
    }
    
    if (this.props.contentType === 'caption') {
      contentStyle.fontSize = "14px";
      contentStyle.color = "#999";
    }

    var image = (<img src={this.props.src} style={imageStyle} ref="image"
      onLoad={this.calculateDimensions.bind(this)} />);
    var content = null;
    if (this.props.contentType === 'caption') {
      content = (
        <CaptionComponent style={contentStyle} ref="content">
          {this.props.children }
        </CaptionComponent>
      );
    } else {
      content = (
        <div style={contentStyle} ref="content">
          {this.props.children}
        </div>
      );
    }

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