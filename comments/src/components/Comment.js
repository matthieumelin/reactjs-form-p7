import React, { Component } from 'react'

export default class Comment extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div>
                <ul className="comments_list">
                    {comments.map((item) =>
                        <li key={item}>
                            <strong>{item.name}</strong>
                            <p>{item.message}</p>
                        </li>
                    )}
                </ul>
            </div>
        )
    }
}
