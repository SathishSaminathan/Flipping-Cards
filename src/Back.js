import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Back extends PureComponent {
    render() {
        return (
            <div className="back tile">{this.props.children}</div>
        );
    }
}

Back.propTypes = {

};

export default Back;