import React from 'react';

export default class ClassContext extends React.Component {
  render() {
    console.log(this.context);
    return <div>ClassContext</div>;
  }
}
