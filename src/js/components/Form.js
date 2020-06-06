import React, { Component } from "react";
import { connect } from "react-redux";
import { addPostAction } from '../actions/actions';


const mapDispatchToProps = dispatch => {
  return {
    onAddPost: post => dispatch(addPostAction(post)) // get prop onAddPost which will dispatch an action to the store
  };
};



class ConnectedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: "",
      userId: "",
      title: "",
      body: "",
    };
  }

  //save changes to the local state
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }

  //It's suppose to have some sort of validation before submiting
  handleSubmit = (event) => {
    event.preventDefault();
    const { userId, body, title } = this.state;

    fetch('https://jsonplaceholder.typicode.com/posts/', {
      method: 'POST',
      body: JSON.stringify({ userId, body, title }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => this.props.onAddPost(json))  //dispatch an action, in order to create a new state 
      .catch((e) => alert("Error while trying to add the post. Try Again!"))

    this.setState({
      id: "",
      userId: "",
      title: "",
      body: ""
    });
  }


  render() {
    const { userId, body, title } = this.state;
    return (



      <form >
        <div className="form-group">

          <p>User Id: <input
            type="text"
            className="form-control"
            id="userId"
            value={userId}
            onChange={this.handleChange}

          />
          </p>
          <p>Title: <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleChange}

          />
          </p>
          <p>Body: <input
            type="text"
            className="form-control"
            id="body"
            value={body}
            onChange={this.handleChange}

          />
          </p>
        </div>

        <button className="btn btn-secondary" onClick={this.handleSubmit} >Submit</button>

      </form>

    );
  }
}
//We don't get any state from props, but will have an action creator.
const Form = connect(null, mapDispatchToProps)(ConnectedForm);
export default Form;