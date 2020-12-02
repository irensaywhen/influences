import React, { Component } from 'react';

import Header from '../../components/Header/Header';

class Layout extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <main>{this.props.children}</main>
      </React.Fragment>
    );
  }
}

export default Layout;
