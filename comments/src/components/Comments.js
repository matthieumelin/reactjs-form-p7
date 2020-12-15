import React, {Component} from 'react'

import Comment from './Comment'

export default class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div className="comments_content">
            <h2 className="title is-2">Liste des commentaires ({comments.length})</h2>
            <Comment comments={comments} />
          </div>
        )
    }
}
