import React, { Component } from "react";

import { connect } from "react-redux";

import { fetchPosts } from "../actions";

import UserHeader from "./UserHeader";

class PostList extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderList () {
    return this.props.posts.map(post => {
      return (
        <div className="row" key={post.id}>
          <div className="card mt-2 mb-2">
            <div className="card-body">
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <a href="#" className="btn btn-primary">
                Go somewhere
              </a>
              <div className="shadow">
                  <UserHeader userId={post.userId}/>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {

    return <div>
        {this.renderList()}
    </div>
  }
}

const mapStateToProps = state => {
  return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts })(PostList);
