class App extends React.Component {
    state = {
        name: "",
        message: "",
        comments: []
    }

    handleName = (event) => {
        console.log("name: " + event.target.value);
        this.setState({
            name: event.target.value
        })
    }

    handleMessage = (event) => {
        console.log("message: " + event.target.value);
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
        
        console.log(temp);

        this.setState({
            comments: temp
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Say something</h3>
                <input type="text" name="name" id="name" 
                placeholder="Your name"
                value={this.state.name} 
                onChange={this.handleName} />
                <textarea name="comment" id="comment" cols="30" rows="10" 
                placeholder="Your message"
                value={this.state.message} 
                onChange={this.handleMessage}></textarea>
                <button type="submit">Comment</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));