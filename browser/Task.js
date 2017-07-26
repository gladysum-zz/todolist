import React from 'react';
import {connect} from 'react-redux';
import {drop, replace} from './reducer';
import axios from 'axios';

class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.task.content,
      disabled: true,
      hasBeenEdited: false,
      error: ''
    };
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleDelete(event) {
    event.preventDefault();
    let id = this.props.task.id;
    // Send delete request to database; delete the task from the redux store
    axios.delete('/tasks/' + id)
    .then(res=>{
      this.props.drop(id);  
    })
    .catch(error=>{console.log(error)});
  }

  handleEdit(event) {
    event.preventDefault();
    this.setState({
      disabled: false,
      hasBeenEdited: true,
      value: this.props.task.content
    });
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSave(event) {
    event.preventDefault();  
    let id = this.props.task.id;
    let newContent = this.state.value;
    // Show validation error if user attempts to save an empty task
    if (newContent === '') {
      this.setState({
        error: "Cannot save an empty task."
      })
    }
    // If new content is same as prior content, simply make task field read-only upon Save
    else if (newContent === this.props.task.content) {
      this.setState({
        disabled: true,
        error: ''
      });
    }
    // If new content is non-empty and different from prior content, update task in database and redux store 
    else {
      axios.put('/tasks/' + id, {content: newContent})
      .then(res => {
        // Update task in redux store
        this.props.replace(id, newContent);  
        this.setState({
          disabled: true,
          error: ''
        });
      })
      .catch(error=>{console.log(error)});
    } 
  }
  
  render() {
    return (
      <li key={this.props.key}>

        <button
          className="delete-button"
          id="small-button"
          value={this.props.key}
          onClick={this.handleDelete}
        >
          Delete
        </button>

        <button
          className={this.state.disabled ? "edit-button" : "save-button"}
          id="small-button"
          value={this.props.key}
          onClick={this.state.disabled ? this.handleEdit : this.handleSave}
        >
          {this.state.disabled ? 'Edit' : 'Save'}
        </button>

        {this.state.disabled ?

          <div className="task-read-only">
            {this.props.task.content}
          </div> :

          <textarea
            className="task-editable"
            type='text'
            name={this.props.key}
            value={this.state.hasBeenEdited ? this.state.value : this.props.task.content}
            onChange={this.handleChange}
          />
        }

        <div className="input-error">
          {this.state.error ? this.state.error : null}
        </div>

      </li>
    )
  }
};

const mapDispatchToProps = dispatch => ({
  drop: id => {
    dispatch(drop(id))
  },
  replace: (id, content) => {
    dispatch(replace(id, content))
  }
});

export default connect(null, mapDispatchToProps)(Task);
