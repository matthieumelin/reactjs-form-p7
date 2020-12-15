import React, { Component } from 'react'

export default class AddComment extends Component {
    render() {
        const { handleName, handleMessage, handleSubmit } = this.props;
        return ( 
            <div className="add_content">
              <h2 class="title is-2">Ajouter un commentaire</h2>
              <form className="add_form" 
              onSubmit={handleSubmit}>
                <div className="field">
                  <label className="label">Name</label>
                  <div className="control">
                    <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    placeholder="Your name" 
                    className="add_name"
                    onChange={handleName} />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Message</label>
                  <div className="control">                    
                    <textarea 
                    name="message" 
                    id="message" 
                    cols="30" 
                    rows="10" 
                    placeholder="Your comment" 
                    className="add_message"
                    onChange={handleMessage}></textarea>
                  </div>
                </div>
                <div className="control">
                  <button className="button is-primary">Envoyer</button>
                </div>
              </form>
            </div>
        )
    }
}