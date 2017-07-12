import React from 'react';
import {connect} from 'react-redux';
import {add, drop} from './reducer';
import Task from './Task';

class List extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <ul>
        {this.props.tasks.length ? this.props.tasks.map((task, index)=>(
          <Task task={task} index={index} />
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
