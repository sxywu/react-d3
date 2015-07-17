var React = require('react');
var PageComponent = require('./Page.jsx');

class AppComponent extends React.Component {
  render () {
    return (
      <div>
        {this.renderTitle()}
      </div>
    );
  }
  renderTitle () {
    var style = {"text-align": "center"};
    return (
      <PageComponent title="On D3, React, and a little bit of Flux">
        <div style={style}>
          <p>
            Accompanying <a href="https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3" target="_new">
            blog post</a>
          </p>
          <p>
            Shirley Wu (<a href="https://twitter.com/shirleyxywu" target="_new">@shirleyxywu</a>)
          </p>
        </div>
      </PageComponent>
    );
  }
}

module.exports = AppComponent;