import React, { Component } from 'react'

export default class AdminMode extends Component {
    render() {
        const { adminMessage, adminButton, adminText, handleButton } = this.props;
        return (
            <form onSubmit={handleButton}>
                <div className={adminMessage}>
                    <div className="message-body">
                        <button
                        className={adminButton}>{adminText}</button>
                    </div>
                </div>
            </form>
        )
    }
}
