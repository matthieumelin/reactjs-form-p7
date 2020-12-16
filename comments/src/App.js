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
          comments: [],
          adminMode: false,
          adminMessage: "message is-info",
          adminButton: "button is-info",
          adminText: "Activer le mode d'administration",
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

    handleButton = (event) => {
        event.preventDefault();

        if (!this.state.adminMode) {
            this.setState({
                adminMode: true,
                adminMessage: "message is-danger",
                adminButton: "button is-danger",
                adminText: "Désactiver le mode d'administration",
            })
        } else {
            this.setState({ 
                adminMode: false,
                adminMessage: "message is-info",
                adminButton: "button is-info",
                adminText: "Activer le mode d'administration",
            })
        }
    }

    render() {
        return ( 
            <div>
                <div className="container">
                    <AdminMode
                    adminMessage={this.state.adminMessage}
                    adminButton={this.state.adminButton}
                    adminText={this.state.adminText}
                    handleButton={this.handleButton} />
                <div className="content">
                    <AddComment 
                    name={this.state.name}
                    message={this.state.message}
                    handleName={this.handleName}
                    handleMessage={this.handleMessage}
                    handleSubmit={this.handleSubmit}
                    comments={this.state.comments} /> 
                    <Comments comments={this.state.comments} /> 
                    </div>
                </div>
            </div>
        );
    }
}