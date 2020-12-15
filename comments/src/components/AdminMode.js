import React, { Component } from 'react'

export default class AdminMode extends Component {
    render() {
        return (
            <div className="message is-info">
                <div className="message-body">
                    <button className="button is-info">Activer le mode d'administration</button>
                </div>
            </div>
        )
    }
}
