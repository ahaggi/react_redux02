import React, { Component } from "react";
import { connect } from "react-redux";
import { deletePostAction } from '../actions/actions';

const mapStateToProps = state => { // get the state from props
  return { posts: state.posts };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeletePost: post => dispatch(deletePostAction(post)) // get prop onDeletePost which will dispatch an action to the store
  };
};

// this could be a function instead of class
class ConnectedList extends Component {


  handelDelete = (post) => {
    
    if (window.confirm("Post with id will be deleted")) {
      fetch('https://jsonplaceholder.typicode.com/posts/' + post.id, {
        method: 'DELETE'
      })
        .then(response => response.json())
        .then(json => this.props.onDeletePost(post))
        .catch((e) => alert("Error while trying to delete the post. Try Again!"))
    } 

  }

  render() {
    return (
      <div className="table-responsive">
        <table className="table table-hover ">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">User Id</th>
              <th scope="col">Title</th>
              <th scope="col">Body</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {

              this.props.posts.map(pst => (
                <tr key={pst.id}>
                  <th>{pst.id}</th>
                  <td>{pst.userId}</td>
                  <td>{pst.title}</td>
                  <td>{pst.body}</td>

                  <td>
                    <button
                      className="btn btn-secondary"
                      onClick={(event) => {event.preventDefault(); this.handelDelete(pst)}}
                    >
                      <i className="material-icons"> delete </i>
                    </button>

                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

    );
  }


}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
export default List;