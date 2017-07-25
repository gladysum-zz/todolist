import React from 'react';
import {connect} from 'react-redux';
import {drop, replace} from './reducer';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task,
      disabled: true,
      hasBeenEdited: false,
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    let index = this.props.index;
    this.props.drop(index);
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({
      disabled: !this.state.disabled,
      hasBeenEdited: true,
      value: this.props.task
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSave(event) {
    event.preventDefault();
    this.setState({
      disabled: !this.state.disabled
    });
    let index = this.props.index;
    let value = this.state.value;
    if (value !== this.props.task) {
      this.props.replace(index, value);
    }
  }

  
  render() {
    return (
      <li key={this.props.index}>

        <button
          className="delete-button"
          id="small-button"
          value={this.props.index}
          onClick={this.handleDelete}
        >
          Delete
        </button>

        <button
          className={this.state.disabled ? "edit-button" : "save-button"}
          id="small-button"
          value={this.props.index}
          onClick={this.state.disabled ? this.handleEdit : this.handleSave}
        >
          {this.state.disabled ? 'Edit' : 'Save'}
        </button>

        {this.state.disabled ?

          <div className="task-read-only">
            {this.props.task}
          </div> :

          <textarea
            className="task-editable"
            type='text'
            name={this.props.index}
            value={this.state.hasBeenEdited ? this.state.value : this.props.task}
            onChange={this.handleChange}
          />
        }
      </li>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  drop: index => {
    dispatch(drop(index))
  },
  replace: (index, value) => {
    dispatch(replace(index, value))
  }
})

export default connect(null, mapDispatchToProps)(Task)
