import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      message: "",
      comments: []
      }
    }

    handleName = (event) => {
      this.setState({
        name: event.target.value
      })
    }

    handleMessage = (event) => {
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
          <div className="container">
            <div className="add_content">
              <h1 className="add_title">Ajouter un commentaire</h1>
              <form action="" method="post" className="add_form" onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="field_label">Name</label>
                  <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  placeholder="Your name" 
                  className="add_name"
                  onChange={this.handleName} />
                </div>
                <div className="field">
                  <label className="field_label">Message</label>
                  <textarea 
                  name="message" 
                  id="message" 
                  cols="30" 
                  rows="10" 
                  placeholder="Your comment" 
                  className="add_message"
                  onChange={this.handleMessage}></textarea>
                </div>
                <button type="submit" className="add_button">Envoyer</button>
              </form>
            </div>
            <div className="comments_content">
              <h1 className="comments_title">Liste des commentaires ({this.state.comments.length})</h1>
              <ul className="comments_list">
                {this.state.comments.map((item) =>
                  <li>
                    <strong>{item.name}</strong>
                    <p>{item.message}</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        );
    }
}

export default App;