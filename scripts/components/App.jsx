var React = require('react');
var PageComponent = require('./Page.jsx');
var Label = require('./Label.jsx');
var ImageComponent = require('./Image.jsx');
var ColumnComponent = require('./Column.jsx');
var ColumnChildComponent = require('./ColumnChild.jsx');
var CodeComponent = require('./Code.jsx');
var CaptionComponent = require('./Caption.jsx');

class AppComponent extends React.Component {
  render() {
    return (
      <div>
        {this.renderTitle()}
        {this.renderIllumination()}
        {this.renderChallenges()}
        {this.renderExpenseApp()}
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
            accompanying <a href="https://medium.com/@sxywu/on-d3-react-and-a-little-bit-of-flux-88a226f328f3" target="_new">
            blog post</a> | <a href="http://sxywu.github.io/expenses" target="_new">
            example app</a> | <a href="http://www.github.com/sxywu/expenses" target="_new">
            code</a>
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
          <ImageComponent src="images/illumination.png" imageWidth={400} />
          <ColumnChildComponent>
            <h3><a href="https://www.illumio.com/home" target="_new">Illumio</a></h3>
            <p>
              Enterprise datacenter and cloud computing security company.
            </p>
            <h3><a href="https://www.illumio.com/product-services#illumination" target="_new">Illumination</a></h3>
            <p>
              A part of Illumio's Adaptive Security Platform (ASP) that visualizes application traffic and helps with rule building.
            </p>
          </ColumnChildComponent>
        </ColumnComponent>
        <ColumnComponent>
          <ImageComponent src="images/roles.gif" imageWidth={400} contentType="caption">
            <p>Assign roles to workloads within application</p>
          </ImageComponent>
          <ImageComponent src="images/rules.gif" imageWidth={400} contentType="caption">
            <p>Create rules between roles for specific or all services</p>
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
  renderExpenseApp() {
    return (
      <PageComponent subtitle="Example Expense App">
        <ImageComponent src="images/add.gif" imageWidth={500} contentPosition="right">
          <Label>1</Label>  Add an expense or category from the left panel.
        </ImageComponent>
        <ImageComponent src="images/drag.gif" imageWidth={500} contentPosition="right">
          <Label>2</Label>  Drag an expense over a category to add it to that category. An expense can belong to multiple categories.
        </ImageComponent>
        <ImageComponent src="images/click.gif" imageWidth={500} contentPosition="right">
          <Label>3</Label>  Click on any expense or category to view it in detail. While in detail view, take actions (delete, edit, close).
        </ImageComponent>
      </PageComponent>
    );
  }
  renderIntelligentUpdates() {
    return (
      <PageComponent subtitle="React &amp; D3">
        <h3><Label>1</Label>  Intelligent Updates</h3>
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

        <h3><Label>2</Label>  Problem</h3>
        <ColumnComponent>
          <ColumnChildComponent>
            <p>
              As part of the component lifecycle, React renders directly to the DOM.  D3 uses a combination of <a href="https://github.com/mbostock/d3/wiki/Selections#selecting-elements" target="_new">selections</a> and <a href="https://github.com/mbostock/d3/wiki/Selections#data" target="_new">data-binding</a> to calculate what should be in the DOM.
            </p>
            <p>
              <strong>Both require access to the DOM.</strong>
            </p>
          </ColumnChildComponent>
        </ColumnComponent>
        <ColumnComponent>
          <ColumnChildComponent>
            <CodeComponent path="scripts/code/react-render.txt" />
            <CaptionComponent>
              From <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Expense.jsx" target="_new">components/Expense.jsx</a> and <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Graph.jsx" target="_new">components/Graph.jsx</a>
            </CaptionComponent>
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
        <ColumnComponent>
          <ColumnChildComponent>
            <h3>Problem</h3>
            <p>

            </p>
          </ColumnChildComponent>
        </ColumnComponent>
      </PageComponent>
    );
  }
}

module.exports = AppComponent;