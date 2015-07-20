var React = require('react');
var PageComponent = require('./Page.jsx');
var Label = require('./Label.jsx');
var ImageComponent = require('./Image.jsx');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderIllumination()}
        {this.renderChallenges()}
        {this.renderReactD3()}
      </div>
    );
  }
  renderTitle() {
    var style = {"text-align": "center"};
    var imageStyle = {width: "500px", border: "1px solid #333", "border-radius": "3px",
      padding: "5px", "margin-bottom": "40px"};
    return (
      <PageComponent title="On D3, React, and a little bit of Flux">
        <div style={style}>
          <img src="images/expense.gif" style={imageStyle} />
          <p>
            Accompanying <a href="https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3" target="_new">
            blog post</a> | <a href="sxywu.github.io/expenses" target="_new">
            example app</a> | <a href="github.com/sxywu/expenses" target="_new">
            code</a>
          </p>
          <p>
            Shirley Wu (<a href="https://twitter.com/shirleyxywu" target="_new">@shirleyxywu</a>)
          </p>
        </div>
      </PageComponent>
    );
  }
  renderIllumination() {
    return (
      <PageComponent subtitle="How I got here: Illumio's Illumination">
        <p>
          <Label>Illumio</Label> is an enterprise datacenter and cloud computing security company.
        </p>
        <p>
          <Label>Illumination</Label> is a part of Illumio's Adaptive Security Platform (ASP) that <Label color="#E86753">visualizes</Label> application traffic and helps with rule building.
        </p>
        <ol>
          <li>Assign ruleset to application</li>
          <li>Assign roles to workloads within application</li>
          <li>Create rules between roles for specific or all services</li>
        </ol>
      </PageComponent>
    );
  }
  renderChallenges() {
    return (
      <PageComponent subtitle="The challenges Illumination presents">
        <ImageComponent src="images/legend.png" width={500} contentPosition="right">
          <p>Visual elements whose structures change depending on user actions &#8594; hard to keep track of with D3's enter-update-exit</p>
        </ImageComponent>
        <ImageComponent src="images/enforce.gif" width={500} contentPosition="left">
          <p>Views who listen to changes on models, models that could in turn be mutated by views &#8594; spaghetti ball of events, hard to debug</p>
        </ImageComponent>
      </PageComponent>
    );
  }
  renderReactD3() {
    return (
      <PageComponent subtitle="D3 &#9829; React">

      </PageComponent>
    );
  }
}

module.exports = AppComponent;