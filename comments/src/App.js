import React, { Component } from 'react';
import './App.css';

// Components
import AdminMode from './components/AdminMode';
import AddComment from './components/AddComment';
import Comments from './components/Comments';

export default class App extends Component {
      state = {
          name: "",
          message: "",
          comments: []
      }

    handleName = (event) => {
        console.log(event.target.value);
        
        this.setState({
            name: event.target.value
        })
    }

    handleMessage = (event) => {
        console.log(event.target.value);

        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const comment = {
            name: this.state.name,
            message: this.state.message
        }

        const temp = this.state.comments.concat(comment);

        this.setState({
            comments: temp
        })
    }

    render() {
        return ( 
            <div>
            <AdminMode />
            <div className="container">
                <AddComment 
                name={this.state.name}
                message={this.state.message}
                handleName={this.handleName}
                handleMessage={ this.handleMessage}
                handleSubmit={ this.handleSubmit}
                comments={this.state.comments} /> 
                <Comments comments={this.state.comments} /> 
                </div>
            </div>
        );
    }
}