import React from 'react';
import {connect} from 'react-redux';
import {add} from './reducer';
import List from './List';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = this.state.value;

    // Clear the user input field upon submit
    this.setState({
      value: ''
    });

    // Add the new task to the redux store
    this.props.add(input);
   }

  render() {
    return (
      <div className="background">
        <div className="organize-container">
          <h2>Add a task</h2>

          <form onSubmit={this.handleSubmit}>

            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />

            <div id="button-container">
              <input type="submit" value="Submit" id="button"/>
            </div>

          </form>
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
