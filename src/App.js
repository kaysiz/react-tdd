import React from 'react';

export default class APP extends React.Component {
  state = { name: 'viewers' };
  render() {
    return <div className="hello"> Hello, {this.state.name} </div>;
  }
}
