var React = require('react');
var PageComponent = require('./Page.jsx');
var Label = require('./Label.jsx');
var ImageComponent = require('./Image.jsx');
var ColumnComponent = require('./Column.jsx');
var ColumnChildComponent = require('./ColumnChild.jsx');
var CodeComponent = require('./Code.jsx');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderIllumination()}
        {this.renderChallenges()}
        {this.renderIntelligentUpdates()}
        {this.renderProblem()}
      </div>
    );
  }
  renderTitle() {
    var style = {textAlign: "center", width: 750, margin: "auto"};
    return (
      <PageComponent title="On D3, React, and a little bit of Flux">
        <div style={style}>
          <ImageComponent src="images/expense.gif" imageWidth={750} contentPosition="bottom" contentType="caption">
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
      <PageComponent subtitle="Illumio's Illumination: How I Got Here">
        <ColumnComponent>
          <ColumnChildComponent>
            <p>
              <Label>Illumio</Label> is an enterprise datacenter and cloud computing security company.
            </p>
            <p>
              <Label>Illumination</Label> is a part of Illumio's Adaptive Security Platform (ASP) that <Label color="#E86753">visualizes</Label> application traffic and helps with rule building.
            </p>
          </ColumnChildComponent>
          <ImageComponent src="images/ruleset.gif" imageWidth={400} contentType="caption">
            <p>1.  Assign ruleset to application</p>
          </ImageComponent>
        </ColumnComponent>
        <ColumnComponent>
          <ImageComponent src="images/roles.gif" imageWidth={400} contentType="caption">
            <p>2.  Assign roles to workloads within application</p>
          </ImageComponent>
          <ImageComponent src="images/rules.gif" imageWidth={400} contentType="caption">
            <p>3.  Create rules between roles for specific or all services</p>
          </ImageComponent>
        </ColumnComponent>
      </PageComponent>
    );
  }
  renderChallenges() {
    return (
      <PageComponent subtitle="Illumination: The Challenges">
        <ImageComponent src="images/legend.png" imageWidth={500} contentPosition="left">
          <p>
            <Label>1</Label> Nested visual elements whose structures change depending on user actions &#8594; hard to keep track of with D3's enter-update-exit.
          </p>
        </ImageComponent>
        <ImageComponent src="images/enforce.gif" imageWidth={500} contentPosition="left">
          <p>
            <Label>2</Label> Views who listen to changes on models, models that could in turn be mutated by views &#8594; spaghetti ball of events, hard to debug.
          </p>
        </ImageComponent>
      </PageComponent>
    );
  }
  renderIntelligentUpdates() {
    return (
      <PageComponent subtitle="React &amp; D3: Intelligent Updates">
        <ColumnComponent>
          <ColumnChildComponent>
            <h3><a href="https://facebook.github.io/react/" target="_new">React</a></h3>
            <p>
              A library for developing single-page apps whose data change over time.
            </p>
            <p>
              User specifies component structure with <a href="https://facebook.github.io/react/docs/component-specs.html#render" target="_new">render</a>, and operates on component at different points of the component <a href="https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods">lifecycle</a>.<br />
              React then uses <CodeComponent inline={true}>render</CodeComponent> output to calculate minimum updates in DOM between data changes.
            </p>
          </ColumnChildComponent>
          <ColumnChildComponent>
            <h3><a href="http://www.d3js.org" target="_new">D3</a></h3>
            <p>
              A library for developing interactive visualizations.
            </p>
            <p>
              User binds data to a selection, and uses <a href="https://github.com/mbostock/d3/wiki/Selections#enter" target="_new">enter</a> to append new elements to DOM, and <a href="https://github.com/mbostock/d3/wiki/Selections#exit">exit</a> to remove elements no longer in the new dataset from DOM.
            </p>
            
          </ColumnChildComponent>
        </ColumnComponent>
        <ColumnComponent>
          <ColumnChildComponent>
            <CodeComponent path="scripts/code/react-render.txt" />
            <em>
              (From <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Expense.jsx" target="_new">components/Expense.jsx</a> and <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Graph.jsx" target="_new">components/Graph.jsx</a>)
            </em>
          </ColumnChildComponent>
          <ColumnChildComponent>
            <CodeComponent path="scripts/code/d3-enter-update-exit.txt" />
          </ColumnChildComponent>
        </ColumnComponent>
      </PageComponent>
    );
  }
  renderProblem() {
    return (
      <PageComponent subtitle="React &amp; D3: Problem and Solution">
        <p>Both React and D3 wants control of the DOM.</p>
      </PageComponent>
    );
  }
}

module.exports = AppComponent;