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
    return (
      <PageComponent title="On D3, React, and a little bit of Flux">

      </PageComponent>
    );
  }
}

module.exports = AppComponent;