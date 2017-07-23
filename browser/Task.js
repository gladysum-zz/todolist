import React from 'react';
import {connect} from 'react-redux';
import {drop, replace} from './reducer';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task,
      disabled: true
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    let index = this.props.index;
    this.props.drop(index);
  }

  handleEdit(event) {
    event.preventDefault();
    let index = this.props.index;
    let value = this.state.value;
    this.setState({
      disabled: !this.state.disabled
    })
    if (!this.state.disabled) {
      this.props.replace(index, value);
    }
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  render() {
    return (
      <li key={this.props.index}>

        <button
          className="delete-button"
          id="small-button"
          value={this.props.index}
          onClick={this.handleDelete}>
          Delete
        </button>

        <button
          className="edit-button"
          id="small-button"
          value={this.props.index}
          onClick={this.handleEdit}>
          {this.state.disabled ? 'Edit' : 'Save'}
        </button>

        {this.state.disabled ?

          <div className="task-field">
            {this.props.task}
          </div> :

          <input
            className="task-field"
            type='text'
            name={this.props.index}
            value={this.state.value}
            disabled={this.state.disabled}
            onChange={this.handleChange}
          />
        }
      </li>
    )
  }
}

const mapStateToProps = state => ({
  tasks: state.tasks
})

const mapDispatchToProps = dispatch => ({
  drop: index => {
    dispatch(drop(index))
  },
  replace: (index, value) => {
    dispatch(replace(index, value))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Task)
