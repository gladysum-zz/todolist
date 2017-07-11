import React from 'react';

export default class Home extends React.Component {
  Constructor() {
    Super();
    this.state = {
      value: '',
      tasks: []
    }
  }

  render() {
    return (
      <div>
        This is the to do list.
      </div>
    )
  }
}
