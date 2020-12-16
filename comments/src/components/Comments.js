import React, {Component} from 'react'

import Comment from './Comment'

export default class Comments extends Component {
    render() {
        const {comments} = this.props;
        return (
            <div className="comments_content">
                <h3 className="title is-3">Liste des commentaires ({comments.length})</h3>
                <ul className="comments_list">
                    <Comment comments={comments} />
                </ul>
          </div>
        )
    }
}
