var React = require('react');
var PageComponent = require('./Page.jsx');
var SectionComponent = require('./Section.jsx');
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
        {this.renderReactD3()}
        {this.renderTransition()}
        {this.renderFlux()}
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
          <ImageComponent src="images/illumination.png" />
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
          <ImageComponent src="images/roles.gif" contentType="caption">
            <p>Assign roles to workloads within application</p>
          </ImageComponent>
          <ImageComponent src="images/rules.gif" contentType="caption">
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
        <ImageComponent src="images/enforce.gif" imageWidth={600} contentPosition="left">
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
        <ImageComponent src="images/add.gif" imageWidth={600} contentPosition="right">
          <Label>1</Label>  Add an expense or category from the left panel.
        </ImageComponent>
        <ImageComponent src="images/drag.gif" imageWidth={600} contentPosition="right">
          <Label>2</Label>  Drag an expense over a category to add it to that category. An expense can belong to multiple categories.
        </ImageComponent>
        <ImageComponent src="images/click.gif" imageWidth={600} contentPosition="right">
          <Label>3</Label>  Click on any expense or category to view it in detail. While in detail view, take actions (delete, edit, close).
        </ImageComponent>
      </PageComponent>
    );
  }
  renderReactD3() {
    return (
      <PageComponent subtitle="React &amp; D3">

        <SectionComponent position="first">
          <h3><Label>1</Label>  Intelligent updates</h3>
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
              <CaptionComponent>
                From <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Expense.jsx" target="_new">components/Expense.jsx</a> and <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Graph.jsx" target="_new">components/Graph.jsx</a>
              </CaptionComponent>
            </ColumnChildComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/d3-enter-update-exit.txt" />
            </ColumnChildComponent>
          </ColumnComponent>
        </SectionComponent>

        <SectionComponent>
          <h3><Label>2</Label>  Problem</h3>
          <ColumnComponent>
            <ColumnChildComponent>
              <p>
                As part of the component lifecycle, React renders directly to the DOM.  Certain subsets of D3 (<a href="https://github.com/mbostock/d3/wiki/Transitions" target="_new">transitions</a>, <a href="https://github.com/mbostock/d3/wiki/SVG-Axes" target="_new">axes</a>, etc.) also render directly to the DOM.
              </p>
              <p>
                <strong>Both want control of the DOM, so how do we divide responsibility?</strong>
              </p>
            </ColumnChildComponent>
          </ColumnComponent>
        </SectionComponent>

        <SectionComponent position="last">
          <h3><Label>3</Label>  Solution</h3>
          <ColumnComponent>
            <ColumnChildComponent>
              <p>
                <strong>React manages the structure, D3 manages the attributes.</strong>
              </p>
              <CodeComponent path="scripts/code/svg-structure.txt" />
            </ColumnChildComponent>
          </ColumnComponent>
        </SectionComponent>

      </PageComponent>
    );
  }
  renderTransition() {
    return (
      <PageComponent subtitle="Transitions">
        <ColumnComponent>
          <ImageComponent src="images/transition.gif" imageWidth={600} />
        </ColumnComponent>
        <ColumnComponent>
          <ColumnChildComponent>
            <p>
              Call <CodeComponent inline={true}>ExpenseVisualization.enter</CodeComponent> from <CodeComponent inline={true}>ExpenseComponent.componentDidMount</CodeComponent>: As soon as React inserts the element into the DOM, D3 sets the starting attributes.
            </p>
            <p>
              Call <CodeComponent inline={true}>ExpenseVisualization.update</CodeComponent> from <CodeComponent inline={true}>ExpenseComponent.componentDidUpdate</CodeComponent>: When any part of the data changes, D3 transitions the element to its next set of attributes.
            </p>
          </ColumnChildComponent>
        </ColumnComponent>
        <ColumnComponent>
          <ColumnChildComponent>
            <CodeComponent path="scripts/code/d3-transition.txt" />
            <CaptionComponent>
              From <a href="https://github.com/sxywu/expenses/blob/master/scripts/visualizations/Expense.js" target="_new">visualizations/Expense.js</a>
            </CaptionComponent>
          </ColumnChildComponent>
          <ColumnChildComponent>
            <CodeComponent path="scripts/code/react-transition.txt" />
            <CaptionComponent>
              From <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Expense.jsx" target="_new">components/Expense.jsx</a>
            </CaptionComponent>
          </ColumnChildComponent>
        </ColumnComponent>
      </PageComponent>
    );
  }
  renderFlux() {
    return (
      <PageComponent subtitle="Flux">
        <SectionComponent position="first">
          <h3><Label>1</Label>  Unidirectional data flow</h3>
          <ColumnComponent>
            <ImageComponent src="images/flux.png" imageWidth={600} contentPosition="right">
              <p>
                <strong>Stores</strong> hold data.  They register with the dispatcher, and emit changes that views subscribe to.
              </p>
              <p>
                <strong>Views</strong> listen to store changes and render based on new data.  User actions trigger <strong>view actions</strong> that in turn trigger dispatch events.
              </p>
              <p>
                Views can get data from stores, but they cannot mutate the store without first going through the dispatcher.
              </p>
            </ImageComponent>
          </ColumnComponent>
        </SectionComponent>

        <h3><Label>2</Label>  Expense app structure</h3>
        <SectionComponent>
          <ImageComponent src="images/expense-flux.png" imageWidth={750} contentPosition="right">
            <p>
              Calculate graph data in <CodeComponent inline={true}>Graph.jsx</CodeComponent>, and pass the data down to <CodeComponent inline={true}>Category.jsx</CodeComponent>, <CodeComponent inline={true}>Link.jsx</CodeComponent>, and <CodeComponent inline={true}>Expense.jsx</CodeComponent> via props.
            </p>
            <p>
              Graph data is recalculated anytime <CodeComponent inline={true}>GraphStore</CodeComponent> or <CodeComponent inline={true}>SelectionStore</CodeComponent> emits a change, or anytime <CodeComponent inline={true}>ExpenseApp.jsx</CodeComponent> (which listens to <CodeComponent inline={true}>CategoryStore</CodeComponent> and <CodeComponent inline={true}>ExpenseStore</CodeComponent>) passes down new props.
            </p>
          </ImageComponent>
        </SectionComponent>

        <h3><Label>3</Label>  Graph code on change</h3>
        <SectionComponent>
          <ColumnComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/graph-code.txt" />
              <CaptionComponent>
                A subset of <a href="https://github.com/sxywu/expenses/blob/master/scripts/components/Graph.jsx" target="_new">components/Graph.jsx</a>
              </CaptionComponent>
            </ColumnChildComponent>
          </ColumnComponent>
        </SectionComponent>

        <h3><Label>4</Label>  Store data &#8594; Renderable graph data</h3>
        <SectionComponent position="last">
          <ColumnComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/categories-store-data.txt" />
            </ColumnChildComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/categories-graph-data.txt" />
            </ColumnChildComponent>
          </ColumnComponent>
            <ColumnComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/expenses-store-data.txt" />
            </ColumnChildComponent>
            <ColumnChildComponent>
              <CodeComponent path="scripts/code/expenses-graph-data.txt" />
            </ColumnChildComponent>
          </ColumnComponent>
        </SectionComponent>
      </PageComponent>
    );
  }
}

module.exports = AppComponent;