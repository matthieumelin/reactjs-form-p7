class App extends React.Component {
    state = {
        comments: [ 
            { name: "Your name", message: "Your comment" },
        ]
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({
            comments: [
                { name: event.target.value, message: event.target.value }
            ]
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Say something</h3>
                <input type="text" name="name" id="name" value={this.state.comments[0].name} />
                <textarea name="comment" id="comment" cols="30" rows="10" value={this.state.comments[0].message}></textarea>
                <button type="submit">Comment</button>
            </form>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('app'));