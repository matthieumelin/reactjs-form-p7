import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div>
                {comments.map((item) =>
                    <li key={item}>
                        <strong>{item.name}</strong>
                        <p>{item.message}</p>
                    </li>
                )}
            </div>
        )
    }
}
