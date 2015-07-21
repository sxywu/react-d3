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
    var style = {textAlign: "center", width: 500, margin: "auto"};
    return (
      <PageComponent title="On D3, React, and a little bit of Flux">
        <div style={style}>
          <ImageComponent src="images/expense.gif" width={500} contentPosition="bottom" contentType="caption">
            <p>
              accompanying <a href="https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3" target="_new">
              blog post</a> | <a href="sxywu.github.io/expenses" target="_new">
              example app</a> | <a href="github.com/sxywu/expenses" target="_new">
              code</a>
            </p>
          </ImageComponent>
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
        <ImageComponent src="images/ruleset.gif" width={400} contentType="caption">
          <p>1.  Assign ruleset to application</p>
        </ImageComponent>
        <ImageComponent src="images/roles.gif" width={400} contentType="caption">
          <p>2.  Assign roles to workloads within application</p>
        </ImageComponent>
        <ImageComponent src="images/rules.gif" width={400} contentType="caption">
          <p>3.  Create rules between roles for specific or all services</p>
        </ImageComponent>
      </PageComponent>
    );
  }
  renderChallenges() {
    return (
      <PageComponent subtitle="The challenges Illumination presents">
        <ImageComponent src="images/legend.png" width={500} contentPosition="left">
          <p>
            <Label>1</Label> Nested visual elements whose structures change depending on user actions &#8594; hard to keep track of with D3's enter-update-exit.
          </p>
        </ImageComponent>
        <ImageComponent src="images/enforce.gif" width={500} contentPosition="left">
          <p>
            <Label>2</Label> Views who listen to changes on models, models that could in turn be mutated by views &#8594; spaghetti ball of events, hard to debug.
          </p>
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