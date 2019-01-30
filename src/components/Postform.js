import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postActions';

class Postform extends Component {
constructor(props){
    super(props)
    this.state ={
        title:'',
        body:''
    }
}

onChange =(e) =>{
 this.setState({[e.target.name] : e.target.value})
}

onSubmit =(e)=>{
    e.preventDefault();

    const post={
        title: this.state.title,
        body:this.state.body
    }
    this.props.createPost(post);
}
  render() {
    return (
      <div>
        <h1>POSTFORM</h1>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>
                    Title:
                </label> <br/>
                <input type='text' name='title' onChange={this.onChange} value={this.state.title}></input>
            </div>
            <div>
                <label>
                    Body:
                </label> <br/>
                <textarea name='body'onChange={this.onChange} value={this.state.body}></textarea>
            </div>
            <br/>
            <button type='submit' > Add Post </button>

        </form>
      </div>
    )
  }
}

Postform.PropTypes ={
    createPost : PropTypes.func.isRequired
}


export default connect(null  , {createPost}) (Postform);