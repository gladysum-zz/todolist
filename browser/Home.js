import React from 'react';
import {connect} from 'react-redux';
import {add} from './reducer';
import axios from 'axios';
import List from './List';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      error: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
      error: ''
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.state.value) {
      this.setState({
        error: "Please enter a task."
      })
    }
    else {
       let input = this.state.value;

       // Clear the user input field upon submit
       this.setState({
         value: ''
       });

       // Send input to database; add the new task to the redux store
       axios.post('/tasks', {input: input})
       .then(res=>{
         this.props.add(res.data.name);
       })
       .catch(error=>{console.log(error)});
      }
    }

  render() {
    return (
      <div className="background">
        <div className="organize-container">

          <h1>Add a task</h1>

          <textarea
            className="input-field"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />

          <div className="input-error">
            {this.state.error ? this.state.error : null}
          </div>

          <div className="button-container">
            <button
              id="button"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          </div>  

          <h1>My Tasks</h1>

          <List />

        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  add: input => {
    dispatch(add(input))
  }
})

export default connect(null, mapDispatchToProps)(Home)
