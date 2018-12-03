import React, { Component, PropTypes } from 'react'

class Front extends Component {
    render () {
        return (
            <div className="front tile">{this.props.children}</div>
        )
    }
}

Front.propTypes = {

}

export default Front