import React from 'react';
import {connect} from 'react-redux';
import {add, drop} from './reducer';

class List extends React.Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event) {
    let index = event.target.value;
    this.props.drop(index);
  }

  render() {
        console.log("this.props.tasks", this.props.tasks);
    return (
      <ul>
        {this.props.tasks.length ? this.props.tasks.map((task, index)=>(
          <li key={index}>
            {task}
            <button value={index} onClick={this.handleDelete}> Delete </button>
          </li>
        )) : null}
      </ul>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  add: input => {
    dispatch(add(input))
  },
  drop: index => {
    dispatch(drop(index))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(List)
